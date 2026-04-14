import ToolsClient from './ToolsClient';

export const metadata = {
  title: "Web Tools",
  description:
    "A free swiss army knife of everyday web utilities — QR code generator, color palette generator, ASCII art (text & image), Base64 encoder/decoder, password generator, and JSON formatter.",
  keywords: [
    "QR Code Generator",
    "Color Palette Generator",
    "ASCII Art Generator",
    "Image to ASCII Art",
    "Base64 Encoder Decoder",
    "Password Generator",
    "JSON Formatter",
    "Free Web Tools",
    "Online Utilities",
    "Braydon Lafleur",
  ],
  openGraph: {
    type: "website",
    title: "LaFleur's Web Tools",
    description:
      "Free browser-based utilities: QR codes, color palettes, ASCII art from text or images, Base64, secure passwords, and JSON formatting — no sign-up required.",
    images: [{ url: "/mainImg.jpg", width: 1200, height: 630, alt: "LaFleur's Web Tools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LaFleur's Web Tools",
    description:
      "Free browser-based utilities: QR codes, color palettes, ASCII art, Base64, passwords, and JSON — no sign-up required.",
    images: ["/mainImg.jpg"],
  },
};

export default function ToolsPage() {
  return <ToolsClient />;
}
