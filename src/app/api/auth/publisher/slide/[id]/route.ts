import { NextResponse } from "next/server";
import prisma from "@/app/library/prisma";
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const findSlide = await prisma.slider.findUnique({
      where: { id: params.id },
    });
    if (!findSlide) {
      return NextResponse.json({ error: "No slide found" }, { status: 400 });
    }
    return NextResponse.json({ success: "success", data: findSlide });
  } catch (err) {
    if (err instanceof Error) {
      console.log(`Алдаа гарлаа: ${err.message}`.underline.red);
      return NextResponse.json({ error: "Алдааа гарлаа" }, { status: 400 });
    }
  }
}
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const findSlide = await prisma.slider.findUnique({
      where: { id: params.id },
    });
    if (!findSlide) {
      return NextResponse.json({ error: "No slide found" }, { status: 400 });
    }
    const updateSlide = await prisma.slider.update({
      where: { id: params.id },
      data: {
        ...body,
      },
    });
    return NextResponse.json({ success: "success", data: updateSlide });
  } catch (err) {
    if (err instanceof Error) {
      console.log(`Алдаа гарлаа: ${err.message}`.underline.red);
      return NextResponse.json({ error: "Алдааа гарлаа" }, { status: 400 });
    }
  }
}
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const findSlide = await prisma.slider.findUnique({
      where: { id: params.id },
    });
    if (!findSlide) {
      return NextResponse.json({ error: "No slide found" }, { status: 400 });
    }
    const deleteSlide = await prisma.slider.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ success: "success", data: deleteSlide });
  } catch (err) {
    if (err instanceof Error) {
      console.log(`Алдаа гарлаа: ${err.message}`.underline.red);
      return NextResponse.json({ error: "Алдааа гарлаа" }, { status: 400 });
    }
  }
}
