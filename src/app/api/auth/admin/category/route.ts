import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
export async function GET() {
  try {
    const data = await prisma.category.findMany({
      orderBy: {
        name: "asc",
      },
      include: {
        product: true,
      },
    });
    if (data.length === 0) {
      return NextResponse.json({ message: "No category found" });
    }
    return NextResponse.json({
      message: "success",
      data,
    });
  } catch (err) {
    if (err instanceof Error) {
      console.log(`Алдаа гарлаа: ${err.message}`);
    }
    return NextResponse.json({ error: "Алдааа гарлаа" }, { status: 400 });
  }
}

export async function POST(req: Request) {
  try {
    const res = await req.json();
    if (Object.keys(res).length === 0) {
      return NextResponse.json({ message: "Талбарын утга хоосон байна" });
    } else {
      const data = {
        ...res,
      };
      const imagesDirectory = path.join(
        process.cwd(),
        "public",
        "image",
        data.name
      );

      fs.mkdirSync(imagesDirectory, { recursive: true });

      return NextResponse.json({
        message: "success",
        data: await prisma.category.create({ data }),
      });
    }
  } catch (err) {
    if (err instanceof Error) {
      console.log(`Алдаа гарлаа: ${err.message}`);
    }
    return NextResponse.json({ error: "Алдааа гарлаа" }, { status: 400 });
  }
}
