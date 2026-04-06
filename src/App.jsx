import React from 'react';
import './App.css';

export default function App() {
  return (
    <>
      {/* NAV */}
      <nav>
        <div className="logo">mithesh.dev</div>
        <ul className="nav-links">
          <li><a href="#about">about</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="bg-orb orb1" />
        <div className="bg-orb orb2" />
        <div className="hero-grid">
          <div>
            <div className="hero-label">&#9679; available for internships</div>
            <h1 className="hero-name">Hi, I'm<br /><span>Mithesh</span></h1>
            <p className="hero-tagline">
              <span className="highlight">BCA student</span> building real-world software.<br />
              Focused on clean code, scalable systems,<br />
              and cracking my dream <span className="highlight">FAANG</span> offer.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn-primary">View Projects →</a>
              <a href="#contact" className="btn-outline">Get in Touch</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-top">
              <span className="status-dot" /><span className="open-label">open to work</span>
            </div>
            <div className="code-block">
              <span className="kw">const</span> mithesh = {'{'}<br />
              &nbsp;&nbsp;<span className="key">role</span>: <span className="str">"Full Stack Dev"</span>,<br />
              &nbsp;&nbsp;<span className="key">year</span>: <span className="num">2</span>,<br />
              &nbsp;&nbsp;<span className="key">degree</span>: <span className="str">"BCA"</span>,<br />
              &nbsp;&nbsp;<span className="key">goal</span>: <span className="str">"FAANG"</span>,<br />
              &nbsp;&nbsp;<span className="key">status</span>: <span className="str2">"building"</span><br />
              {'}'}
            </div>
            <div className="stat-row">
              <div className="stat"><div className="stat-num">8+</div><div className="stat-label">projects</div></div>
              <div className="stat"><div className="stat-num">DSA</div><div className="stat-label">focused</div></div>
              <div className="stat"><div className="stat-num">2026</div><div className="stat-label">grad year</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="section-label">// 01. about</div>
        <h2 className="section-title">Who I <span>Am</span></h2>
        <div className="about-grid">
          <div>
            <div className="about-text">
              <p>I'm <em>Mithesh</em>, a 2nd year BCA student deeply passionate about software engineering. I don't just write code — I build products that solve real problems.</p>
              <p>My goal is to land a role at a <em>top-tier tech company</em> by mastering both the fundamentals (DSA, system design) and modern full-stack development.</p>
              <p>When I'm not coding, I'm reading about <em>distributed systems</em>, solving LeetCode problems, or contributing to open-source projects.</p>
            </div>
            <div className="stack-tags">
              {['React','Node.js','Python','Java','MongoDB','SQL','Git','REST APIs','DSA'].map(t => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
          <div className="learning-card">
            <div className="learning-title">// currently learning</div>
            {[
              { icon: '⚙', label: 'System Design', pct: 55 },
              { icon: '🌐', label: 'Next.js 14', pct: 70 },
              { icon: '☁', label: 'AWS Basics', pct: 35 },
              { icon: '📊', label: 'LeetCode DSA', pct: 80 },
            ].map(item => (
              <div className="learn-item" key={item.label}>
                <div className="learn-icon">{item.icon}</div>
                <span>{item.label}</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-label">// 02. projects</div>
        <h2 className="section-title">What I've <span>Built</span></h2>
        <div className="projects-grid">
          {[
            {
              icon: '🛒', featured: true, title: 'ShopNest — Full Stack E-commerce',
              desc: 'A complete e-commerce platform with user authentication, product catalog, cart management, and Razorpay payment integration. Handles 200+ products with real-time inventory tracking and an admin dashboard.',
              tech: ['React','Node.js','MongoDB','Express','JWT','Razorpay'], stripe: 'stripe-green',
              github: 'https://github.com/MitheshMakam', live: 'https://github.com/MitheshMakam'
            },
            {
              icon: '💬', title: 'ChitChat — Real-Time Messenger',
              desc: 'Real-time chat app with Socket.io supporting group rooms, file sharing, and read receipts. Implemented JWT auth and Redis for session management.',
              tech: ['Socket.io','React','Redis','Node.js'], stripe: 'stripe-purple',
              github: 'https://github.com/MitheshMakam'
            },
            {
              icon: '📋', title: 'DevBoard — Task Tracker',
              desc: 'Kanban-style project management tool with drag & drop, team collaboration, and deadline alerts. Built with clean REST API architecture.',
              tech: ['React','Python','FastAPI','PostgreSQL'], stripe: 'stripe-green',
              github: 'https://github.com/MitheshMakam', live: 'https://github.com/MitheshMakam'
            
            },
          ].map(p => (
            <div className={`project-card ${p.featured ? 'featured' : ''}`} key={p.title}>
              <div className={`proj-stripe ${p.stripe}`} />
              <div className="proj-top">
                <div className="proj-icon">{p.icon}</div>
                <div className="proj-links">
                  {p.github && <a href={p.github} className="proj-link" target="_blank" rel="noreferrer">GitHub →</a>}
                  {p.live && <a href={p.live} className="proj-link" target="_blank" rel="noreferrer">Live →</a>}
                </div>
              </div>
              <div className="proj-title">{p.title}</div>
              <div className="proj-desc">{p.desc}</div>
              <div className="proj-tech">
                {p.tech.map(t => <span className="tech-pill" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="section-label">// 03. skills</div>
        <h2 className="section-title">Tech <span>Stack</span></h2>
        <div className="skills-grid">
          {[
            { cat: 'Frontend', items: [['React / JSX', 4],['HTML & CSS', 5],['JavaScript', 4],['Tailwind CSS', 3]] },
            { cat: 'Backend',  items: [['Node.js', 4],['Python', 3],['Java (DSA)', 4],['REST APIs', 4]] },
            { cat: 'Tools & DB', items: [['MongoDB', 3],['MySQL', 3],['Git & GitHub', 4],['Linux / CLI', 2]] },
          ].map(block => (
            <div className="skill-block" key={block.cat}>
              <div className="skill-cat">{block.cat}</div>
              {block.items.map(([name, level]) => (
                <div className="skill-row" key={name}>
                  {name}
                  <div className="skill-level">
                    {[1,2,3,4,5].map(i => <div key={i} className={`dot ${i <= level ? 'on' : ''}`} />)}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="section-label" style={{ textAlign: 'center' }}>// 04. contact</div>
        <h2 className="section-title" style={{ marginBottom: 0 }}>Let's <span>Connect</span></h2>
        <p className="contact-sub">
          I'm actively seeking internships and open-source collaborations.<br />
          Whether it's a project, an internship, or just a chat about tech — reach out!
        </p>
        <div className="contact-links">
          <a href="mitheshmakam6@gmail.com" className="contact-link">📧 Email Me</a>
          <a href="https://linkedin.com/in/mithesh" className="contact-link" target="_blank" rel="noreferrer">💼 LinkedIn</a>
          <a href="https://github.com/MitheshMakam" className="contact-link" target="_blank" rel="noreferrer">🐙 GitHub</a>
          <a href="/resume.pdf" className="contact-link" target="_blank" rel="noreferrer">📄 Resume PDF</a>
        </div>
      </section>

      <footer>built by mithesh &nbsp;·&nbsp; 2025 &nbsp;·&nbsp; open to internships</footer>
    </>
  );
}
