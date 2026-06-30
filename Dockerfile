# ==========================================
# STAGE 1: DEPENDENCY RESOLUTION
# ==========================================
FROM node:20-alpine AS deps
# Menambahkan libc6-compat karena Prisma membutuhkannya di lingkungan Alpine Linux
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Menyalin spesifikasi paket
COPY package.json package-lock.json ./
# Menginstal seluruh dependensi secara persis sesuai lockfile
RUN npm ci

# ==========================================
# STAGE 2: BUILD ENGINE
# ==========================================
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma Client sebelum build Next.js agar tipe data dikenali
RUN npx prisma generate

# Eksekusi kompilasi Next.js
RUN npm run build

# ==========================================
# STAGE 3: PRODUCTION RUNTIME
# ==========================================
FROM node:20-alpine AS runner
WORKDIR /app

# Mode Produksi ketat
ENV NODE_ENV production
# Menonaktifkan telemetri Next.js publik untuk menjaga privasi server
ENV NEXT_TELEMETRY_DISABLED 1

# Membuat user non-root untuk keamanan kontainer
RUN addgroup --system --gid 1001 xarvionex_group
RUN adduser --system --uid 1001 xarvionex_user

# Menyalin direktori statis dan konfigurasi
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./

# Menyalin hasil build standalone (efisiensi ruang)
COPY --from=builder --chown=xarvionex_user:xarvionex_group /app/.next/standalone ./
COPY --from=builder --chown=xarvionex_user:xarvionex_group /app/.next/static ./.next/static

# Membuka port internal
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Menggunakan user non-root yang telah dibuat
USER xarvionex_user

# Memulai server Node.js dari file eksekusi standalone
CMD ["node", "server.js"]
