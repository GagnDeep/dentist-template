import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            padding: "40px 80px",
            borderRadius: "24px",
            border: "2px solid #e5e7eb",
            boxShadow: "0 20px 50px -12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: "#0f172a",
              marginBottom: 20,
              letterSpacing: "-0.05em",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#64748b",
              textAlign: "center",
              maxWidth: 800,
            }}
          >
            {siteConfig.description}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: "#0ea5e9",
                marginRight: 12,
              }}
            />
            <div
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: "#0ea5e9",
              }}
            >
              Premium Dental Care
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
