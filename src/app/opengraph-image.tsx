import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Dheeraj Shrivastav, Software Engineer: I ship software real people use every day.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Share card in the site's Swiss poster system: paper ground, one cobalt field, Schibsted Grotesk.
// Fonts: Schibsted Grotesk (OFL), static instances from Google Fonts, bundled in src/app/_og.
export default async function OpengraphImage() {
  const dir = join(process.cwd(), "src/app/_og");
  const [black, heavy, medium] = await Promise.all([
    readFile(join(dir, "SchibstedGrotesk-900.ttf")),
    readFile(join(dir, "SchibstedGrotesk-800.ttf")),
    readFile(join(dir, "SchibstedGrotesk-500.ttf")),
  ]);

  const rows = [
    ["01", "Real-time voice agent"],
    ["02", "DappDrop"],
    ["03", "jam-nodes"],
  ];

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#f6f6f3", padding: 40, fontFamily: "Schibsted Grotesk" }}>
        <div
          style={{
            width: 720,
            background: "#1f3bff",
            color: "#ffffff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "44px 48px",
          }}
        >
          <div style={{ display: "flex", fontSize: 26, fontWeight: 500 }}>Dheeraj Shrivastav</div>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 800, lineHeight: 0.98, letterSpacing: "-0.04em" }}>
            I ship software real people use every day.
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", paddingLeft: 32, color: "#0d0d0d" }}>
          <div style={{ display: "flex", fontSize: 22, fontWeight: 800, paddingBottom: 12, borderBottom: "3px solid #0d0d0d" }}>
            Selected work
          </div>
          {rows.map(([no, name]) => (
            <div key={no} style={{ display: "flex", alignItems: "baseline", padding: "20px 0", borderBottom: "1.5px solid #0d0d0d" }}>
              <div style={{ display: "flex", width: 72, fontSize: 40, fontWeight: 900, letterSpacing: "-0.05em" }}>{no}</div>
              <div style={{ display: "flex", fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>{name}</div>
            </div>
          ))}
          <div style={{ display: "flex", marginTop: "auto", fontSize: 22, fontWeight: 500, color: "#3d3d3a" }}>
            Software Engineer · product, backend, AI, Web3
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Schibsted Grotesk", data: black, weight: 900, style: "normal" },
        { name: "Schibsted Grotesk", data: heavy, weight: 800, style: "normal" },
        { name: "Schibsted Grotesk", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
