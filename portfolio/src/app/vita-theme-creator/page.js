import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from 'next/image';
import ProjectShowcase from '@/components/ProjectShowcase';

const REPO = 'https://github.com/BrayLaf/VitaThemeCreator';
// Stable release filenames — every release uploads a copy with the version
// stripped out, so these links never need updating. See the repo's README.
const APPIMAGE_URL = `${REPO}/releases/latest/download/vita-theme-creator-x86_64.AppImage`;
const DEB_URL = `${REPO}/releases/latest/download/vita-theme-creator-amd64.deb`;

export const metadata = {
  title: 'Vita Theme Creator',
  description:
    'Vita Theme Creator is a cross-platform desktop app for building custom PlayStation Vita home-screen themes, with a Vita-accurate live preview and real installable exports. Download the Linux AppImage or .deb.',
  keywords: [
    'PS Vita',
    'PlayStation Vita',
    'Vita theme',
    'custom theme',
    'ThemeBUILDER',
    'Electron',
    'React',
    'TypeScript',
    'Braydon Lafleur',
  ],
  openGraph: {
    type: 'website',
    title: 'Vita Theme Creator | Braydon Lafleur',
    description:
      'Build custom PlayStation Vita home-screen themes on macOS, Windows, or Linux. Vita-accurate live preview, real installable exports, free and open source.',
    images: [
      {
        url: '/demo/vita-editor-lockscreen.webp',
        width: 1600,
        height: 1000,
        alt: 'Vita Theme Creator lockscreen editor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vita Theme Creator',
    description:
      'Build custom PlayStation Vita home-screen themes on macOS, Windows, or Linux.',
    images: ['/demo/vita-editor-lockscreen.webp'],
  },
};

const features = [
  {
    icon: 'mdi:eye-outline',
    title: 'Vita-accurate live preview',
    body: 'The lockscreen and each home page render as you edit, including the status bar, wave-pattern backgrounds, and system icons. The preview was checked against real exported themes and device screenshots.',
  },
  {
    icon: 'mdi:palette-outline',
    title: 'Full theme editor',
    body: 'Edit the lockscreen, all 10 home pages, 17 system icons, clock and notification colors, background music, and package info, all through native file pickers.',
  },
  {
    icon: 'mdi:crop',
    title: 'Crop or stretch any image',
    body: 'Drag to pan and scroll to zoom. The editor, the preview, and the export share the same crop math, so the exported image matches what you see.',
  },
  {
    icon: 'mdi:tune-variant',
    title: 'More customization than the original',
    body: 'Use your own page-indicator dots, and replace the lockscreen and LiveArea preview screenshots independently.',
  },
  {
    icon: 'mdi:grid',
    title: 'Standalone icon-set builder',
    body: 'Build a reusable 17-icon set without opening a theme, then reuse it across projects.',
  },
  {
    icon: 'mdi:folder-multiple-outline',
    title: 'Theme library',
    body: 'List, reopen, re-export, or delete every theme you have built, from one place.',
  },
  {
    icon: 'mdi:package-variant-closed',
    title: 'Real, installable output',
    body: 'Export produces correctly sized PNGs, a generated theme.xml, composited icons, an ATRAC9 bgm.at9, and a .zip laid out the way the community themes repository expects.',
  },
  {
    icon: 'mdi:shield-check-outline',
    title: 'Export never fails on empty slots',
    body: 'Every optional image falls back to ThemeBUILDER’s own bundled defaults, so an untouched slot can’t break an export.',
  },
];

export default function VitaThemeCreator() {
  return (
    <div className="flex flex-col max-w-2xl mx-auto px-6 py-8">
      {/* hero */}
      <section className="w-full mb-10">
        <Link
          href="/projects"
          className="text-xs text-primary/60 hover:text-primary transition-colors"
        >
          ← Back to projects
        </Link>

        <h1 className="text-4xl font-bold text-primary mt-4 mb-3">Vita Theme Creator</h1>

        <p className="text-foreground/70 text-sm mb-4">
          A desktop app for building custom home-screen themes for the PlayStation Vita.
          It is a modern, cross-platform reimplementation of{' '}
          <Link
            href="https://github.com/AntHJ/ThemeBUILDER"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            ThemeBUILDER
          </Link>{' '}
          by AntHJ, a Windows-only tool whose reverse-engineering of the Vita theme
          format everything here is built on.
        </p>

        <div className="flex flex-wrap gap-3 mb-5">
          <Icon icon="logos:electron" className="w-7 h-7" />
          <Icon icon="logos:react" className="w-7 h-7" />
          <Icon icon="logos:typescript-icon" className="w-7 h-7" />
          <Icon icon="logos:nodejs-icon" className="w-7 h-7" />
          <Icon icon="logos:vitejs" className="w-7 h-7" />
          <Icon icon="logos:linux-tux" className="w-7 h-7" />
          <Icon icon="logos:git-icon" className="w-7 h-7" />
          <Icon icon="logos:github-icon" className="w-7 h-7" />
        </div>

        {/* download */}
        <div className="border-2 border-primary/30 rounded-lg p-4">
          <h2 className="text-base font-semibold text-primary mb-1">Download for Linux</h2>
          <p className="text-foreground/70 text-xs mb-3">
            Always the newest release, built on Ubuntu by GitHub Actions.
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <a
              href={APPIMAGE_URL}
              className="flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary rounded-lg text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
            >
              <Icon icon="mdi:download" className="w-4 h-4" />
              AppImage
            </a>
            <a
              href={DEB_URL}
              className="flex items-center gap-2 px-4 py-2 border-2 border-primary rounded-lg text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
            >
              <Icon icon="mdi:download" className="w-4 h-4" />
              .deb
            </a>
            <Link
              href={`${REPO}/releases/latest`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border-2 border-primary/40 rounded-lg text-primary/70 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Icon icon="mdi:tag-outline" className="w-4 h-4" />
              All releases
            </Link>
          </div>
          <p className="text-foreground/70 text-xs">
            The AppImage needs <code className="text-primary/80">chmod +x</code> before it
            runs. macOS and Windows builds need paid code-signing certificates, so those
            platforms run from source for now — see the{' '}
            <Link
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              repository
            </Link>{' '}
            for setup.
          </p>
        </div>
      </section>

      {/* demo */}
      <section className="w-full mb-10">
        <h2 className="text-xl font-semibold text-primary mb-4 border-b">See it working</h2>
        <ProjectShowcase
          videoSrc="/videos/vitaThemeCreatorDemo.mp4"
          videoLabel="Demo"
          images={[
            {
              src: '/demo/vita-editor-lockscreen.webp',
              alt: 'Lockscreen editor with notification icon cropping',
              label: 'Lockscreen Editor',
            },
            {
              src: '/demo/vita-editor-home.webp',
              alt: 'Home page editor with live preview',
              label: 'Home Pages',
            },
            {
              src: '/demo/vita-editor-icons.webp',
              alt: 'System icon editor showing glyph style and background',
              label: 'System Icons',
            },
            {
              src: '/demo/vita-icon-set-creator.webp',
              alt: 'Standalone icon set creator',
              label: 'Icon Set Creator',
            },
            {
              src: '/demo/vita-library.webp',
              alt: 'Library of created themes',
              label: 'Theme Library',
            },
            {
              src: '/demo/vita-theme-example.webp',
              alt: 'Home page preview of a finished theme',
              label: 'Finished Theme',
            },
          ]}
        />
      </section>

      {/* features */}
      <section className="w-full mb-10">
        <h2 className="text-xl font-semibold text-primary mb-4 border-b">What it does</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div key={feature.title} className="border-2 border-primary/20 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Icon icon={feature.icon} className="w-5 h-5 text-primary shrink-0" />
                <h3 className="text-sm font-semibold text-primary">{feature.title}</h3>
              </div>
              <p className="text-foreground/70 text-xs">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* themes made with it */}
      <section className="w-full mb-10">
        <h2 className="text-xl font-semibold text-primary mb-4 border-b">
          Themes made with it
        </h2>
        <p className="text-foreground/70 text-sm mb-4">
          These were built with the app and published on the{' '}
          <Link
            href="https://psvt.ovh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            PS Vita Custom Themes repository
          </Link>
          , where anyone can install them straight to a real Vita.
        </p>
        <Link
          href="https://psvt.ovh/theme.php?id=1789538036"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="grid grid-cols-2 gap-3">
            <Image
              src="/demo/vita-theme-magik-home.webp"
              alt="Magik Theme home screen"
              width={480}
              height={272}
              className="w-full h-auto rounded-lg border-2 border-primary/20 group-hover:border-primary/50 transition-colors"
            />
            <Image
              src="/demo/vita-theme-magik-lockscreen.webp"
              alt="Magik Theme lockscreen"
              width={480}
              height={272}
              className="w-full h-auto rounded-lg border-2 border-primary/20 group-hover:border-primary/50 transition-colors"
            />
          </div>
          <span className="inline-block text-xs text-primary/60 group-hover:text-primary transition-colors mt-2">
            Magik Theme on psvt.ovh →
          </span>
        </Link>
      </section>

      {/* accuracy */}
      <section className="w-full mb-10">
        <h2 className="text-xl font-semibold text-primary mb-4 border-b">How accurate is it?</h2>
        <p className="text-foreground/70 text-sm mb-3">
          The app&apos;s domain logic comes from a reverse-engineering analysis of
          ThemeBUILDER&apos;s source. It was then tested against a real third-party PS Vita
          theme validator, which found two places where the analysis or the original tool
          was wrong:
        </p>
        <ul className="text-foreground/70 text-sm mb-3 list-disc pl-5 space-y-1">
          <li>
            Notification icons ship at 120×110. The analysis had cited 40×37, which is only
            the size of the original tool&apos;s small in-app preview.
          </li>
          <li>
            <code className="text-primary/80">theme.xml</code> leaves out a page&apos;s
            background-file references when that page has no image. The original tool points
            at a file that never gets created.
          </li>
        </ul>
        <p className="text-foreground/70 text-sm">
          The same testing caught two bugs in this app, both fixed: page backgrounds were
          serialized incorrectly, and notification icons were masked incorrectly.
        </p>
      </section>

      {/* under the hood */}
      <section className="w-full mb-10">
        <h2 className="text-xl font-semibold text-primary mb-4 border-b">Under the hood</h2>
        <ul className="text-foreground/70 text-sm list-disc pl-5 space-y-2">
          <li>
            TypeScript throughout, with one shared data model that the Electron main process
            and the React renderer both import, and a typed IPC contract between them.
          </li>
          <li>
            Image conversion runs through sharp in the main process. On Linux it runs in a
            separate Node process instead, because the GLib inside sharp&apos;s libvips
            clashes with Electron&apos;s and crashes the app on export. The worker&apos;s
            output was verified byte-identical to running sharp directly.
          </li>
          <li>
            ATRAC9 audio encoding shells out to the original tool&apos;s Windows binary,
            since no legal open-source ATRAC9 encoder exists. It runs natively on Windows and
            through Wine elsewhere. Existing <code className="text-primary/80">.at9</code>{' '}
            files and the bundled default track work everywhere without it.
          </li>
          <li>
            Tagged releases build the AppImage and <code className="text-primary/80">.deb</code>{' '}
            on Ubuntu through GitHub Actions and attach them to the release.
          </li>
        </ul>
      </section>

      {/* credits */}
      <section className="w-full mb-6">
        <h2 className="text-xl font-semibold text-primary mb-4 border-b">Credits</h2>
        <ul className="text-foreground/70 text-sm list-disc pl-5 space-y-2">
          <li>
            <Link
              href="https://github.com/AntHJ/ThemeBUILDER"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              AntHJ/ThemeBUILDER
            </Link>{' '}
            — the original tool, and the reverse-engineering of the Vita theme format this
            app is built on.
          </li>
          <li>
            <Link
              href="https://github.com/LiEnby/Sony-ThemeTool"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              LiEnby/Sony-ThemeTool
            </Link>{' '}
            — a decompile of Sony&apos;s official ThemeTool. The app&apos;s{' '}
            <code className="text-primary/80">.at9</code> header validation is a byte-exact
            port of its chunk parsers.
          </li>
        </ul>
        <p className="text-foreground/70 text-xs mt-4">
          Demo themes feature fan art of Marvel&apos;s Magik and Naruto&apos;s Sasuke. All
          characters belong to their respective owners.
        </p>
      </section>

      <div className="flex gap-2">
        <Link
          href={REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border-2 border-primary rounded-lg text-primary text-sm hover:bg-primary/10 transition-colors"
        >
          <Icon icon="mdi:github" className="w-4 h-4" />
          Source on GitHub
        </Link>
      </div>
    </div>
  );
}
