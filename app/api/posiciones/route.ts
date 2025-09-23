import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const posicion = await prisma.posicion.findMany({
      take: 10
    });

    return NextResponse.json(posicion);

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error al leer posiciones" }, { status: 500 });
  }
}
