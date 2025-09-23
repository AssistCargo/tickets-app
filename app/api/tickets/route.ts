import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const ticket = await prisma.ticket.findMany({
      take: 10
    });

    return NextResponse.json(ticket);

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error al leer tickets" }, { status: 500 });
  }
}