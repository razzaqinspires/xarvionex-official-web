import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Mencegah Prisma melakukan ping database saat Vercel sedang melakukan build
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // Verifikasi koneksi database (Health Check)
    await prisma.$queryRaw`SELECT 1`;

    const systemInfo = {
      serverStatus: "ONLINE",
      environment: process.env.NODE_ENV || "development",
      uptime: process.uptime(), 
      memoryUsage: process.memoryUsage(),
      timestamp: new Date().toISOString(),
      architect: "Arifi Razzaq",
      ecosystem: "XARVIONEX Ω∞"
    };

    return NextResponse.json({
      status: "SUCCESS",
      message: "Telemetry operational.",
      data: systemInfo
    }, { status: 200 });

  } catch (error) {
    console.error("[SYS_ERR] API /telemetry health check failed:", error);
    return NextResponse.json({
      status: "CRITICAL",
      message: "Database connection or core system failure.",
      data: {
        serverStatus: "DEGRADED",
        timestamp: new Date().toISOString(),
      }
    }, { status: 503 });
  }
}
