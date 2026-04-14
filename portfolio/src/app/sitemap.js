export default function sitemap() {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

  const routes = [
    { path: "",         changeFrequency: "weekly",  priority: 1.0 },
    { path: "/projects",changeFrequency: "monthly", priority: 0.8 },
    { path: "/tools",   changeFrequency: "weekly",  priority: 0.9 },
    { path: "/resume",  changeFrequency: "monthly", priority: 0.6 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
    priority,
  }));
}
