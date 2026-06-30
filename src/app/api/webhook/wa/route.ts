import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Kunci otorisasi statis (Di masa depan: Validasi HMAC Signature)
const WEBHOOK_SECRET = process.env.XARVIONEX_WEBHOOK_SECRET || "dev_secret_key_xarvionex";

export async function POST(request: Request) {
  try {
    // 1. Otorisasi Header
    const authHeader = request.headers.get("x-xarvionex-signature");
    if (authHeader !== WEBHOOK_SECRET) {
      return NextResponse.json({
        status: "FORBIDDEN",
        message: "Invalid transmission signature."
      }, { status: 403 });
    }

    // 2. Ekstrak Data Payload dari Bot
    const payload = await request.json();
    const { eventType, botId, data } = payload;

    console.log(`[BOT_WEBHOOK] Received event [${eventType}] from bot [${botId}]`);

    // 3. Routing Logika berdasarkan Tipe Event (Observe -> Route -> Act)
    switch (eventType) {
      case "SYSTEM_STATUS_UPDATE":
        // Menyimpan telemetri terbaru dari Bot (misal: bot mendeteksi server overload)
        await prisma.systemTelemetry.create({
          data: {
            serverStatus: data.status,
            uptime: data.uptime || 0,
            activeBots: data.activeInstances || 1,
          }
        });
        break;

      case "NEW_PROJECT_LOG":
        // Bot memperbarui Log Proyek melalui perintah WhatsApp
        // Contoh data: { slug: 'core-bot', log: 'Patch notes applied' }
        if (data.slug && data.log) {
          const project = await prisma.project.findUnique({ where: { slug: data.slug } });
          if (project) {
            // Append log (asumsi schema diupdate menjadi JSON atau relasi table terpisah)
            // Ini adalah operasi placeholder untuk demonstrasi arsitektur
            console.log(`[BOT_WEBHOOK] Project ${data.slug} log update requested.`);
          }
        }
        break;

      default:
        console.warn(`[BOT_WEBHOOK] Unrecognized event type: ${eventType}`);
    }

    // 4. Return respon cepat agar Bot tidak mengalami timeout
    return NextResponse.json({
      status: "SUCCESS",
      message: "Payload received and processed by Nexus Gateway.",
    }, { status: 200 });

  } catch (error) {
    console.error("[SYS_ERR] Webhook processing failed:", error);
    return NextResponse.json({
      status: "ERROR",
      message: "Webhook transmission malformed or corrupted."
    }, { status: 400 });
  }
}
