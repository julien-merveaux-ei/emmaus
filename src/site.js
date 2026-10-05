// Les images, PDF, vidéos et sons restent hébergés sur le site actuel.
export const SITE_BASE = 'https://www.emmaus-cernay68.org/Portail/'

export const site = (path) => new URL(path, SITE_BASE).href

// Lien externe : ouverture dans un nouvel onglet.
export const ext = { target: '_blank', rel: 'noopener' }

export const STREET_VIEW =
  'https://www.google.com/maps/@47.7961577,7.1624255,3a,75y,18.84h,96.09t/data=!3m7!1e1!3m5!1sGm1vCTfpFpFBhVqVIDOiGg!2e0!5s20180901T000000!7i13312!8i6656'

export const GOOGLE_MAPS =
  'https://www.google.com/maps/@47.7961496,7.162428,3a,60y,345.81h,84.74t/data=!3m6!1e1!3m4!1sFvDB2uoupcuvQmoJ_8aaiA!2e0!7i13312!8i6656'

export const NAV = [
  { label: 'Accueil', to: '/' },
  { label: 'Lieu de Vie', to: '/lieu-de-vie' },
  { label: 'Nous Aider', to: '/nous-aider' },
  { label: 'Ventes', to: '/ventes' },
  { label: 'Solidarités', to: '/solidarites' },
  { label: 'SOS Familles', to: '/solidarites#sos' },
  { label: 'La Ferme', to: '/la-ferme' },
]
