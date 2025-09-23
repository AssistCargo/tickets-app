import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const subCategoria = await prisma.sub_categorias.findMany({
      take: 10
    });

    return NextResponse.json(subCategoria);

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error al leer sub categorias" }, { status: 500 });
  }
}