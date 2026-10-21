// jadewang.me — small enhancements. The page works without this file.

// YouTube: load the player only when someone presses play (keeps the page fast
// and avoids YouTube cookies until then). Configure on the .yt element in index.html.
document.querySelectorAll(".yt").forEach((box) => {
  const video = (box.dataset.ytVideo || "").trim();
  const list = (box.dataset.ytList || "").trim();
  if (!video && !list) return; // nothing configured: poster stays a link to the channel

  const poster = box.querySelector(".yt-poster");
  const label = box.querySelector(".yt-label");
  if (label) label.textContent = "Play video";
  if (poster) poster.setAttribute("aria-label", "Play video");

  poster?.addEventListener("click", (event) => {
    event.preventDefault();
    const params = new URLSearchParams({ autoplay: "1", rel: "0" });
    let src;
    if (video) {
      if (list) params.set("list", list);
      src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(video)}?${params}`;
    } else {
      params.set("list", list);
      src = `https://www.youtube-nocookie.com/embed/videoseries?${params}`;
    }
    const frame = document.createElement("iframe");
    frame.src = src;
    frame.title = "Jade Q Wang on YouTube";
    frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.allowFullscreen = true;
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    box.replaceChildren(frame);
  });
});

// Even out the bio's line lengths. CSS text-wrap: balance gives up past 6 lines
// in Chrome, which left a short last line. Narrow each paragraph as far as it
// goes without adding a line; the card centers it.
const card = document.querySelector(".about-card");
const balance = () => {
  card.querySelectorAll("h2 ~ p").forEach((p) => {
    p.style.maxWidth = "";
    const height = p.offsetHeight;
    let lo = p.offsetWidth / 2;
    let hi = p.offsetWidth;
    while (hi - lo > 1) {
      const mid = (lo + hi) / 2;
      p.style.maxWidth = `${mid}px`;
      if (p.offsetHeight > height) lo = mid;
      else hi = mid;
    }
    p.style.maxWidth = `${hi}px`;
  });
};
if (card) {
  new ResizeObserver(balance).observe(card);
  document.fonts?.ready.then(balance);
}

// Keep the footer year current.
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});
