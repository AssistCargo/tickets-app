import React from 'react'
import { AjustesComponent } from "./client"
import { revalidatePath } from "next/cache"
import { prisma } from "@/lib/prisma"

// Types para los datos base (estructura típica de las tablas)


// Types para los datos serializados (Date → string)
interface SerializedSector {
  id: number
  nombre: string | null
  created_at: string
  updated_at?: string
}

interface SerializedPosicion {
  id: number
  nombre: string | null
  created_at: string
  updated_at?: string
}

interface SerializedCategoria {
  id: number
  nombre: string | null
  created_at: string
  updated_at?: string
}

interface SerializedSubcategoria {
  id: number
  nombre: string | null
  id_categorias: number | null
  created_at: string
  updated_at?: string
}

interface SerializedUser {
  id: string;                      // <- era number
  username: string | null;         // <- era string
  correo: string | null;           // <- era string
  // password?: string | null;     // si lo necesitás, mantenelo como opcional y nullable
  id_sector: number | null;
  id_posicion: number | null;
  id_autorizador: string | null;   // <- era number | null
  created_at: string;
  updated_at?: string;
  sector: SerializedSector | null;
  posicion: SerializedPosicion | null;
  autorizador: { id: string; username: string | null; correo: string | null } | null;
  tickets: Array<{
    id: number;
    descripcion: string;
    created_at: string;
    categoria: { nombre: string };
  }>;
}

async function getSectores(): Promise<SerializedSector[]> {
  try {
    const sectores = await prisma.sector.findMany({
      orderBy: {
        created_at: 'asc' // Más recientes primero
      }
    })

    // Serializar la fecha created_at
    const serializedSectores: SerializedSector[] = sectores.map(sector => ({
      ...sector,
      created_at: sector.created_at.toISOString() // Date → String
    }))

    return serializedSectores

  } catch (error) {
    console.error('Error obteniendo sectores:', error)
    return [] // Array vacío en caso de error
  }
}

async function createSector(item: string): Promise<void> {
  'use server'

  await prisma.sector.create({
    data: {
      nombre: item
    }
  })
  revalidatePath('/ajustes')
}

async function updateSector(id: string, item: string): Promise<void> {
  'use server'

  await prisma.sector.update({
    where: {
      id: Number(id)
    },
    data: {
      nombre: item
    }
  })
  revalidatePath('/ajustes')
}

async function getPosiciones(): Promise<SerializedPosicion[]> {
  try {
    const posiciones = await prisma.posicion.findMany({
      orderBy: {
        created_at: 'asc' // Más recientes primero
      }
    })

    // Serializar la fecha created_at
    const serializedPosiciones: SerializedPosicion[] = posiciones.map(posicion => ({
      ...posicion,
      created_at: posicion.created_at.toISOString() // Date → String
    }))

    return serializedPosiciones

  } catch (error) {
    console.error('Error obteniendo posiciones:', error)
    return [] // Array vacío en caso de error
  }
}

async function createPosicion(item: string): Promise<void> {
  'use server'
  await prisma.posicion.create({
    data: {
      nombre: item
    }
  })
  revalidatePath('/ajustes')
}

async function updatePosicion(id: string, item: string): Promise<void> {
  'use server'

  await prisma.posicion.update({
    where: {
      id: Number(id)
    },
    data: {
      nombre: item
    }
  })
  revalidatePath('/ajustes')
}

async function getCategorias(): Promise<SerializedCategoria[]> {
  try {
    const categorias = await prisma.categoria.findMany({
      orderBy: {
        created_at: 'asc' // Más recientes primero
      }
    })

    // Serializar la fecha created_at
    const serializedCategorias: SerializedCategoria[] = categorias.map(categoria => ({
      ...categoria,
      created_at: categoria.created_at.toISOString() // Date → String
    }))

    return serializedCategorias

  } catch (error) {
    console.error('Error obteniendo categorias:', error)
    return [] // Array vacío en caso de error
  }
}

async function createCategoria(item: string): Promise<void> {
  'use server'

  await prisma.categoria.create({
    data: {
      nombre: item
    }
  })
  revalidatePath('/ajustes')
}

async function updateCategoria(id: string, item: string): Promise<void> {
  'use server'

  await prisma.categoria.update({
    where: {
      id: Number(id)
    },
    data: {
      nombre: item
    }
  })
  revalidatePath('/ajustes')
}

async function getSubcategorias(): Promise<SerializedSubcategoria[]> {
  try {
    const subcategorias = await prisma.sub_categorias.findMany({
      orderBy: {
        created_at: 'asc' // Más recientes primero
      }
    })

    // Serializar la fecha created_at
    const serializedSubcategorias: SerializedSubcategoria[] = subcategorias.map(subcategoria => ({
      ...subcategoria,
      created_at: subcategoria.created_at.toISOString() // Date → String
    }))

    return serializedSubcategorias

  } catch (error) {
    console.error('Error obteniendo subcategorias:', error)
    return [] // Array vacío en caso de error
  }
}

async function createSubcategoria(nombre: string, id_categorias: string): Promise<void> {
  'use server'

  await prisma.sub_categorias.create({
    data: {
      nombre: nombre,
      id_categorias: Number(id_categorias)
    }
  })
  revalidatePath('/ajustes')
}

async function updateSubcategoria(id: string, nombre: string, id_categorias: string): Promise<void> {
  'use server'

  await prisma.sub_categorias.update({
    where: {
      id: Number(id)
    },
    data: {
      nombre: nombre,
      id_categorias: Number(id_categorias)
    }
  })
  revalidatePath('/ajustes')
}

async function getUsuariosComplete(): Promise<SerializedUser[]> {
  try {
    const users = await prisma.users.findMany({
      take: 10,
      include: {
        sector: true,
        posicion: true,
        autorizador: {
          select: {
            id: true,
            username: true,
            correo: true
          }
        },
        tickets: {
          take: 5,
          orderBy: {
            created_at: 'desc'
          },
          select: {
            id: true,
            descripcion: true,
            created_at: true,
            categoria: {
              select: {
                nombre: true
              }
            }
          }
        }
      },
      orderBy: {
        created_at: 'desc'
      }
    })

    const serializedUsers: any[] = users.map((u) => ({
      id: u.id,
      username: u.username,
      correo: u.correo,
      id_sector: u.id_sector,
      id_posicion: u.id_posicion,
      id_autorizador: u.id_autorizador,
      created_at: u.created_at.toISOString(),

      sector: u.sector
        ? {
          id: u.sector.id,
          nombre: u.sector.nombre,
          created_at: u.sector.created_at.toISOString(),
        }
        : null,

      posicion: u.posicion
        ? {
          id: u.posicion.id,
          nombre: u.posicion.nombre,
          created_at: u.posicion.created_at.toISOString(),
        }
        : null,

      autorizador: u.autorizador
        ? { id: u.autorizador.id, username: u.autorizador.username, correo: u.autorizador.correo }
        : null,

      tickets: u.tickets.map((t) => ({
        id: t.id,
        descripcion: t.descripcion,
        created_at: t.created_at.toISOString(),
        categoria: { nombre: t.categoria?.nombre },
      })),
    }));

    return serializedUsers

  } catch (error) {
    console.error('Error obteniendo usuarios completos:', error)
    throw error
  }
}

export default async function AjustesPage(): Promise<React.JSX.Element> {
  const users = await getUsuariosComplete()
  const sectores = await getSectores()
  const posiciones = await getPosiciones()
  const categorias = await getCategorias()
  const subcategorias = await getSubcategorias()

  return (
    <AjustesComponent
      usuarios={users}
      sectores={sectores}
      posiciones={posiciones}
      categorias={categorias}
      subcategorias={subcategorias}
      createSector={createSector}
      updateSector={updateSector}
      createPosicion={createPosicion}
      updatePosicion={updatePosicion}
      createCategoria={createCategoria}
      updateCategoria={updateCategoria}
      createSubcategoria={createSubcategoria}
      updateSubcategoria={updateSubcategoria}
    />
  )
}