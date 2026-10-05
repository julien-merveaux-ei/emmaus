import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { site, ext } from '../site.js'

const cx = (...c) => c.filter(Boolean).join(' ')

/** Apparition douce quand l'élément entre dans l'écran. */
export function Reveal({ as: Tag = 'div', className, delay = 0, children, ...rest }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={cx('reveal', className)} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

export function Container({ className, children }) {
  return <div className={cx('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>
}

export function Eyebrow({ children, dark }) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[.14em]',
        dark ? 'bg-white/10 text-sun ring-1 ring-white/15' : 'bg-sun/25 text-ink-3',
      )}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {children}
    </span>
  )
}

export function H2({ className, children }) {
  return (
    <h2 className={cx('font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl', className)}>
      {children}
    </h2>
  )
}

export function Card({ className, children, dark, ...rest }) {
  return (
    <div
      className={cx(
        'rounded-[28px] p-6 sm:p-8',
        dark ? 'on-dark bg-ink text-white' : 'bg-white ring-1 ring-ink/5 shadow-[0_1px_2px_rgba(12,22,51,.04),0_12px_40px_-12px_rgba(12,22,51,.12)]',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export function IconBadge({ icon: Icon, className }) {
  return (
    <span className={cx('grid size-12 shrink-0 place-items-center rounded-2xl bg-sun text-ink', className)}>
      <Icon className="size-6" strokeWidth={2} />
    </span>
  )
}

/**
 * Lien universel :
 * - `to`   → page interne (React Router)
 * - `doc`  → fichier hébergé sur le site actuel (PDF, vidéo…), ouvert dans un nouvel onglet
 * - `href` → lien externe / mailto / tel
 */
export function A({ to, doc, href, newTab, className, children, ...rest }) {
  if (to) return <Link to={to} className={className} {...rest}>{children}</Link>
  if (doc) return <a href={site(doc)} {...ext} className={className} {...rest}>{children}</a>
  const external = newTab ?? /^https?:/.test(href)
  return <a href={href} {...(external ? ext : {})} className={className} {...rest}>{children}</a>
}

export function Button({ variant = 'primary', className, children, ...rest }) {
  const styles = {
    primary: 'bg-sun text-ink hover:bg-sun-2',
    dark: 'bg-ink text-white hover:bg-ink-3',
    ghost: 'bg-white/10 text-white ring-1 ring-white/25 backdrop-blur hover:bg-white/20',
    light: 'bg-white text-ink ring-1 ring-ink/10 hover:ring-ink/30',
  }
  return (
    <A
      className={cx(
        'group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition',
        styles[variant],
        className,
      )}
      {...rest}
    >
      {children}
      <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
    </A>
  )
}

/** Tuile de lien (ressource, document, site partenaire). */
export function LinkTile({ icon: Icon, children, className, ...rest }) {
  return (
    <A
      className={cx(
        'group flex items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-ink/5 transition hover:-translate-y-0.5 hover:ring-ink/20 hover:shadow-lg',
        className,
      )}
      {...rest}
    >
      {Icon && (
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sand text-ink-3 transition group-hover:bg-sun group-hover:text-ink">
          <Icon className="size-5" />
        </span>
      )}
      <span className="flex-1 text-sm font-medium leading-snug">{children}</span>
      <ArrowUpRight className="size-4 shrink-0 text-ink/30 transition group-hover:text-ink" />
    </A>
  )
}

export function Pill({ className, children, ...rest }) {
  return (
    <A
      className={cx(
        'inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium ring-1 ring-ink/10 transition hover:bg-ink hover:text-white',
        className,
      )}
      {...rest}
    >
      {children}
    </A>
  )
}

/** En-tête des pages intérieures. */
export function PageHero({ eyebrow, title, children, image }) {
  return (
    <section className="grain on-dark relative overflow-hidden bg-ink pt-32 pb-16 text-white sm:pt-40 sm:pb-24">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 -z-20 size-full object-cover opacity-40" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
        </>
      )}
      <Container>
        <Reveal className="max-w-4xl">
          {eyebrow && <Eyebrow dark>{eyebrow}</Eyebrow>}
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {children && <div className="mt-6 max-w-2xl text-lg text-white/75">{children}</div>}
        </Reveal>
      </Container>
    </section>
  )
}

export { cx }
