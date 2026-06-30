// XARVIONEX Ω∞ CORE DATABASE CLIENT
// Ensures connection pooling efficiency in serverless & dev environments.

import { PrismaClient } from "@prisma/client";

// Mencegah multiple instances of Prisma Client di environment development
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
