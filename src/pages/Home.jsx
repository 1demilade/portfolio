import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm.jsx'
import FitText from '../components/FitText.jsx'
import { PartsCard, ResultsCard } from '../components/Fragments.jsx'
import Icon from '../components/Icon.jsx'
import { NAV } from '../components/SiteHeader.jsx'
import Shot from '../components/Shot.jsx'
import portrait640 from '../assets/img/portrait-640.webp'
import portrait1100 from '../assets/img/portrait-1100.webp'
import { LINKS, LOCATION, SOCIAL } from '../config.js'
import { PROJECTS } from '../data/projects.js'
import { SERVICES, SKILL_GROUPS } from '../data/skills.js'
import './Home.css'

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <Work />
        <About />
        <Skills />
        <Services />
        <Contact />
      </main>
    </>
  )
}

function Hero() {
  return (
    <header className="hero frame">
      <div className="hero__intro">
        <p className="hero__sentence">I build websites and web apps, with a background in AI and robotics.</p>
        <div className="hero__actions">
          <Link to="/#projects" className="button button--accent">
            See my projects <Icon name="arrow" />
          </Link>
          <Link to="/#contact" className="text-link">
            Contact me
          </Link>
        </div>
      </div>

      <nav className="hero__nav" aria-label="Main">
        <ul>
          {NAV.map((item) => (
            <li key={item.label}>
              <Link to={item.to} className="hero__navlink">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <h1 className="hero__title">
        <span className="hero__name-wrap">
          <FitText className="hero__name">David Adeyemi</FitText>
        </span>
        <span className="hero__role">Web developer and computer engineer</span>
      </h1>

      <p className="hero__place">Based in {LOCATION}</p>
      <ul className="hero__social">
        <li>
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="text-link">
            GitHub
          </a>
        </li>
        <li>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="text-link">
            LinkedIn
          </a>
        </li>
      </ul>

      <ul className="hero__strip" aria-label="Projects">
        {PROJECTS.map((p) => (
          <li key={p.slug}>
            <Link to={`/projects/${p.slug}`} className="hero__tile">
              <span className={`hero__tile-media work__visual--${FIELD_TINT[p.field]}`}>
                <Shot image={p.detail || p.hero} sizes="(min-width: 760px) 24vw, 46vw" eager />
              </span>
              <span className="hero__tile-name">{p.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

const FIELD_TINT = { red: 'red', etu: 'etu', green: 'green', yellow: 'tint-yellow', blue: 'tint-blue' }

function Work() {
  return (
    <section className="work" id="projects" aria-labelledby="work-title">
      <div className="work__head frame">
        <h2 id="work-title" className="section-title" data-reveal>
          Projects
        </h2>
        <p className="work__note" data-reveal style={{ '--i': 1 }}>
          Two websites I designed and built end to end, one machine learning web app, and two robots I wired and
          programmed.
        </p>
      </div>

      {PROJECTS.map((p, i) => (
        <article className={`work__block work__block--${i + 1}`} key={p.slug} aria-labelledby={`${p.slug}-title`}>
          <Link
            to={`/projects/${p.slug}`}
            className={`work__visual work__visual--${FIELD_TINT[p.field]}`}
            data-reveal="clip"
            tabIndex={-1}
            aria-hidden="true"
          >
            <Shot image={p.hero} sizes="(min-width: 900px) 62vw, 110vw" />
          </Link>

          <div className="work__cluster">
            <div className="work__detail" data-reveal>
              {p.detail && (
                <Shot image={p.detail} sizes="(min-width: 900px) 30vw, 70vw" className="work__detail-shot" />
              )}
              {p.slug === 'cocoacare' && <ResultsCard results={p.results} compact />}
              {p.parts && <PartsCard parts={p.parts.slice(0, 4)} />}
            </div>
            <div className="work__text">
              <h3 id={`${p.slug}-title`} className="work__title" data-reveal style={{ '--i': 1 }}>
                <Link to={`/projects/${p.slug}`}>{p.title}</Link>
              </h3>
              <div data-reveal style={{ '--i': 2 }}>
                <p className="work__kind">
                  {p.kind}. {p.status}.
                </p>
                <p className="work__lead">{p.lead}</p>
                <ul className="work__tags" aria-label="Built with">
                  {p.stack.slice(0, 4).map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <Link to={`/projects/${p.slug}`} className="work__more text-link">
                  Read the case study<span className="visually-hidden">: {p.title}</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

function Mark({ tone, children }) {
  return <mark className={`hl hl--${tone}`}>{children}</mark>
}

function About() {
  return (
    <section className="about frame" id="about" aria-labelledby="about-title">
      <h2 id="about-title" className="section-title" data-reveal>
        About me
      </h2>
      <div className="about__text" data-reveal style={{ '--i': 1 }}>
        <p>
          <strong>I’m David Adeyemi,</strong> a computer engineer in <Mark tone="yellow">Kaduna, Nigeria</Mark>, and I
          build for the web. I finished my B.Eng in Computer Engineering at <Mark tone="blue">Covenant University</Mark>{' '}
          in 2025. My final-year project trained a convolutional neural network to spot disease in{' '}
          <Mark tone="green">cocoa leaves</Mark> and put it behind a web app a farmer can use from a phone.
        </p>
        <p>
          Right now I’m focused on <Mark tone="blue">web development</Mark>: designing and building sites like Aso &amp;
          Thread with React, and learning what makes a site clear, fast and easy to use. I still enjoy the hardware
          side, wiring an <Mark tone="red">Arduino</Mark>, reading a sensor and watching a robot make its own decision.
          I like understanding how things work from end to end, from a circuit to a server to the button someone taps.
        </p>
        <p className="about__close">
          <Link to="/#contact" className="hl hl--strong">
            Have something you’d like built? Let’s talk.
          </Link>
        </p>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="skills frame" aria-labelledby="skills-title">
      <div className="skills__list">
        <h2 id="skills-title" className="section-title" data-reveal>
          Skills and tools
        </h2>
        <p className="skills__note" data-reveal style={{ '--i': 1 }}>
          Each one is listed with the project where I used it.
        </p>
        {SKILL_GROUPS.map((g, gi) => (
          <div className="skills__group" key={g.name} data-reveal style={{ '--i': gi % 3 }}>
            <h3 className="skills__group-name">{g.name}</h3>
            <ul>
              {g.items.map(([name, where]) => (
                <li key={name} className="skills__row">
                  <span className="skills__name">
                    <span className={`dot dot--${g.colour}`} aria-hidden="true" />
                    {name}
                  </span>
                  {where && <span className="skills__where">{where}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <figure className="skills__portrait" data-reveal="clip">
        <img
          src={portrait1100}
          srcSet={`${portrait640} 640w, ${portrait1100} 1100w`}
          sizes="(min-width: 900px) 34vw, 90vw"
          width="1100"
          height="1650"
          alt="David Adeyemi in a grey checked blazer, white shirt and knitted red tie, seated on a stool in a studio"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </section>
  )
}

function Services() {
  return (
    <section className="services field-yellow" id="services" aria-labelledby="services-title">
      <div className="services__inner frame">
        <ul className="services__list">
          <li className="services__row services__row--head">
            <h2 id="services-title" className="services__name">
              What I can build for you
            </h2>
          </li>
          {SERVICES.map(([name, text], i) => (
            <li className="services__row" key={name} data-reveal style={{ '--i': i % 4 }}>
              <h3 className="services__name">{name}</h3>
              <p className="services__text">{text}</p>
            </li>
          ))}
        </ul>
        <div className="services__foot" data-reveal>
          <p>
            I’m early in my career, so I take on projects I can do well, keep you updated as I go, and tell you plainly if
            something is outside what I can deliver.
          </p>
          <Link to="/#contact" className="button">
            Start a project <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact frame" id="contact" aria-label="Contact">
      <ContactForm />
      <div className="contact__else" data-reveal>
        <p>Or find me here:</p>
        <ul>
          {SOCIAL.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="text-link">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
