import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const categorias = await prisma.categoria.findMany({
      take: 10
    });

    return NextResponse.json(categorias);

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error al leer categorias" }, { status: 500 });
  }
}