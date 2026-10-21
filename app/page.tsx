import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Code2, Cpu, BrainCircuit, Sparkles } from "lucide-react";
import { profile, projects, skills, activities } from "@/site-data";

function SectionHeading({ eyebrow, title, number }: { eyebrow: string; title: string; number: string }) {
  return <div className="section-heading"><span className="section-number">{number}</span><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div></div>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav container">
        <a href="#home" className="brand" aria-label="Sabareeswaran home"><span className="brand-mark">S<span>.</span></span><span>sabareeswaran<span className="brand-muted">.dev</span></span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a></div>
        <a className="nav-cta" href={profile.linkedin} target="_blank" rel="noreferrer">Let’s connect <ArrowUpRight size={15}/></a>
      </nav>

      <section id="home" className="hero container">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot"/> OPEN TO OPPORTUNITIES <span className="availability-line"/></div>
          <p className="hero-intro">Hello, I’m</p>
          <h1>Sabareeswaran<span className="accent">.</span><br/><span className="serif-line">I build with curiosity.</span></h1>
          <p className="hero-description">A Computer Science graduate exploring the intersection of <strong>software, machine learning,</strong> and real-world problem solving.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button button-quiet" href="#contact">Get in touch <ArrowDown size={16}/></a></div>
          <div className="hero-meta"><span><MapPin size={14}/>{profile.location}</span><span className="meta-divider"/> <span>Graduated 2026</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract technical illustration">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
          <div className="art-glow"/>
          <div className="code-card"><div className="code-top"><span/><span/><span/><label>curiosity.py</label></div><pre><span className="code-purple">def</span> <span className="code-green">keep_building</span>():{"\n"}  ideas = <span className="code-orange">explore</span>(){"\n"}  skills = <span className="code-blue">learn</span>(ideas){"\n"}  <span className="code-purple">return</span> skills</pre></div>
          <div className="floating-chip chip-ai"><BrainCircuit size={16}/> Machine Learning</div>
          <div className="floating-chip chip-code"><Code2 size={16}/> Python</div>
          <div className="floating-chip chip-cpu"><Cpu size={16}/> Embedded Systems</div>
          <div className="art-caption"><span className="caption-star"><Sparkles size={15}/></span><span><strong>Curiosity-led development</strong><small>Learn · Build · Iterate</small></span></div>
          <div className="art-index">FIG. 01 — MY WORKING MINDSET</div>
        </div>
        <a href="#about" className="scroll-cue"><span className="scroll-line"/> SCROLL TO EXPLORE</a>
      </section>

      <section id="about" className="section container">
        <SectionHeading number="01" eyebrow="A LITTLE ABOUT ME" title="Curious by nature. Builder by practice."/>
        <div className="about-grid"><div className="about-lead"><p className="large-copy">I’m at the beginning of my professional journey—and I’m here to <span className="highlight">keep learning by building.</span></p></div><div className="about-body"><p>{profile.summary}</p><p>I enjoy working through a problem from its fundamentals, experimenting with a solution, and learning what can be improved along the way.</p><div className="about-facts"><div><span className="fact-label">EDUCATION</span><strong>{profile.education.degree}</strong><small>{profile.education.school}</small></div><div><span className="fact-label">ACADEMIC SCORE</span><strong>{profile.education.score}</strong><small>Graduation year: {profile.education.year}</small></div></div></div></div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="container"><SectionHeading number="02" eyebrow="SELECTED ACADEMIC WORK" title="Projects that made me think."/>
          <p className="section-intro">A selection of projects across machine learning, computer vision, and hardware—each one a chance to turn concepts into working ideas.</p>
          <div className="project-grid">{projects.map((project, i) => <article className={`project-card project-card-${i+1}`} key={project.number}>
            <div className="project-top"><span className="project-number">{project.number} / 04</span><span className="project-icon">{i===0?<BrainCircuit size={20}/>:i===1?<Code2 size={20}/>:i===2?<Sparkles size={20}/>:<Cpu size={20}/>}</span></div>
            <p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p>
            <div className="tag-list">{project.technologies.map(tag=><span className="tag" key={tag}>{tag}</span>)}</div>
            <div className="project-bottom"><span>ACADEMIC PROJECT</span><span className="project-arrow" aria-hidden="true"><ArrowUpRight size={17}/></span></div>
          </article>)}</div>
          <p className="project-note">Project repositories and live demos were not listed in the supplied resume. Add verified links when they’re ready.</p>
        </div>
      </section>

      <section id="skills" className="section container">
        <SectionHeading number="03" eyebrow="MY TOOLKIT" title="Tools I use to make things happen."/>
        <p className="section-intro">A growing toolkit built through coursework, projects, and independent practice. I’m transparent about what I’m still learning.</p>
        <div className="skills-layout"><div className="skills-aside"><div className="skills-symbol"><Code2 size={31}/><span/></div><h3>Always learning.<br/><em>Always building.</em></h3><p>Strong fundamentals first; new tools as the problem demands.</p></div><div className="skills-list">{skills.map((group,i)=><div className="skill-group" key={group.title}><div className="skill-group-head"><span>0{i+1}</span><h3>{group.title}</h3></div><div className="tag-list">{group.skills.map(skill=><span className="tag" key={skill}>{skill}</span>)}</div></div>)}</div></div>
      </section>

      <section className="section experience-section"><div className="container"><SectionHeading number="04" eyebrow="BEYOND THE CLASSROOM" title="Teamwork is part of the build."/><div className="activity-list">{activities.map((item,i)=><article className="activity" key={item.organization}><div className="activity-index">0{i+1}</div><div className="activity-main"><p className="project-category">{item.title}</p><h3>{item.organization}</h3><p>{item.description}</p></div><span className="activity-mark"><ArrowUpRight size={18}/></span></article>)}</div><div className="certifications"><span className="fact-label">CERTIFICATIONS & LEARNING</span><div className="tag-list">{profile.certifications.map(cert=><span className="tag" key={cert}>{cert}</span>)}</div></div></div></section>

      <section id="contact" className="contact-section"><div className="container contact-inner"><div><p className="eyebrow">HAVE A ROLE OR IDEA IN MIND?</p><h2>Let’s make something<br/><span className="serif-line">meaningful.</span></h2><p className="contact-copy">I’m looking for opportunities to grow as a software developer, contribute to a team, and build practical solutions.</p></div><div className="contact-card"><span className="contact-card-label">GET IN TOUCH</span><a className="contact-link" href={`mailto:${profile.email}`}><Mail size={19}/><span>{profile.email}</span><ArrowUpRight size={17}/></a><a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={19}/><span>Connect on LinkedIn</span><ArrowUpRight size={17}/></a><div className="contact-location"><MapPin size={15}/>{profile.location}</div></div></div></section>
      <footer className="footer container"><a href="#home" className="brand"><span className="brand-mark">S<span>.</span></span><span>sabareeswaran<span className="brand-muted">.dev</span></span></a><p>Designed with intention. Built with curiosity.</p><span>© {new Date().getFullYear()} Sabareeswaran Kolanjiyappan</span></footer>
    </main>
  );
}