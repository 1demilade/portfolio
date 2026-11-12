import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PartsCard, ResultsCard } from '../components/Fragments.jsx'
import Icon from '../components/Icon.jsx'
import OrderBuilder from '../components/OrderBuilder.jsx'
import SiteHeader from '../components/SiteHeader.jsx'
import Shot from '../components/Shot.jsx'
import VideoEmbed from '../components/VideoEmbed.jsx'
import { PROJECTS, getProject } from '../data/projects.js'
import NotFound from './NotFound.jsx'
import './Project.css'

const BASE = import.meta.env.BASE_URL

export default function Project() {
  const { slug } = useParams()
  const project = getProject(slug)

  useEffect(() => {
    if (project) document.title = `${project.title} | David Adeyemi`
    return () => {
      document.title = 'David Adeyemi | Web Developer & Computer Engineer'
    }
  }, [project])

  if (!project) return <NotFound />

  const index = PROJECTS.indexOf(project)
  const next = PROJECTS[(index + 1) % PROJECTS.length]

  return (
    <>
      <SiteHeader />
      <main id="main" className="case">
        <header className="case__head frame">
          <h1 className="case__title">{project.title}</h1>
          <p className="case__lead">{project.lead}</p>

          <dl className="case__meta">
            <div>
              <dt>Type</dt>
              <dd>{project.kind}</dd>
            </div>
            <div>
              <dt>Context</dt>
              <dd>{project.status}</dd>
            </div>
            <div>
              <dt>My role</dt>
              <dd>{project.role}</dd>
            </div>
            {project.year && (
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
            )}
          </dl>

          <ProjectLinks links={project.links} />
        </header>

        <figure className={`case__hero case__hero--${project.field}`} data-reveal="clip">
          <Shot image={project.hero} sizes="(min-width: 1200px) 1100px, 100vw" eager />
        </figure>

        <Section title="Overview">
          {project.overview.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Section>

        {project.slug === 'aso-and-thread' && <AsoSections project={project} />}
        {project.slug === 'cocoacare' && <CocoaSections project={project} />}
        {project.steps && <RobotSections project={project} />}

        {project.video && (
          <Section title="See it working" wide>
            <div className={`case__video${project.video.vertical ? ' case__video--vertical' : ''}`}>
              <VideoEmbed {...project.video} />
              <p>
                My own demo of the {project.title.toLowerCase().includes('robot') ? 'robot' : 'app'}, hosted on YouTube. It
                loads only when you press play.
              </p>
            </div>
          </Section>
        )}

        {project.photos && (
          <section className="case__photos frame" aria-labelledby="photos-title">
            <h2 id="photos-title" className="case__h2" data-reveal>
              {project.steps ? 'The parts up close' : 'The plant it protects'}
            </h2>
            <div className="case__photo-row">
              {project.photos.map((ph, i) => (
                <figure key={ph.src} data-reveal="clip" style={{ '--i': i }}>
                  <Shot image={ph} sizes="(min-width: 900px) 45vw, 100vw" />
                  <figcaption>
                    {ph.caption}{' '}
                    <span className="case__credit">
                      Photo:{' '}
                      <a href={ph.href} target="_blank" rel="noreferrer">
                        {ph.credit}
                      </a>
                      , via Wikimedia Commons.
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <Section title="Built with">
          <ul className="case__tags">
            {project.stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Section>

        <Section title="Good to know" tone="note">
          <p>{project.honesty}</p>
        </Section>

        <nav className="case__next frame" aria-label="More projects">
          <Link to="/#projects" className="case__back text-link">
            <Icon name="back" /> All projects
          </Link>
          <Link to={`/projects/${next.slug}`} className="case__next-link">
            <span className="case__next-label">Next project</span>
            <span className="case__next-title">
              {next.title} <Icon name="arrow" />
            </span>
          </Link>
        </nav>
      </main>
    </>
  )
}

function ProjectLinks({ links }) {
  return (
    <ul className="case__links">
      {links.map((l) =>
        l.href ? (
          <li key={l.label}>
            <a
              className="button"
              href={l.local ? `${BASE}${l.href}` : l.href}
              target="_blank"
              rel="noreferrer"
            >
              {l.label} <Icon name={l.local ? 'download' : 'external'} />
            </a>
          </li>
        ) : (
          <li key={l.label} className="case__pending">
            {l.label}: <span>{l.pending}</span>
          </li>
        ),
      )}
    </ul>
  )
}

function Section({ title, tone, wide, children }) {
  const id = `s-${title.toLowerCase().replace(/[^a-z]+/g, '-')}`
  return (
    <section className={`case__section frame${tone ? ` case__section--${tone}` : ''}`} aria-labelledby={id}>
      <h2 id={id} className="case__h2" data-reveal>
        {title}
      </h2>
      <div className={`case__body${wide ? ' case__body--wide' : ''}`} data-reveal style={{ '--i': 1 }}>
        {children}
      </div>
    </section>
  )
}

function Rows({ rows }) {
  return (
    <dl className="case__rows">
      {rows.map(([name, text]) => (
        <div key={name}>
          <dt>{name}</dt>
          <dd>{text}</dd>
        </div>
      ))}
    </dl>
  )
}

function AsoSections({ project }) {
  return (
    <>
      <Section title="What it does">
        <Rows rows={project.features} />
      </Section>

      <section className="case__try field-etu" aria-labelledby="try-title">
        <div className="case__try-inner frame">
          <div className="case__try-head" data-reveal>
            <h2 id="try-title" className="case__h2">
              Try the order panel
            </h2>
            <p>
              This is the product page’s order panel, running on the same message code as the real site. Pick a colour,
              a size and a quantity and watch the WhatsApp message rewrite itself.
            </p>
          </div>
          <div data-reveal style={{ '--i': 1 }}>
            <OrderBuilder />
          </div>
        </div>
      </section>

      <Section title="Design approach">
        {project.approach.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </Section>

      <div className="case__gallery frame">
        <figure className="case__gallery-main" data-reveal="clip">
          <Shot image={project.detail} sizes="(min-width: 900px) 66vw, 100vw" />
          <figcaption>Product page: colour, size and quantity build the order.</figcaption>
        </figure>
        {project.gallery.map((g, i) => (
          <figure key={g.src} data-reveal="clip" style={{ '--i': i + 1 }}>
            <Shot image={g} sizes="(min-width: 900px) 33vw, 100vw" />
            <figcaption>{g.alt.split(',')[0]}.</figcaption>
          </figure>
        ))}
      </div>
    </>
  )
}

function CocoaSections({ project }) {
  const r = project.results
  return (
    <>
      <Section title="How the model was trained">
        {project.method.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </Section>

      <section className="case__results field-green" aria-labelledby="results-title">
        <div className="case__results-inner frame">
          <h2 id="results-title" className="case__h2" data-reveal>
            Results
          </h2>
          <div className="case__figures" data-reveal style={{ '--i': 1 }}>
            <p>
              <span className="case__figure">90%</span>
              accuracy on 776 test images with DenseNet121, the best of the three models.
            </p>
            <p>
              <span className="case__figure">87%</span>
              accuracy under 5-fold cross-validation, a stricter check that every image is tested once.
            </p>
          </div>
          <div className="case__results-detail" data-reveal style={{ '--i': 2 }}>
            <ResultsCard results={r} />
            <figure className="frag case__deployed" data-ui>
              <figcaption>In the deployed app: 10 photos per class</figcaption>
              <ul>
                {r.deployed.map((d) => (
                  <li key={d.name}>
                    <span>{d.name}</span>
                    <span className="case__bar" aria-hidden="true">
                      <span style={{ '--v': d.correct / d.of }} />
                    </span>
                    <span>
                      {d.correct} of {d.of} correct
                    </span>
                  </li>
                ))}
              </ul>
            </figure>
          </div>
          <p className="case__source" data-reveal>
            Source: my B.Eng project report, Covenant University, June 2025 (Tables 4.1 and 4.8).
          </p>
        </div>
      </section>

      <Section title="How it’s built">
        <Rows rows={project.build} />
      </Section>
    </>
  )
}

function RobotSections({ project }) {
  return (
    <Section title="How it works" wide>
      <div className="case__robot">
        <ol className="case__steps">
          {project.steps.map((s, i) => (
            <li key={s.slice(0, 24)} data-reveal style={{ '--i': i }}>
              {s}
            </li>
          ))}
        </ol>
        <PartsCard parts={project.parts} title="Parts, from the wiring diagram" />
      </div>
    </Section>
  )
}
