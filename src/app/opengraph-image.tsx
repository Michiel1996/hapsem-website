import { ImageResponse } from "next/og";
import { PRACTICE } from "@/lib/constants";

export const alt = `${PRACTICE.name} (${PRACTICE.shortName})`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Open Graph-afbeelding voor gedeelde links (WhatsApp, Facebook, …) */
export default function OpengraphImage() {
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
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            color: "#233a48",
            letterSpacing: -2,
          }}
        >
          {PRACTICE.shortName}
        </div>
        <div
          style={{
            marginTop: 8,
            width: 120,
            height: 8,
            borderRadius: 4,
            background: "#c9a962",
          }}
        />
        <div style={{ display: "flex", marginTop: 28, fontSize: 44, color: "#2f5568" }}>
          {PRACTICE.name}
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 30, color: "#4a849f" }}>
          Huisarts in Semmerzake (Gavere) · Sportgeneeskunde
        </div>
        <div style={{ display: "flex", marginTop: 44, fontSize: 26, color: "#6fa3be" }}>
          {`hapsem.be · ${PRACTICE.address.full}`}
        </div>
      </div>
    ),
    size
  );
}
