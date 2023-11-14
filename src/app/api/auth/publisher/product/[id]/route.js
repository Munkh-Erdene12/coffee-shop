import { NextResponse } from "next/server";
import colors from "colors";
import prisma from "@/app/lib/prisma";
export async function GET(req, { params }) {
  try {
    const data = await prisma.product.findUnique({
      where: { id: params.id },
    });
    if (!data) {
      return NextResponse.json({ error: "product not found" }, { status: 400 });
    }
    return NextResponse.json({ success: "success", data });
  } catch (err) {
    if (err) {
      console.log(`Алдаа гарлаа: ${err.message}`.underline.red);
      return NextResponse.json({ error: "Алдааа гарлаа" }, { status: 400 });
    }
  }
}
export async function PUT(req, { params }) {
  try {
    const findProduct = await prisma.product.findUnique({
      where: { id: params.id },
    });

    if (!findProduct) {
      return NextResponse.json({ error: "product not found" }, { status: 400 });
    }

    const body = await req.json();

    const updateProduct = await prisma.product.update({
      where: { id: params.id },
      data: body,
    });

    return NextResponse.json({ success: "success", data: updateProduct });
  } catch (err) {
    if (err) {
      console.log(`Алдаа гарлаа: ${err.message}`.underline.red);
      return NextResponse.json({ error: "Алдааа гарлаа" }, { status: 400 });
    }
  }
}
export async function DELETE(req, { params }) {
  try {
    const findProduct = await prisma.product.findUnique({
      where: { id: params.id },
    });

    if (!findProduct) {
      return NextResponse.json({ error: "product not found" }, { status: 400 });
    }

    const deleteProduct = await prisma.product.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: "success", data: deleteProduct });
  } catch (err) {
    if (err) {
      console.log(`Алдаа гарлаа: ${err.message}`.underline.red);
      return NextResponse.json({ error: "Алдааа гарлаа" }, { status: 400 });
    }
  }
}
