import { AjustesComponent } from "./client"
import { revalidatePath } from "next/cache"
import { prisma } from "@/lib/prisma";

async function getSectores() {
  try {
    const sectores = await prisma.sector.findMany({
      orderBy: {
        created_at: 'asc' // Más recientes primero
      }
    });

    // Serializar la fecha created_at
    const serializedSectores = sectores.map(sector => ({
      ...sector,
      created_at: sector.created_at.toISOString() // Date → String
    }));

    return serializedSectores;

  } catch (error) {
    console.error('Error obteniendo sectores:', error);
    return []; // Array vacío en caso de error
  }
}

async function createSector(item) {
  'use server'

  await prisma.sector.create({
    data: {
      nombre: item
    }
  })
  revalidatePath('/ajustes')
}

async function updateSector(id, item) {
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

async function getPosiciones() {
  try {
    const posiciones = await prisma.posicion.findMany({
      orderBy: {
        created_at: 'asc' // Más recientes primero
      }
    });

    // Serializar la fecha created_at
    const serializedPosiciones = posiciones.map(posicion => ({
      ...posicion,
      created_at: posicion.created_at.toISOString() // Date → String
    }));

    return serializedPosiciones;

  } catch (error) {
    console.error('Error obteniendo posiciones:', error);
    return []; // Array vacío en caso de error
  }
}

async function createPosicion(item) {
  'use server'
  await prisma.posicion.create({
    data: {
      nombre: item
    }
  })
  revalidatePath('/ajustes')
}

async function updatePosicion(id, item) {
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

async function getCategorias() {
  try {
    const categorias = await prisma.categoria.findMany({
      orderBy: {
        created_at: 'asc' // Más recientes primero
      }
    });

    // Serializar la fecha created_at
    const serializedCategorias = categorias.map(posicion => ({
      ...posicion,
      created_at: posicion.created_at.toISOString() // Date → String
    }));

    return serializedCategorias;

  } catch (error) {
    console.error('Error obteniendo categorias:', error);
    return []; // Array vacío en caso de error
  }
}

async function createCategoria(item) {
  'use server'

  await prisma.categoria.create({
    data: {
      nombre: item
    }
  })
  revalidatePath('/ajustes')
}

async function updateCategoria(id, item) {
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

async function getSubcategorias() {
  try {
    const subcategorias = await prisma.sub_categorias.findMany({
      orderBy: {
        created_at: 'asc' // Más recientes primero
      }
    });

    // Serializar la fecha created_at
    const serializedSubcategorias = subcategorias.map(subcategoria => ({
      ...subcategoria,
      created_at: subcategoria.created_at.toISOString() // Date → String
    }));

    return serializedSubcategorias;

  } catch (error) {
    console.error('Error obteniendo subcategorias:', error);
    return []; // Array vacío en caso de error
  }
}

async function createSubcategoria(nombre, id_categorias) {
  'use server'

  await prisma.sub_categorias.create({
    data: {
      nombre: nombre,
      id_categorias: Number(id_categorias)
    }
  })
  revalidatePath('/ajustes')
}

async function updateSubcategoria(id, nombre, id_categorias) {
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



async function getUsuariosComplete() {
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
    });


    // Serializar todas las fechas
    const serializedUsers = users.map(user => ({
      ...user,
      created_at: user.created_at.toISOString(),
      sector: user.sector ? {
        ...user.sector,
        created_at: user.sector.created_at.toISOString()
      } : null,
      posicion: user.posicion ? {
        ...user.posicion,
        created_at: user.posicion.created_at.toISOString()
      } : null,
      tickets: user.tickets.map(ticket => ({
        ...ticket,
        created_at: ticket.created_at.toISOString()
      }))
    }));

    return serializedUsers;

  } catch (error) {
    console.error('Error obteniendo usuarios completos:', error);
    throw error;
  }
}


export default async function AjustesPage() {
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