import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const roles = await prisma.rol.findMany({
      take: 10
    });

    return NextResponse.json(roles);

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error al leer roles" }, { status: 500 });
  }
}