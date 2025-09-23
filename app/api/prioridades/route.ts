import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const prioridades = await prisma.prioridad.findMany({
      take: 10
    });

    return NextResponse.json(prioridades);

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error al leer usuarios" }, { status: 500 });
  }
}