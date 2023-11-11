import { PrismaClient } from "@prisma/client";

const DATABASE_URL = process.env.DATABASE_URL;

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL,
    },
  },
});

declare global {
  var prisma: PrismaClient;
}

if (process.env.NODE_ENV === "production") {
  prisma.$connect();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma.$connect();
}

export default prisma;
