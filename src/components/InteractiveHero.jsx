import React, { useRef, useEffect, useCallback } from "react";

const InteractiveHero = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const cubesRef = useRef([]);

  const initParticles = useCallback((width, height) => {
    const particles = [];
    const count = Math.min(60, Math.floor((width * height) / 15000));

    for (let i = 0; i < count; i++) {
      // Bias toward left side - these are the "ideas", ethereal
      const xPos = Math.pow(Math.random(), 1.5) * width * 0.6;
      particles.push({
        x: xPos,
        y: Math.random() * height,
        baseX: xPos,
        baseY: Math.random() * height,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.06 + 0.02, // More subtle
        drift: Math.random() * Math.PI * 2,
        driftSpeed: Math.random() * 0.025 + 0.015,
        driftRadius: Math.random() * 40 + 20,
      });
    }
    return particles;
  }, []);

  const initCubes = useCallback((width, height) => {
    const cubes = [];
    const count = Math.min(12, Math.floor(width / 120)); // More cubes

    for (let i = 0; i < count; i++) {
      // Bias toward medium-large sizes (8-22px), no huge ones
      const size = 8 + Math.pow(Math.random(), 0.7) * 14;
      // Bias toward right side - these are "solid", formed
      const xPos = width * 0.45 + Math.random() * width * 0.5;
      const yPos = height * (0.08 + Math.random() * 0.84);
      // Larger cubes spin faster
      const sizeRatio = size / 22;
      // Random drift direction
      const driftAngle = Math.random() * Math.PI * 2;
      const driftSpeed = 0.15 + Math.random() * 0.25;
      cubes.push({
        x: xPos,
        y: yPos,
        baseX: xPos,
        baseY: yPos,
        size,
        // Drift in random direction
        driftAngle,
        driftSpeed,
        driftOffset: Math.random() * Math.PI * 2,
        // Spin on all axes (randomized speeds and directions)
        rotZ: Math.random() * Math.PI * 2,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        spinZ: (Math.random() - 0.5) * (0.012 + sizeRatio * 0.024),
        spinX: (Math.random() - 0.5) * (0.008 + sizeRatio * 0.016),
        spinY: (Math.random() - 0.5) * (0.006 + sizeRatio * 0.014),
        opacity: Math.random() * 0.12 + 0.08,
      });
    }

    cubes.sort((a, b) => a.size - b.size);
    return cubes;
  }, []);

  const drawCube = useCallback((ctx, cube) => {
    const { x, y, size, rotZ, rotX, rotY, opacity } = cube;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotZ);

    const s = size;
    // rotX and rotY affect depth/angle for 3D tumble effect
    const depthMod = 0.25 + Math.sin(rotX) * 0.2;
    const angleMod = Math.PI / 6 + Math.cos(rotY) * 0.3;
    const skew = Math.sin(rotY) * 0.15;
    const depth = s * depthMod;

    const dx = Math.cos(angleMod) * depth;
    const dy = Math.sin(angleMod) * depth * (1 + skew);

    // Soft shadow
    ctx.fillStyle = `rgba(0, 0, 0, ${opacity * 0.12})`;
    ctx.beginPath();
    ctx.moveTo(3, s + 3);
    ctx.lineTo(s + 3, s + 3);
    ctx.lineTo(s + dx + 3, s - dy + 3);
    ctx.lineTo(dx + 3, -dy + 3);
    ctx.closePath();
    ctx.fill();

    // Top face - cyan
    ctx.fillStyle = `rgba(90, 200, 215, ${opacity})`;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(s, 0);
    ctx.lineTo(s + dx, -dy);
    ctx.lineTo(dx, -dy);
    ctx.closePath();
    ctx.fill();

    // Front face - violet
    ctx.fillStyle = `rgba(130, 110, 180, ${opacity * 0.85})`;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(s, 0);
    ctx.lineTo(s, s);
    ctx.lineTo(0, s);
    ctx.closePath();
    ctx.fill();

    // Right face - deep
    ctx.fillStyle = `rgba(70, 80, 140, ${opacity * 0.7})`;
    ctx.beginPath();
    ctx.moveTo(s, 0);
    ctx.lineTo(s + dx, -dy);
    ctx.lineTo(s + dx, s - dy);
    ctx.lineTo(s, s);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width, height;
    let prevWidth = 0, prevHeight = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Only init once, then scale positions on resize
      if (particlesRef.current.length === 0) {
        particlesRef.current = initParticles(width, height);
        cubesRef.current = initCubes(width, height);
        prevWidth = width;
        prevHeight = height;
      } else if (prevWidth && prevHeight) {
        // Scale existing positions proportionally
        const scaleX = width / prevWidth;
        const scaleY = height / prevHeight;
        particlesRef.current.forEach(p => {
          p.x *= scaleX;
          p.baseX *= scaleX;
          p.y *= scaleY;
          p.baseY *= scaleY;
        });
        cubesRef.current.forEach(c => {
          c.x *= scaleX;
          c.y *= scaleY;
          c.baseX *= scaleX;
          c.baseY *= scaleY;
        });
        prevWidth = width;
        prevHeight = height;
      }
    };

    resize();
    window.addEventListener("resize", resize);

    let time = 0;
    const animate = () => {
      time++;
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const cubes = cubesRef.current;

      // Draw wispy particles (left side - ideas, ethereal)
      particles.forEach((p) => {
        p.drift += p.driftSpeed;
        p.x = p.baseX + Math.sin(p.drift) * p.driftRadius;
        p.y = p.baseY + Math.cos(p.drift * 0.6) * p.driftRadius * 0.7;

        // Soft, smoky gradient
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 6);
        gradient.addColorStop(0, `rgba(6, 182, 212, ${p.opacity})`);
        gradient.addColorStop(0.3, `rgba(100, 120, 200, ${p.opacity * 0.6})`);
        gradient.addColorStop(0.6, `rgba(139, 92, 246, ${p.opacity * 0.3})`);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 6, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw cubes (right side - formed but ephemeral)
      cubes.forEach((cube) => {
        // Drift in random direction (oscillating)
        const drift = Math.sin(time * 0.008 + cube.driftOffset) * 30;
        cube.x = cube.baseX + Math.cos(cube.driftAngle) * drift * cube.driftSpeed;
        cube.y = cube.baseY + Math.sin(cube.driftAngle) * drift * cube.driftSpeed;
        // Spin on all axes
        cube.rotZ += cube.spinZ;
        cube.rotX += cube.spinX;
        cube.rotY += cube.spinY;
        drawCube(ctx, cube);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (!prefersReduced) {
      animate();
    } else {
      time = 1000;
      particlesRef.current.forEach((p) => {
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 6);
        gradient.addColorStop(0, `rgba(6, 182, 212, ${p.opacity})`);
        gradient.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 6, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      cubesRef.current.forEach((cube) => drawCube(ctx, cube));
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initParticles, initCubes, drawCube]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ display: "block" }}
    />
  );
};

export default InteractiveHero;
