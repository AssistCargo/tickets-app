import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const estados = await prisma.estados.findMany({
      take: 10
    });

    return NextResponse.json(estados);

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error al leer estados" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const estado = await prisma.estados.create({
      data: body
    });

    return NextResponse.json(estado);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error al crear estado" }, { status: 500 });
  }
}