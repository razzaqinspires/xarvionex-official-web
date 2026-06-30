import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const WEBHOOK_SECRET = process.env.XARVIONEX_WEBHOOK_SECRET || "dev_secret_key_xarvionex";

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("x-xarvionex-signature");
    if (authHeader !== WEBHOOK_SECRET) {
      return NextResponse.json({ status: "FORBIDDEN", message: "Invalid transmission signature." }, { status: 403 });
    }

    const payload = await request.json();
    const { eventType, botId, data } = payload;

    switch (eventType) {
      case "SYSTEM_STATUS_UPDATE":
        await prisma.systemTelemetry.create({
          data: { serverStatus: data.status, uptime: data.uptime || 0, activeBots: data.activeInstances || 1 }
        });
        break;
      case "NEW_PROJECT_LOG":
        if (data.slug && data.log) {
          const project = await prisma.project.findUnique({ where: { slug: data.slug } });
        }
        break;
    }

    return NextResponse.json({ status: "SUCCESS", message: "Payload received." }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: "ERROR", message: "Webhook transmission malformed." }, { status: 400 });
  }
}
