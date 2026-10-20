# jadewang.me

Music site for **Jade Q Wang** and **Rare Earth**, an album released one song at a time.

It's a single static page: plain HTML, CSS and a little JavaScript. There's no build step and nothing to install.

## Before it goes live

- [x] **Bio**: done (About section of `index.html`).
- [x] **Moongazing 望明月**: links to its own Spotify track.
- [x] **YouTube video**: the *Watch* box plays Rewind.
- [ ] **Rewind**: its tracklist link goes to the YouTube video; swap in the Spotify link once it's live.

## Preview it on your computer

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000. The Spotify player only loads when you're online.

## Common updates

**A song comes out, or changes status.** Edit the tracklist in `index.html` (search for `TRACKLIST`). Each song is one `<li>`:

| Status | `class` | Right-hand side |
|---|---|---|
| Out now | `track` | `<a href="SPOTIFY_TRACK_LINK">Listen →</a>` |
| Coming soon | `track track--soon` | `<span class="track-status">Coming soon</span>` |
| In the works | `track track--wip` | `<span class="track-status">In the works</span>` |

Also update "Four are out now" in the intro paragraph, and add the song to the "Rare Earth (album)" playlist in Spotify. The *Listen* player shows that playlist, so it updates on its own.

**Choose the YouTube video.** In `index.html`, search for `YOUTUBE` and fill in one attribute on the `.yt` box:

- `data-yt-video="VIDEO_ID"`: the part after `watch?v=` in a video link
- `data-yt-list="PLAYLIST_ID"`: a playlist; use your channel ID with `UC` changed to `UU` to play all uploads

The player only loads when someone presses play. That keeps the page fast and avoids YouTube cookies until then.

## Put it online at jadewang.me (GitHub Pages)

1. In this repo on GitHub, go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, then **main** and **/ (root)**, and save.
2. Under **Custom domain**, enter `jadewang.me` and save. The `CNAME` file is already in the repo.
3. At your domain registrar, add these DNS records for `jadewang.me`:
   - **A** records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **AAAA** records for `@` (optional, IPv6): `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - **CNAME** for `www`: `jadeqwang.github.io`
4. Once DNS has propagated, tick **Enforce HTTPS** in Settings → Pages. GitHub says it can take up to 24 hours to become available.

After that, every push to `main` updates the live site.

Reference: [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## What's where

```
index.html            the whole page
assets/css/site.css   styles (colors and type at the top)
assets/js/site.js     YouTube click-to-play and the footer year
assets/img/           artwork, each as .webp plus a .jpg fallback; og-image.jpg is the link preview
assets/fonts/         Archivo and DM Mono, self-hosted (SIL Open Font License)
favicon.svg, apple-touch-icon.png
CNAME                 tells GitHub Pages the domain
```

Artwork © Jade Q Wang.
