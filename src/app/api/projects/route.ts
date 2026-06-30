import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const status = searchParams.get("status");

    // Dynamic Query Builder
    const queryFilter: any = {};
    if (category && category !== "ALL") queryFilter.category = category;
    if (status) queryFilter.status = status;

    const projects = await prisma.project.findMany({
      where: queryFilter,
      orderBy: {
        createdAt: 'desc'
      },
      select: {
        id: true,
        slug: true,
        name: true,
        description: true,
        status: true,
        version: true,
        category: true,
        techStack: true,
      }
    });

    return NextResponse.json({
      status: "SUCCESS",
      message: "Projects matrix retrieved successfully.",
      data: projects,
      timestamp: new Date().toISOString()
    }, { status: 200 });

  } catch (error) {
    console.error("[SYS_ERR] API /projects retrieval failed:", error);
    return NextResponse.json({
      status: "ERROR",
      message: "Internal server anomaly detected.",
      data: null
    }, { status: 500 });
  }
}
