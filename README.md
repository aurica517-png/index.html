# Amber — Official Page

A classic, fast, single-page static website (no build step).

## Edit anything
Open **`config.js`**. Everything lives there:
- name, tagline, handle, domain
- your OnlyFans link (`onlyfansUrl`) and button text
- hero / about text and pictures
- the gallery (add, remove, reorder lines)
- FAQ, footer text, social links
- colours (`theme`)

To change a picture: put the new file in `images/` and update its path in `config.js`.

## Preview locally
```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Put it on GitHub
```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR_USER/amber-site.git
git push -u origin main
```

## Deploy on Vercel
1. Go to vercel.com → **Add New → Project** → import the GitHub repo.
2. Framework preset: **Other**. Leave build command and output directory empty.
3. Click **Deploy**.

## Custom domain
Vercel project → **Settings → Domains** → add `yourdomain.com` and follow the DNS
instructions (an `A` record to `76.76.21.21` for the root domain, and a `CNAME`
to `cname.vercel-dns.com` for `www`). HTTPS is automatic.

Every `git push` to `main` redeploys automatically.
