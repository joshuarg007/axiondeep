import type { Metadata } from "next";
import "./home.css";
import Reveal from "./Reveal";

export const metadata: Metadata = {
  title: "Axion Deep Labs | Independent R&D Laboratory",
  description:
    "Axion Deep Labs is an independent R&D company. We publish original work in machine learning, quantum computing, and topology, then build it into products people use.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="site">
      <Reveal />

      <nav className="nav">
        <div className="wrap">
          <a className="logo" href="/">
            <b>AXION</b> <span>DEEP</span>
          </a>
          <div className="nav-links">
            <a href="#research">Research</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#ethos">Ethos</a>
            <a href="/about">About</a>
            <a className="nav-cta" href="/contact">
              Work with us
            </a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="aurora" />
        <div className="grain" />
        <div className="scrim" />
        <div className="wrap">
          <span className="mono eyebrow">
            Independent R&amp;D Laboratory &middot; Las Cruces, NM &middot; Est. 2026
          </span>
          <h1>
            We do the research.
            <br />
            <span className="g">Then we ship it.</span>
          </h1>
          <p className="lead">
            Axion Deep Labs is an independent R&amp;D company. We publish original work in
            machine learning, quantum computing, and topology, then build it into products
            people actually use.
          </p>
          <div className="cta-row">
            <a className="btn btn-p" href="#research">
              Explore the work &rarr;
            </a>
            <a className="btn btn-g" href="#research">
              Read the research
            </a>
          </div>
        </div>
        <div className="ticker">
          <div className="wrap">
            <span>
              <b>PERSIST</b> &middot; topological forgetting
            </span>
            <span>
              <b>EXP-04</b> &middot; grokking dynamics
            </span>
            <span>
              <b>SDI</b> &middot; regression prediction
            </span>
            <span>
              <b>QUANTA</b> &middot; quantum education
            </span>
          </div>
        </div>
      </header>

      {/* MANIFESTO */}
      <section className="sec manifesto">
        <div className="wrap">
          <div className="reveal">
            <span className="mono eyebrow">The model</span>
            <p className="big" style={{ marginTop: 20 }}>
              Not an agency. A <em>laboratory.</em> We build technology at the bench, prove it
              with reproducible experiments, and spin the results out as products and
              licensed IP.
            </p>
          </div>
          <div className="stats reveal">
            <div className="stat">
              <div className="n">6</div>
              <div className="l">Active programs</div>
            </div>
            <div className="stat">
              <div className="n">7</div>
              <div className="l">Products incubated</div>
            </div>
            <div className="stat">
              <div className="n">1</div>
              <div className="l">Spun-out entity</div>
            </div>
            <div className="stat">
              <div className="n">
                $0<small>.</small>
              </div>
              <div className="l">Outside funding</div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="sec" id="research">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="mono eyebrow">The research</span>
            <h2>Original work, reproducible results.</h2>
            <p>
              Every program starts as a question and ends with a measured answer. Here is what
              is running now.
            </p>
          </div>
          <div className="reveal">
            <div className="prog">
              <div className="code">EXP-01</div>
              <div>
                <h3>
                  <a href="/projects/persist">PERSIST &middot; Topological Forgetting</a>
                </h3>
                <p className="q">
                  Can the topology of a loss landscape predict how well a model resists
                  catastrophic forgetting?
                </p>
                <span className="find">
                  H0 predicts mitigation benefit &nbsp;<b>&rho; = 0.86, p = 2.4e-6</b>
                </span>
              </div>
              <div className="arrow">&rarr;</div>
            </div>
            <div className="prog">
              <div className="code">EXP-04</div>
              <div>
                <h3>
                  <a href="/projects/grokking">Grokking Dynamics</a>
                </h3>
                <p className="q">
                  Does the persistent homology of loss-landscape slices give an early-warning
                  signal before a model suddenly generalizes?
                </p>
                <span className="find">
                  Directional signal at &nbsp;<b>WD = 0.03</b>, constrained HPC replication
                </span>
              </div>
              <div className="arrow">&rarr;</div>
            </div>
            <div className="prog">
              <div className="code">SDI</div>
              <div>
                <h3>
                  <a href="/projects/sdi">Structural Divergence Index</a>
                </h3>
                <p className="q">
                  Can we predict fine-tuning regression from weight geometry, without running a
                  single benchmark?
                </p>
                <span className="find">
                  Target &nbsp;<b>&rho; &ge; 0.7</b> across 3+ model families
                </span>
              </div>
              <div className="arrow">&rarr;</div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="sec" id="portfolio">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="mono eyebrow">The portfolio</span>
            <h2>Research, built into products.</h2>
            <p>
              What we learn at the bench becomes software people ship on. Each is built to spin
              out on its own.
            </p>
          </div>
          <div className="grid-p reveal">
            <div className="pcard">
              <span className="status live">Live &middot; Revenue</span>
              <h3>Made4Founders</h3>
              <p>The command center for founders. One place to run the whole company.</p>
            </div>
            <div className="pcard">
              <span className="status live">Live &middot; Revenue</span>
              <h3>Site2CRM</h3>
              <p>Website-to-CRM with AI lead scoring. Turn visitors into a pipeline.</p>
            </div>
            <div className="pcard">
              <span className="status">Beta</span>
              <h3>Vesper</h3>
              <p>Autonomous, multi-vector security analysis. Scope-enforced by design.</p>
            </div>
            <div className="pcard">
              <span className="status">Beta</span>
              <h3>Forma</h3>
              <p>Full-stack React platform. A builder and a schema-driven runtime.</p>
            </div>
            <div className="pcard">
              <span className="status">In development</span>
              <h3>QUANTA</h3>
              <p>Visual quantum-computing education. Build circuits, see the math.</p>
            </div>
            <div className="pcard">
              <span className="status">Forming LLC</span>
              <h3>Axion Gate Systems</h3>
              <p>Automated gate access for communities, spun into its own company.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ETHOS */}
      <section className="sec ethos" id="ethos">
        <div className="wrap">
          <div className="ethos-grid">
            <div className="reveal">
              <span className="mono eyebrow" style={{ color: "var(--fuchsia)" }}>
                The ethos
              </span>
              <h2 style={{ marginTop: 16 }}>
                Build for the people who <span className="g">need it most.</span>
              </h2>
              <p>
                We contribute to the world through real tools, not content marketing dressed as
                charity. We have been on the receiving end, and that informs everything we
                build.
              </p>
              <p>
                A portion of our engineering output goes to open-source tools for underserved
                communities. No paywall, no signup, no strings.
              </p>
            </div>
            <div className="card reveal">
              <span className="mono">Active program</span>
              <h3>Food Bank Tech</h3>
              <p>
                Open-source inventory, client intake, volunteer scheduling, and delivery
                routing for food banks. We talk to the people who use these services first, then
                build what hurts most, and release it free. Built by people who have stood in
                that line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="foot">
        <div className="wrap">
          <div className="foot-top">
            <div>
              <div className="logo">
                <b>AXION</b> <span style={{ color: "var(--violet)" }}>DEEP</span>
              </div>
              <p className="desc">
                An independent R&amp;D company. We research at the edge and ship what works.
              </p>
            </div>
            <div>
              <h5>Research</h5>
              <ul>
                <li>
                  <a href="/projects/persist">PERSIST</a>
                </li>
                <li>
                  <a href="/projects/grokking">Grokking</a>
                </li>
                <li>
                  <a href="/projects/sdi">SDI</a>
                </li>
                <li>
                  <a href="/research">Publications</a>
                </li>
              </ul>
            </div>
            <div>
              <h5>Portfolio</h5>
              <ul>
                <li>
                  <a href="/projects/made4founders">Made4Founders</a>
                </li>
                <li>
                  <a href="/projects/site2crm">Site2CRM</a>
                </li>
                <li>
                  <a href="/projects/vesper">Vesper</a>
                </li>
                <li>
                  <a href="/projects/quanta">QUANTA</a>
                </li>
              </ul>
            </div>
            <div>
              <h5>Company</h5>
              <ul>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/mission">Ethos</a>
                </li>
                <li>
                  <a href="/careers">Careers</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="foot-bot">
            <span>Axion Deep Labs, Inc. &middot; C-Corp, New Mexico &middot; Las Cruces</span>
            <span>hello@axiondeep.com &middot; Bootstrapped</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
