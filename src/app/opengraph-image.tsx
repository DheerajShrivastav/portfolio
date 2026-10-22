import { ImageResponse } from "next/og";

export const alt = "Dheeraj Shrivastav, Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0a0a0b",
          color: "#e6edf3",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, color: "#4AF626" }}>~/dheeraj</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
            Dheeraj Shrivastav
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#8b949e", marginTop: 24 }}>
            Software Engineer: AI Agents, Backend & Web3
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#58a6ff" }}>
          $ ships production AI agents & backend systems
        </div>
      </div>
    ),
    size,
  );
}
