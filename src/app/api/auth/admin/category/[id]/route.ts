import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import colors from "colors";
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await prisma.category.findUnique({
      where: {
        id: params.id,
      },
    });
    if (!data) {
      return NextResponse.json({ message: "No category found" });
    }
    return NextResponse.json({
      message: "success",
      data,
    });
  } catch (err) {
    if (err instanceof Error) {
      console.log(`Алдаа гарлаа: ${err.message}`.underline.red);
    }
    return NextResponse.json({ error: "Алдааа гарлаа" }, { status: 400 });
  }
}
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await req.json();

    if (Object.keys(data).length === 0) {
      return NextResponse.json({ message: "Талбарын утга хоосон байна" });
    } else {
      const updatedCategory = await prisma.category.update({
        where: {
          id: params.id,
        },
        data: {
          ...data,
        },
      });

      return NextResponse.json({
        message: "success",
        data: updatedCategory,
      });
    }
  } catch (err) {
    if (err instanceof Error) {
      console.log(`Алдаа гарлаа: ${err.message}`.underline.red);
    }
    return NextResponse.json({ error: "Алдааа гарлаа" }, { status: 400 });
  }
}
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const findData = await prisma.category.findUnique({
      where: {
        id: params.id,
      },
    });
    if (!findData) {
      return NextResponse.json({
        error: `${params.id} Категори байхгүй байна`,
      });
    }
    const data = await prisma.category.delete({
      where: {
        id: params.id,
      },
    });

    if (!data) {
      return NextResponse.json({
        error: `${params.id} категори байхгүй байна!`,
      });
    }

    return NextResponse.json({
      message: "success",
      data,
    });
  } catch (err) {
    if (err instanceof Error) {
      console.log(`Алдаа гарлаа: ${err.message}`.underline.red);
    }
    return NextResponse.json({ error: "Алдааа гарлаа" }, { status: 400 });
  }
}
