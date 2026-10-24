import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Small generated favicon: the cobalt field from the site's poster system.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const black = await readFile(join(process.cwd(), "src/app/_og/SchibstedGrotesk-900.ttf"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          padding: "0 0 3px 5px",
          background: "#1f3bff",
          color: "#ffffff",
          fontSize: 24,
          fontWeight: 900,
          fontFamily: "Schibsted Grotesk",
          letterSpacing: "-0.06em",
          lineHeight: 1,
        }}
      >
        D
      </div>
    ),
    { ...size, fonts: [{ name: "Schibsted Grotesk", data: black, weight: 900, style: "normal" }] },
  );
}
