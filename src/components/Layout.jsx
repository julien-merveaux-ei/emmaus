import { useEffect, useState } from 'react'
import { NavLink, Link, Outlet, useLocation } from 'react-router'
import { Menu, X, ArrowUp } from 'lucide-react'
import { NAV } from '../site.js'
import { Container, cx } from './ui.jsx'

function Logo({ light }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-xl bg-sun font-display text-lg font-extrabold text-ink">E</span>
      <span className={cx('font-display text-lg font-bold leading-none tracking-tight', light ? 'text-white' : 'text-ink')}>
        EMMAÜS <span className="font-medium opacity-60">Cernay 68</span>
      </span>
    </Link>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => setOpen(false), [pathname, hash])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (to) => {
    const [path, h] = to.split('#')
    return path === pathname && (h ? hash === `#${h}` : !hash || path !== '/solidarites')
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav
        className={cx(
          'mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-300 sm:px-5',
          scrolled || open ? 'bg-white/85 shadow-lg shadow-ink/5 ring-1 ring-ink/5 backdrop-blur-xl' : 'bg-transparent',
        )}
        aria-label="Navigation principale"
      >
        <Logo light={!scrolled && !open} />
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={cx(
                  'rounded-full px-3.5 py-2 text-sm font-medium transition',
                  isActive(to)
                    ? 'bg-sun text-ink'
                    : scrolled
                      ? 'text-ink/70 hover:bg-ink/5 hover:text-ink'
                      : 'text-white/80 hover:bg-white/10 hover:text-white',
                )}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className={cx('grid size-10 place-items-center rounded-full lg:hidden', scrolled || open ? 'bg-ink text-white' : 'bg-white/15 text-white')}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-3xl bg-white p-3 shadow-2xl ring-1 ring-ink/5 lg:hidden">
          {NAV.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={cx(
                'block rounded-2xl px-4 py-3 font-display text-lg font-semibold',
                isActive(to) ? 'bg-sun text-ink' : 'text-ink hover:bg-sand',
              )}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="on-dark bg-ink text-white">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo light />
            <p className="mt-4 text-sm text-white/60">Notre site ne comporte ni publicités et ni popups.</p>
          </div>
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
            {NAV.map(({ label, to }) => (
              <li key={to}><Link to={to} className="text-white/70 transition hover:text-sun">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-6 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center">
          <p>© 2011-2024 EMMAÜS Cernay 68</p>
          <div className="flex items-center gap-5">
            <Link to="/mentions-legales" className="hover:text-white">Mentions légales</Link>
            <Link to="/plan-du-site" className="hover:text-white">Plan du site</Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="grid size-10 place-items-center rounded-full bg-sun text-ink transition hover:-translate-y-0.5"
              aria-label="Haut de page"
            >
              <ArrowUp className="size-4" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  )
}

/** Remonte en haut à chaque changement de page, ou va à l'ancre (#...) demandée. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
