'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';

const QRCodeCanvas = dynamic(
  () => import('qrcode.react').then((m) => m.QRCodeCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-48 h-48 border-2 border-primary/20 rounded-lg animate-pulse" />
    ),
  }
);

// ─── Shared UI ─────────────────────────────────────────────────────────────

function FallbackLinks({ links }) {
  return (
    <div className="mt-4 p-3 border border-secondary/30 rounded-lg">
      <p className="text-secondary text-xs mb-2">Having trouble? Try these alternatives:</p>
      <div className="flex flex-wrap gap-2">
        {links.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 border border-primary rounded-full text-xs text-primary hover:bg-primary/10 transition-colors"
          >
            {name} ↗
          </a>
        ))}
      </div>
    </div>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handle = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={handle}
      className="px-3 py-1 border-2 text-xs border-primary rounded-full text-primary hover:bg-primary/10 transition-colors"
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

// ─── QR Code ───────────────────────────────────────────────────────────────

const QR_FALLBACKS = [
  { name: 'delphi.tools', url: 'https://delphi.tools' },
  { name: 'QR Code Monkey', url: 'https://www.qrcode-monkey.com' },
  { name: 'The QR Code Generator', url: 'https://www.the-qrcode-generator.com' },
];

function QRCodeTool() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  const wrapperRef = useRef(null);

  const download = () => {
    try {
      const canvas = wrapperRef.current?.querySelector('canvas');
      if (!canvas) return;
      const link = document.createElement('a');
      link.download = 'qrcode.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch {
      setError('Download failed — try an alternative below.');
    }
  };

  return (
    <div>
      <label className="block text-secondary text-xs mb-1">URL or text</label>
      <input
        type="text"
        value={input}
        onChange={(e) => { setInput(e.target.value); setError(null); }}
        placeholder="https://example.com"
        className="w-full p-2 border-2 border-primary rounded-lg bg-transparent text-primary focus:outline-none focus:border-secondary transition-colors text-sm mb-4"
      />

      {input && (
        <div className="flex flex-col items-center gap-4">
          <div ref={wrapperRef} className="p-4 bg-white rounded-lg border-2 border-primary">
            <QRCodeCanvas
              value={input}
              size={192}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
            />
          </div>
          <button
            onClick={download}
            className="px-4 py-1 border-2 text-sm border-primary rounded-full text-primary hover:bg-primary/10 transition-colors"
          >
            Download PNG
          </button>
        </div>
      )}

      {error && (
        <>
          <p className="text-red-400 text-sm mt-3">{error}</p>
          <FallbackLinks links={QR_FALLBACKS} />
        </>
      )}
    </div>
  );
}

// ─── Color Palette ─────────────────────────────────────────────────────────

function hexToHSL(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }
  return [h * 360, s * 100, l * 100];
}

function hslToHex(h, s, l) {
  s /= 100; l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function buildPalette(hex, type) {
  try {
    const [h, s, l] = hexToHSL(hex);
    const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
    if (type === 'complementary') return [
      hex,
      hslToHex((h + 180) % 360, s, l),
      hslToHex(h, s, clamp(l - 20, 10, 90)),
      hslToHex((h + 180) % 360, s, clamp(l + 20, 10, 90)),
      hslToHex(h, clamp(s - 20, 10, 100), l),
    ];
    if (type === 'analogous') return [
      hslToHex((h - 30 + 360) % 360, s, l),
      hslToHex((h - 15 + 360) % 360, s, l),
      hex,
      hslToHex((h + 15) % 360, s, l),
      hslToHex((h + 30) % 360, s, l),
    ];
    if (type === 'triadic') return [
      hex,
      hslToHex((h + 120) % 360, s, l),
      hslToHex((h + 240) % 360, s, l),
      hslToHex(h, s, clamp(l - 15, 10, 90)),
      hslToHex(h, s, clamp(l + 15, 10, 90)),
    ];
    // monochromatic
    return [
      hslToHex(h, s, clamp(l - 30, 10, 90)),
      hslToHex(h, s, clamp(l - 15, 10, 90)),
      hex,
      hslToHex(h, s, clamp(l + 15, 10, 90)),
      hslToHex(h, s, clamp(l + 30, 10, 90)),
    ];
  } catch {
    return [];
  }
}

const PALETTE_TYPES = ['complementary', 'analogous', 'triadic', 'monochromatic'];
const PALETTE_FALLBACKS = [
  { name: 'delphi.tools', url: 'https://delphi.tools' },
  { name: 'Coolors', url: 'https://coolors.co' },
  { name: 'Adobe Color', url: 'https://color.adobe.com' },
];

function ColorPaletteTool() {
  const [baseColor, setBaseColor] = useState('#8756CD');
  const [type, setType] = useState('complementary');
  const [copiedColor, setCopiedColor] = useState(null);
  const [error, setError] = useState(null);

  const isValid = /^#[0-9A-Fa-f]{6}$/.test(baseColor);
  const palette = isValid ? buildPalette(baseColor, type) : [];

  const copyColor = (hex) => {
    navigator.clipboard.writeText(hex).catch(() => setError('Copy failed'));
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div>
      <div className="flex gap-3 items-end mb-4">
        <div className="flex-1">
          <label className="block text-secondary text-xs mb-1">Base color</label>
          <input
            type="text"
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
            placeholder="#8756CD"
            className="w-full p-2 border-2 border-primary rounded-lg bg-transparent text-primary focus:outline-none focus:border-secondary transition-colors text-sm font-mono"
          />
        </div>
        <input
          type="color"
          value={isValid ? baseColor : '#8756CD'}
          onChange={(e) => setBaseColor(e.target.value)}
          className="w-10 h-10 border-2 border-primary rounded-lg cursor-pointer bg-transparent"
          title="Pick a color"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {PALETTE_TYPES.map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`px-3 py-1 border text-xs rounded-full capitalize transition-colors ${
              type === t
                ? 'bg-primary/20 border-primary text-primary'
                : 'border-secondary/40 text-secondary hover:border-primary hover:text-primary'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {palette.length > 0 ? (
        <div className="flex gap-2">
          {palette.map((color, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <button
                onClick={() => copyColor(color)}
                className="w-full rounded-lg border-2 border-transparent hover:border-primary transition-colors"
                style={{ backgroundColor: color, paddingBottom: '100%' }}
                title={`Copy ${color}`}
              />
              <span className="text-xs text-secondary font-mono leading-tight text-center">
                {copiedColor === color ? '✓' : color}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-secondary text-sm">Enter a valid hex color to generate a palette.</p>
      )}

      {error && <FallbackLinks links={PALETTE_FALLBACKS} />}
    </div>
  );
}

// ─── ASCII Art ─────────────────────────────────────────────────────────────

const ASCII_CHARS = '@#S%?*+;:,. ';

function renderASCII(text, fontSize) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = `bold ${fontSize}px monospace`;
  const textWidth = ctx.measureText(text).width;
  canvas.width = Math.min(Math.ceil(textWidth) + 20, 700);
  canvas.height = Math.ceil(fontSize * 1.6);
  ctx.font = `bold ${fontSize}px monospace`;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#000000';
  ctx.fillText(text, 5, fontSize);
  const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let result = '';
  for (let y = 0; y < canvas.height; y += 4) {
    for (let x = 0; x < canvas.width; x += 2) {
      const idx = (y * canvas.width + x) * 4;
      const brightness = ((data[idx] ?? 255) + (data[idx + 1] ?? 255) + (data[idx + 2] ?? 255)) / 3;
      result += ASCII_CHARS[Math.floor((1 - brightness / 255) * (ASCII_CHARS.length - 1))];
    }
    result += '\n';
  }
  return result;
}

const ASCII_FALLBACKS = [
  { name: 'delphi.tools', url: 'https://delphi.tools' },
  { name: 'patorjk TAAG', url: 'https://patorjk.com/software/taag' },
  { name: 'ASCII Art Generator', url: 'https://www.ascii-art-generator.org' },
];

function ASCIIArtTool() {
  const [input, setInput] = useState('');
  const [fontSize, setFontSize] = useState(30);
  const [art, setArt] = useState('');
  const [error, setError] = useState(null);

  const generate = useCallback(() => {
    if (!input.trim()) return;
    try {
      setArt(renderASCII(input.trim(), fontSize));
      setError(null);
    } catch {
      setError('Generation failed — try an alternative below.');
      setArt('');
    }
  }, [input, fontSize]);

  return (
    <div>
      <label className="block text-secondary text-xs mb-1">Text to convert</label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Hello World"
        className="w-full p-2 border-2 border-primary rounded-lg bg-transparent text-primary focus:outline-none focus:border-secondary transition-colors text-sm mb-4"
        onKeyDown={(e) => e.key === 'Enter' && generate()}
      />

      <div className="flex items-center gap-3 mb-4">
        <label className="text-secondary text-xs shrink-0">Font size: {fontSize}px</label>
        <input
          type="range" min="16" max="50" value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          className="flex-1 accent-primary"
        />
      </div>

      <button
        onClick={generate}
        disabled={!input.trim()}
        className="px-4 py-1 border-2 text-sm border-primary rounded-full text-primary hover:bg-primary/10 transition-colors mb-4 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Generate
      </button>

      {art && (
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-secondary text-xs">ASCII Output</span>
            <CopyButton text={art} />
          </div>
          <pre className="border-2 border-primary rounded-lg p-3 text-primary overflow-x-auto text-[6px] leading-[7px] font-mono select-all">
            {art}
          </pre>
        </div>
      )}

      {error && (
        <>
          <p className="text-red-400 text-sm">{error}</p>
          <FallbackLinks links={ASCII_FALLBACKS} />
        </>
      )}
    </div>
  );
}

// ─── Base64 ────────────────────────────────────────────────────────────────

const BASE64_FALLBACKS = [
  { name: 'delphi.tools', url: 'https://delphi.tools' },
  { name: 'Base64 Encode', url: 'https://www.base64encode.org' },
  { name: 'Base64 Decode', url: 'https://www.base64decode.org' },
];

function Base64Tool() {
  const [mode, setMode] = useState('encode');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!input) { setOutput(''); setError(null); return; }
    try {
      setOutput(
        mode === 'encode'
          ? btoa(unescape(encodeURIComponent(input)))
          : decodeURIComponent(escape(atob(input)))
      );
      setError(null);
    } catch {
      setOutput('');
      setError(`Invalid input for ${mode === 'encode' ? 'encoding' : 'decoding'}.`);
    }
  }, [input, mode]);

  return (
    <div>
      <div className="flex gap-2 mb-4">
        {['encode', 'decode'].map((m) => (
          <button
            key={m}
            onClick={() => { setMode(m); setInput(''); setOutput(''); setError(null); }}
            className={`px-3 py-1 border text-xs rounded-full capitalize transition-colors ${
              mode === m
                ? 'bg-primary/20 border-primary text-primary'
                : 'border-secondary/40 text-secondary hover:border-primary hover:text-primary'
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <label className="block text-secondary text-xs mb-1">
        {mode === 'encode' ? 'Plain text' : 'Base64 string'}
      </label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter Base64 to decode...'}
        className="w-full p-2 border-2 border-primary rounded-lg bg-transparent text-primary focus:outline-none focus:border-secondary transition-colors text-sm mb-4"
      />

      {output && (
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-secondary text-xs">
              {mode === 'encode' ? 'Encoded' : 'Decoded'}
            </label>
            <CopyButton text={output} />
          </div>
          <div className="p-3 border-2 border-primary rounded-lg text-primary text-sm font-mono break-all">
            {output}
          </div>
        </div>
      )}

      {error && (
        <>
          <p className="text-red-400 text-sm mb-2">{error}</p>
          <FallbackLinks links={BASE64_FALLBACKS} />
        </>
      )}
    </div>
  );
}

// ─── Password Generator ────────────────────────────────────────────────────

const CHARSETS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
};

const PASSWORD_FALLBACKS = [
  { name: 'delphi.tools', url: 'https://delphi.tools' },
  { name: 'Bitwarden Generator', url: 'https://bitwarden.com/password-generator' },
  { name: '1Password Generator', url: 'https://1password.com/password-generator' },
];

function scorePassword(length, opts) {
  const sets = Object.values(opts).filter(Boolean).length;
  if (length < 8 || sets < 2) return { label: 'Weak', color: 'text-red-400' };
  if (length < 12 || sets < 3) return { label: 'Fair', color: 'text-yellow-400' };
  if (length < 16 || sets < 4) return { label: 'Strong', color: 'text-green-400' };
  return { label: 'Very Strong', color: 'text-emerald-400' };
}

function PasswordTool() {
  const [length, setLength] = useState(16);
  const [opts, setOpts] = useState({ uppercase: true, lowercase: true, numbers: true, symbols: false });
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const generate = useCallback(() => {
    const chars = Object.entries(opts)
      .filter(([, on]) => on)
      .map(([k]) => CHARSETS[k])
      .join('');
    if (!chars) { setError('Select at least one character type.'); return; }
    setError(null);
    const arr = new Uint32Array(length);
    crypto.getRandomValues(arr);
    setPassword(Array.from(arr, (v) => chars[v % chars.length]).join(''));
  }, [length, opts]);

  useEffect(() => { generate(); }, [generate]);

  const strength = scorePassword(length, opts);

  return (
    <div>
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <label className="text-secondary text-xs">Length: {length}</label>
          <span className={`text-xs font-medium ${strength.color}`}>{strength.label}</span>
        </div>
        <input
          type="range" min="4" max="64" value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full accent-primary"
        />
      </div>

      <div className="flex flex-wrap gap-4 mb-4">
        {Object.keys(CHARSETS).map((key) => (
          <label key={key} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={opts[key]}
              onChange={(e) => setOpts((p) => ({ ...p, [key]: e.target.checked }))}
              className="accent-primary w-4 h-4"
            />
            <span className="text-primary text-sm capitalize">{key}</span>
          </label>
        ))}
      </div>

      {password && (
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-secondary text-xs">Generated password</label>
            <div className="flex gap-2">
              <CopyButton text={password} />
              <button
                onClick={generate}
                className="px-3 py-1 border-2 text-xs border-primary rounded-full text-primary hover:bg-primary/10 transition-colors"
              >
                Regenerate
              </button>
            </div>
          </div>
          <div className="p-3 border-2 border-primary rounded-lg text-primary text-sm font-mono break-all">
            {password}
          </div>
        </div>
      )}

      {error && (
        <>
          <p className="text-red-400 text-sm mb-2">{error}</p>
          <FallbackLinks links={PASSWORD_FALLBACKS} />
        </>
      )}
    </div>
  );
}

// ─── JSON Formatter ────────────────────────────────────────────────────────

const JSON_FALLBACKS = [
  { name: 'delphi.tools', url: 'https://delphi.tools' },
  { name: 'JSONFormatter', url: 'https://jsonformatter.curiousconcept.com' },
  { name: 'JSON Lint', url: 'https://jsonlint.com' },
];

function JSONTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [indent, setIndent] = useState(2);
  const [error, setError] = useState(null);

  const tryParse = (raw) => {
    const parsed = JSON.parse(raw);
    return parsed;
  };

  const format = () => {
    if (!input.trim()) return;
    try { setOutput(JSON.stringify(tryParse(input), null, indent)); setError(null); }
    catch (e) { setError(e.message); setOutput(''); }
  };

  const minify = () => {
    if (!input.trim()) return;
    try { setOutput(JSON.stringify(tryParse(input))); setError(null); }
    catch (e) { setError(e.message); setOutput(''); }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <label className="text-secondary text-xs">JSON Input</label>
        <div className="flex gap-2">
          <button onClick={format} className="px-3 py-1 border-2 text-xs border-primary rounded-full text-primary hover:bg-primary/10 transition-colors">
            Format
          </button>
          <button onClick={minify} className="px-3 py-1 border text-xs border-secondary/40 rounded-full text-secondary hover:border-primary hover:text-primary transition-colors">
            Minify
          </button>
        </div>
      </div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={'{\n  "hello": "world"\n}'}
        rows={6}
        className="w-full p-2 border-2 border-primary rounded-lg bg-transparent text-primary focus:outline-none focus:border-secondary transition-colors text-sm font-mono resize-y mb-4"
      />

      {error && (
        <div className="mb-4">
          <p className="text-red-400 text-sm">Error: {error}</p>
          <FallbackLinks links={JSON_FALLBACKS} />
        </div>
      )}

      {output && (
        <div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <label className="text-secondary text-xs">Output</label>
              <select
                value={indent}
                onChange={(e) => setIndent(Number(e.target.value))}
                className="text-xs border border-secondary/40 rounded bg-transparent text-secondary px-1 py-0.5 focus:outline-none focus:border-primary"
              >
                <option value={2}>2 spaces</option>
                <option value={4}>4 spaces</option>
              </select>
            </div>
            <CopyButton text={output} />
          </div>
          <pre className="p-3 border-2 border-primary rounded-lg text-primary text-sm font-mono overflow-x-auto max-h-80">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}

// ─── Tool Registry ─────────────────────────────────────────────────────────

const TOOLS = [
  { id: 'qrcode',   label: 'QR Code',       desc: 'Generate QR codes from any URL or text',       Component: QRCodeTool },
  { id: 'palette',  label: 'Color Palette',  desc: 'Generate color palettes from a base color',    Component: ColorPaletteTool },
  { id: 'ascii',    label: 'ASCII Art',      desc: 'Convert text into ASCII character art',        Component: ASCIIArtTool },
  { id: 'base64',   label: 'Base64',         desc: 'Encode and decode Base64 strings',             Component: Base64Tool },
  { id: 'password', label: 'Password',       desc: 'Generate cryptographically secure passwords',  Component: PasswordTool },
  { id: 'json',     label: 'JSON',           desc: 'Format, validate, and minify JSON',            Component: JSONTool },
];

// ─── Main Export ───────────────────────────────────────────────────────────

export default function ToolsClient() {
  const [activeId, setActiveId] = useState('qrcode');
  const active = TOOLS.find((t) => t.id === activeId);

  return (
    <div className="flex flex-col max-w-2xl mx-auto items-center px-6 py-8">
      {/* Hero */}
      <section className="flex flex-col mb-8 w-full">
        <h1 className="text-3xl font-bold text-primary mb-2">LaFleur&apos;s Web Tools</h1>
        <p className="text-secondary text-sm">
          A swiss army knife of everyday web utilities — free, fast, and all in one place.
        </p>
      </section>

      {/* Tool selector */}
      <section className="w-full mb-6">
        <div className="flex flex-wrap gap-2">
          {TOOLS.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveId(tool.id)}
              className={`px-3 py-1 border-2 text-sm rounded-full transition-colors font-medium ${
                activeId === tool.id
                  ? 'bg-primary border-primary text-background'
                  : 'border-primary text-primary hover:bg-primary/10'
              }`}
            >
              {tool.label}
            </button>
          ))}
        </div>
      </section>

      {/* Active tool */}
      <section className="w-full">
        <div className="mb-5 pb-4 border-b-2 border-secondary/10">
          <h2 className="text-xl font-semibold text-primary">{active?.label}</h2>
          <p className="text-secondary text-sm">{active?.desc}</p>
        </div>
        {active && <active.Component />}
      </section>
    </div>
  );
}
