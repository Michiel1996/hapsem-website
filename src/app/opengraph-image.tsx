import { ImageResponse } from "next/og";
import { PRACTICE, SITE_URL } from "@/lib/constants";

export const alt = `${PRACTICE.name} (${PRACTICE.shortName})`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Open Graph-afbeelding voor gedeelde links (WhatsApp, Facebook, …) */
export default function OpengraphImage() {
  const domain = SITE_URL.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f4f9fc 0%, #ffffff 55%, #e8f2f8 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: -1,
          }}
        >
          <span style={{ color: "#002D5A" }}>HAP</span>
          <span style={{ color: "#5BA3D9" }}>SEM</span>
        </div>
        <div
          style={{
            marginTop: 8,
            width: 120,
            height: 6,
            borderRadius: 3,
            background: "#5BA3D9",
          }}
        />
        <div style={{ display: "flex", marginTop: 28, fontSize: 40, color: "#002D5A" }}>
          {PRACTICE.name}
        </div>
        <div style={{ display: "flex", marginTop: 18, fontSize: 28, color: "#3a6a82" }}>
          Huisarts in Semmerzake (Gavere) · Sportgeneeskunde
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 24, color: "#6fa3be" }}>
          {`${domain} · ${PRACTICE.address.full}`}
        </div>
      </div>
    ),
    size
  );
}
