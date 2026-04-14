import ToolsClient from './ToolsClient';

export const metadata = {
  title: "Web Tools",
  description:
    "A swiss army knife of everyday web utilities — QR code generator, color palette generator, ASCII art, Base64 encoder, password generator, and JSON formatter.",
  openGraph: {
    title: "LaFleur's Web Tools",
    description:
      "Free, fast web utilities: QR codes, color palettes, ASCII art, Base64, passwords, and JSON formatting.",
  },
};

export default function ToolsPage() {
  return <ToolsClient />;
}
