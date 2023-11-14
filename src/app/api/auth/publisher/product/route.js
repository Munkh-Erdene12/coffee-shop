import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import colors from "colors";
import uploadImage from "@/app/lib/upload";
export async function GET(req) {
  try {
    let limit = parseInt(req.nextUrl.searchParams.get("limit")) || 100;
    let type = req.nextUrl.searchParams.get("name");
    const data = await prisma.product.findMany({
      take: limit,
      where: type ? { type: type } : {},
      orderBy: {
        createdAt: "asc",
      },
    });
    if (data.length === 0) {
      return NextResponse.json({ message: "No product found" });
    }
    return NextResponse.json({
      message: "success",
      dataLength: data.length,
      data,
    });
  } catch (err) {
    if (err) {
      console.log(`Алдаа гарлаа: ${err.message}`.underline.red);
    }
    return NextResponse.json({ error: "Алдааа гарлаа" }, { status: 400 });
  }
}
export async function POST(req) {
  try {
    let images = "";
    const otherFields = {};

    const body = await req.formData();
    for (let [key, value] of body.entries()) {
      if (key === "img") {
        const type = otherFields["type"];
        const imageName = await uploadImage(value, type);
        images = imageName;
      } else {
        otherFields[key] = value;
      }
    }

    // const data = {
    //   id: id(),
    //   ...otherFields,
    //   img: images,
    // };

    // const product = await prisma.product.create({
    //   data,
    // });

    return NextResponse.json({ success: "success", data: "" });
  } catch (err) {
    if (err) {
      console.log(`Алдаа гарлаа: ${err.message}`.underline.red);
    }
    return NextResponse.json({ error: "Алдааа гарлаа" }, { status: 400 });
  }
}
