import { NextResponse } from "next/server";
import colors from "colors";
import uploadImage from "@/app/lib/upload";
import prisma from "@/app/lib/prisma";
export async function GET() {
  try {
    const data = await prisma.slider.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });
    if (data.length === 0) {
      return NextResponse.json({ error: "No data found" }, { status: 400 });
    }
    return NextResponse.json({ success: "success", data });
  } catch (err) {
    if (err instanceof Error) {
      console.log(`Алдаа гарлаа: ${err.message}`.underline.red);
      return NextResponse.json({ error: "Алдааа гарлаа" }, { status: 400 });
    }
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.formData();
    let images = "";
    const otherFields: Record<string, string> = {};

    for (let [key, value] of body.entries()) {
      if (key === "image") {
        const file = value as File;
        const imageName = await uploadImage(file, "slides");
        images = imageName;
      } else {
        otherFields[key] = value.toString();
      }
    }
    const sliderData = {
      image: images,
      title: otherFields.title,
      subtitle: otherFields.subtitle,
      buttonText: otherFields.buttonText,
    };
    const slider = await prisma.slider.create({
      data: sliderData,
    });

    return NextResponse.json({ success: "success", data: slider });
  } catch (err) {
    if (err instanceof Error) {
      console.log(`Алдаа гарлаа: ${err.message}`.underline.red);
      return NextResponse.json({ error: "Алдааа гарлаа" }, { status: 400 });
    }
  }
}
