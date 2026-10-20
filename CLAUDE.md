# CLAUDE.md

Notes for Claude Code working on **jadewang.me**: a one-page music site for the artist Jade Q Wang and her album-in-progress *Rare Earth*.

## Shape of the project

- Static site served by GitHub Pages from `main` (root). **No build step, no framework, no package.json.** Keep it that way unless the owner asks otherwise.
- `index.html` holds all content. `assets/css/site.css` holds all styles. `assets/js/site.js` is progressive enhancement only, so the page must still work without it.
- Paths are root-absolute (`/assets/...`) because the site is served at the domain root. Preview with `python3 -m http.server` from the repo root, not by opening the file directly.
- `CNAME` contains `jadewang.me`. Don't delete it.

## Design system (match it; don't introduce new colors or fonts)

The palette comes from the album artwork and matches the printed MOO card.

| Token | Value | Use |
|---|---|---|
| `--navy` | `#0c2a50` | page ground (matches the header art's sky) |
| `--navy-2` | `#163a68` | panels on navy |
| `--cream` | `#f5e6c9` | text on navy; light section ground |
| `--blue` | `#8fb7e3` | labels on navy |
| `--orange` | `#f47a28` | primary button and status dot only; never as text on cream (fails contrast) |
| `--muted` | `#4b5d76` | secondary text on cream |

- **Display type:** Archivo at `font-stretch: 125%`, weight 800, uppercase for headings (`.display`).
- **Labels and UI:** DM Mono, uppercase, letter-spaced (`.kicker`, `.label`, buttons, nav).
- **Body:** Archivo at normal width.
- Chinese characters (e.g. 望明月) fall back to system CJK fonts via the `--sans` and `--mono` stacks.
- Square corners (2px) on buttons; 12px radius only on the media embeds.

## Content facts (don't invent others)

- Artist: Jade Q Wang. Spotify artist `7vnTuvlsowMY5XmkqCdc84`, "Rare Earth (album)" playlist `7i22u5oEuRglDkWD7JoBW7` (the Listen player embeds it), YouTube `@JadeQWang`, X `@qiqing`.
- *Rare Earth* is an album released one song at a time. There's no album release date, so don't add one.
- Songs: Moongazing 望明月 (out, track `5iaRwTBBWpLqXfElAgSNIY`), Orbital Sunrise (out, track `1ovDSfnoA9JPNdYeWgjdYo`), Rare Earth (out in two versions: alt pop `42m7clPxBmOoHmdSFTCLIb`, techno remix `3o6YBqvXcNFlbVY5TlZDpd`), Rewind (out; on YouTube `BU4htU-Rrog`, Spotify link pending), Halys (in the works).
- Watch pages, shown in "Made for the songs": moongazing.cc (animated video, moonbase at the lunar south pole) and orbitalsunrise.cc (Leonov's spacewalk and the Voskhod-2 landing, from an orbital trajectory reconstruction). Not every song gets one, so only add a card when one exists.
- Open TODO in `index.html`: the Rewind Spotify link.

## Common tasks

- **Tracklist changes:** edit the `<ol class="tracklist">`; status classes are documented in the HTML comment above it and in README.md. Keep the intro's "Four are out now" count in sync.
- **New or replaced images:** export both `.webp` and `.jpg` (quality ~82) into `assets/img/`, keep `width`/`height` attributes accurate, and use `loading="lazy"` for anything below the hero.
- **Link preview image:** `assets/img/og-image.jpg` is 1200×630. If the name or tagline changes, regenerate it to match.

## Before committing

- Check the page at 1440px and 390px wide. There should be no horizontal scroll, and the nav fits on one row at 390.
- Keep tap targets at least 44px tall and text contrast at least 4.5:1.
- Keep the HTML valid (e.g. `npx html-validate index.html`).
