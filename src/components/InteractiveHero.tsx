"use client";

import { useRef, useEffect, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  drift: number;
  driftSpeed: number;
  driftRadius: number;
}

interface Cube {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  driftAngle: number;
  driftSpeed: number;
  driftOffset: number;
  rotZ: number;
  rotX: number;
  rotY: number;
  spinZ: number;
  spinX: number;
  spinY: number;
  opacity: number;
}

export default function InteractiveHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const cubesRef = useRef<Cube[]>([]);

  const initParticles = useCallback((width: number, height: number): Particle[] => {
    const particles: Particle[] = [];
    const count = Math.min(60, Math.floor((width * height) / 15000));

    for (let i = 0; i < count; i++) {
      const xPos = Math.pow(Math.random(), 1.5) * width * 0.6;
      particles.push({
        x: xPos,
        y: Math.random() * height,
        baseX: xPos,
        baseY: Math.random() * height,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.06 + 0.02,
        drift: Math.random() * Math.PI * 2,
        driftSpeed: Math.random() * 0.025 + 0.015,
        driftRadius: Math.random() * 40 + 20,
      });
    }
    return particles;
  }, []);

  const initCubes = useCallback((width: number, height: number): Cube[] => {
    const cubes: Cube[] = [];
    const count = Math.min(12, Math.floor(width / 120));

    for (let i = 0; i < count; i++) {
      const size = 8 + Math.pow(Math.random(), 0.7) * 14;
      const xPos = width * 0.45 + Math.random() * width * 0.5;
      const yPos = height * (0.08 + Math.random() * 0.84);
      const sizeRatio = size / 22;
      const driftAngle = Math.random() * Math.PI * 2;
      const driftSpeed = 0.15 + Math.random() * 0.25;

      cubes.push({
        x: xPos,
        y: yPos,
        baseX: xPos,
        baseY: yPos,
        size,
        driftAngle,
        driftSpeed,
        driftOffset: Math.random() * Math.PI * 2,
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

  const drawCube = useCallback((ctx: CanvasRenderingContext2D, cube: Cube) => {
    const { x, y, size, rotZ, rotX, rotY, opacity } = cube;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotZ);

    const s = size;
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
    if (!ctx) return;

    let width: number, height: number;
    let prevWidth = 0, prevHeight = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (particlesRef.current.length === 0) {
        particlesRef.current = initParticles(width, height);
        cubesRef.current = initCubes(width, height);
        prevWidth = width;
        prevHeight = height;
      } else if (prevWidth && prevHeight) {
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

      particles.forEach((p) => {
        p.drift += p.driftSpeed;
        p.x = p.baseX + Math.sin(p.drift) * p.driftRadius;
        p.y = p.baseY + Math.cos(p.drift * 0.6) * p.driftRadius * 0.7;

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

      cubes.forEach((cube) => {
        const drift = Math.sin(time * 0.008 + cube.driftOffset) * 30;
        cube.x = cube.baseX + Math.cos(cube.driftAngle) * drift * cube.driftSpeed;
        cube.y = cube.baseY + Math.sin(cube.driftAngle) * drift * cube.driftSpeed;
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
}
