// Petit serveur statique sans dépendance : sert dist/ et renvoie index.html
// pour toutes les routes de l'appli (navigation React Router).
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { join, extname, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), 'dist')
const PORT = Number(process.env.PORT) || 80

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
}

async function findFile(urlPath) {
  // normalize + suppression des « .. » : impossible de sortir de dist/
  const safe = normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, '')
  const file = join(ROOT, safe)
  if (file.startsWith(ROOT)) {
    try {
      if ((await stat(file)).isFile()) return file
    } catch {}
  }
  return null
}

createServer(async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD' }).end()
    return
  }
  try {
    const { pathname } = new URL(req.url, 'http://localhost')
    const file = (await findFile(pathname)) ?? join(ROOT, 'index.html')
    const body = await readFile(file)
    const hashed = file.includes(`${join(ROOT, 'assets')}`)
    res.writeHead(200, {
      'Content-Type': TYPES[extname(file).toLowerCase()] ?? 'application/octet-stream',
      'Content-Length': body.length,
      'Cache-Control': hashed ? 'public, max-age=31536000, immutable' : 'no-cache',
      'X-Content-Type-Options': 'nosniff',
    })
    res.end(req.method === 'HEAD' ? undefined : body)
  } catch (err) {
    console.error(err)
    res.writeHead(500).end('Erreur serveur')
  }
}).listen(PORT, () => console.log(`Emmaüs Cernay 68 — http://localhost:${PORT}`))
