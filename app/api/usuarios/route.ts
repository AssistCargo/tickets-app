
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const users = await prisma.users.findMany({
      take: 10
    });

    return NextResponse.json(users);

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error al leer usuarios" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log(body)
    const user = await prisma.users.create({
      data: body
    });

    return NextResponse.json(user);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error al crear usuario" }, { status: 500 });
  }
}
