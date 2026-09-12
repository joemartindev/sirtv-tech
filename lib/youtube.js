// Auto-fetch football highlights from YouTube (official-ish channels), cached.
const KEY = process.env.YT_API_KEY || "AIzaSyAcuQ4qdqhl6CY-AikoNsj1iQ_UajxbLWA";
const BASE = "https://www.googleapis.com/youtube/v3/search";

function slugify(s) {
  return (s || "").toString().trim().toLowerCase()
    .replace(/[\s/]+/g, "-").replace(/[?#&"']/g, "").replace(/-+/g, "-").slice(0, 80);
}

export async function ytSearch(query, max = 12) {
  try {
    const url = `${BASE}?part=snippet&type=video&videoEmbeddable=true&order=date&maxResults=${max}` +
      `&q=${encodeURIComponent(query)}&relevanceLanguage=ar&key=${KEY}`;
    const res = await fetch(url, { next: { revalidate: 3600 } }); // cache 1h → saves quota
    if (!res.ok) return [];
    const data = await res.json();
    return (data.items || []).filter(i => i.id && i.id.videoId).map(i => ({
      id: i.id.videoId,
      title: i.snippet.title,
      channel: i.snippet.channelTitle,
      thumb: (i.snippet.thumbnails?.high || i.snippet.thumbnails?.medium || {}).url || "",
      published: i.snippet.publishedAt,
      slug: slugify(i.snippet.title) + "-" + i.id.videoId,
    }));
  } catch (e) { console.error("yt error", e); return []; }
}

export function idFromSlug(slug) {
  const parts = (slug || "").split("-");
  return parts[parts.length - 1];
}

export async function ytVideoById(id) {
  try {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${KEY}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const data = await res.json();
    const v = (data.items || [])[0];
    if (!v) return null;
    return {
      id, title: v.snippet.title, channel: v.snippet.channelTitle,
      desc: (v.snippet.description || "").slice(0, 300),
      thumb: (v.snippet.thumbnails?.high || {}).url || "", published: v.snippet.publishedAt,
    };
  } catch { return null; }
}
