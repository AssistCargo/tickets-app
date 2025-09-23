import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const user = await prisma.users.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
    }

    return NextResponse.json({ message: "Usuario", user }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
