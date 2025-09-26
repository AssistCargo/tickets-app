
import { AjustesComponent } from "./client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { createAdminClient, createClient } from "@/lib/supabase/server"

// Types para los datos base (estructura típica de las tablas)


// Types para los datos serializados (Date → string)
// interface SerializedSector {
//   id: number
//   nombre: string | null
//   created_at: string
//   updated_at?: string
// }

// interface SerializedPosicion {
//   id: number
//   nombre: string | null
//   created_at: string
//   updated_at?: string
// }

// interface SerializedCategoria {
//   id: number
//   nombre: string | null
//   created_at: string
//   updated_at?: string
// }

// interface SerializedSubcategoria {
//   id: number
//   nombre: string | null
//   id_categorias: number | null
//   created_at: string
//   updated_at?: string
// }

// interface SerializedAutorizador {
//   id: number;
//   username: string;
//   correo: string;
// };

// interface SerializedUser {
//   id: string;                      // <- era number
//   username: string | null;
//   nombre: string;                  // <- era string
//   correo: string | null;           // <- era string
//   password?: string | null;     // si lo necesitás, mantenelo como opcional y nullable
//   id_sector: number | null;
//   id_posicion: number | null;
//   id_autorizador: number | null;   // <- era number | null
//   created_at: string;
//   updated_at?: string;
//   sector: SerializedSector | null;
//   posicion: SerializedPosicion | null;
//   autorizador: { id: string; username: string | null; correo: string | null } | null;
//   tickets: Array<{
//     id: number;
//     descripcion: string;
//     created_at: string;
//     categoria: { nombre: string };
//   }>;
// }

// interface Payload {
//   nombre: string;
//   contrasena: string;
//   id_autorizador: string;
//   email: string;
//   id_sector: number;
//   id_posicion: number;
//   iB1: string;
//   iB2: string;
//   iB3: string;
//   iB4: string;
//   iB5: string;
// }



async function createUser(formData) {
  'use server'
  const supabase = await createAdminClient()
  const supa = await createClient()
  const payload = Object.fromEntries(formData)
  const { nombre, contrasena, id_autorizador, mail, sector, posicion, iB1, iB2, iB3, iB4, iB5 } = payload

  const { data, error } = await supabase.auth.admin.createUser({
    email: mail,
    password: contrasena,

    email_confirm: true // Usuario ya confirmado automáticamente
  })

  if (error) {
    console.error('Error completo:', error)
  } else {
    const id = data.user.id
    const mail = data.user.email
    const { dat, error } = await supa
      .from("users")
      .insert([
        {
          id: id,
          nombre: nombre,
          correo: mail,
          id_autorizador: id_autorizador ?? null,
          id_sector: sector,
          id_posicion: posicion,
          iB1: iB1,
          iB2: iB2,
          iB3: iB3,
          iB4: iB4,
          iB5: iB5,
        },
      ]);

    if (error) {
      console.error('Error al crear el usuario:', error)
      return
    } else {
      // console.log('Usuario creado:', dat)
    }
    // console.log('Usuario creado:', data)
    // El usuario necesitará confirmar su email antes de poder iniciar sesión
  }
  revalidatePath('/ajustes')
  redirect('/ajustes')
}


async function getSectores() {
  try {
    const sectores = await prisma.sector.findMany({
      orderBy: {
        created_at: 'asc' // Más recientes primero
      }
    })

    // Serializar la fecha created_at
    const serializedSectores = sectores.map(sector => ({
      ...sector,
      created_at: sector.created_at.toISOString() // Date → String
    }))

    return serializedSectores

  } catch (error) {
    console.error('Error obteniendo sectores:', error)
    return [] // Array vacío en caso de error
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
    })

    // Serializar la fecha created_at
    const serializedPosiciones = posiciones.map(posicion => ({
      ...posicion,
      created_at: posicion.created_at.toISOString() // Date → String
    }))

    return serializedPosiciones

  } catch (error) {
    console.error('Error obteniendo posiciones:', error)
    return [] // Array vacío en caso de error
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
    })

    // Serializar la fecha created_at
    const serializedCategorias = categorias.map(categoria => ({
      ...categoria,
      created_at: categoria.created_at.toISOString() // Date → String
    }))

    return serializedCategorias

  } catch (error) {
    console.error('Error obteniendo categorias:', error)
    return [] // Array vacío en caso de error
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
    })

    // Serializar la fecha created_at
    const serializedSubcategorias = subcategorias.map(subcategoria => ({
      ...subcategoria,
      created_at: subcategoria.created_at.toISOString() // Date → String
    }))

    return serializedSubcategorias

  } catch (error) {
    console.error('Error obteniendo subcategorias:', error)
    return [] // Array vacío en caso de error
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

// async function getUsuariosComplete(): Promise<SerializedUser[]> {
//   try {
//     const users = await prisma.users.findMany({
//       take: 10,
//       include: {
//         sector: true,
//         posicion: true,
//         autorizador: {
//           select: {
//             id: true,
//             username: true,
//             correo: true
//           }
//         },
//         tickets: {
//           take: 5,
//           orderBy: {
//             created_at: 'desc'
//           },
//           select: {
//             id: true,
//             descripcion: true,
//             created_at: true,
//             categoria: {
//               select: {
//                 nombre: true
//               }
//             }
//           }
//         }
//       },
//       orderBy: {
//         created_at: 'desc'
//       }
//     })

//     const serializedUsers: any[] = users.map((u) => ({
//       id: u.id,
//       username: u.username,
//       correo: u.correo,
//       id_sector: u.id_sector,
//       id_posicion: u.id_posicion,
//       id_autorizador: u.id_autorizador,
//       created_at: u.created_at.toISOString(),

//       sector: u.sector
//         ? {
//           id: u.sector.id,
//           nombre: u.sector.nombre,
//           created_at: u.sector.created_at.toISOString(),
//         }
//         : null,

//       posicion: u.posicion
//         ? {
//           id: u.posicion.id,
//           nombre: u.posicion.nombre,
//           created_at: u.posicion.created_at.toISOString(),
//         }
//         : null,

//       autorizador: u.autorizador
//         ? { id: u.autorizador.id, username: u.autorizador.username, correo: u.autorizador.correo }
//         : null,

//       tickets: u.tickets.map((t) => ({
//         id: t.id,
//         descripcion: t.descripcion,
//         created_at: t.created_at.toISOString(),
//         categoria: { nombre: t.categoria?.nombre },
//       })),
//     }));

//     return serializedUsers

//   } catch (error) {
//     console.error('Error obteniendo usuarios completos:', error)
//     throw error
//   }
// }

export async function getUsuariosComplete() {
  try {
    const [
      users,
      sectoresRaw,
      posicionesRaw,
      // Si tenés bandera `es_autorizador` úsala; si no, quitá el `where` para traer todos los usuarios como candidatos
      autorizadoresRaw,
    ] = await Promise.all([
      prisma.users.findMany({
        take: 10,
        include: {
          sector: { select: { id: true, nombre: true, created_at: true } },
          posicion: { select: { id: true, nombre: true, created_at: true } },
          autorizador: { select: { id: true, nombre: true, correo: true } }, // self-relación
          tickets: {
            take: 5,
            orderBy: { created_at: "desc" },
            select: {
              id: true,
              descripcion: true,
              created_at: true,
              categoria: { select: { nombre: true } },
            },
          },
        },
        orderBy: { created_at: "desc" },
      }),
      // Ajustá nombres de modelos según tu schema.prisma: Sector/Sectores, Posicion/Posiciones
      prisma.sector.findMany({ orderBy: { nombre: "asc" } }),
      prisma.posicion.findMany({ orderBy: { nombre: "asc" } }),
      prisma.users.findMany({
        select: { id: true, nombre: true, correo: true },
        orderBy: { nombre: "asc" },
      }),
    ]);

    const usuarios = users.map((u) => ({
      id: u.id,
      nombre: u.nombre,
      correo: u.correo,
      id_sector: u.id_sector,
      id_posicion: u.id_posicion,
      id_autorizador: u.id_autorizador,
      created_at: u.created_at.toISOString(),
      sector: u.sector
        ? {
          id: u.sector.id,
          nombre: u.sector.nombre,
        }
        : null,
      posicion: u.posicion
        ? {
          id: u.posicion.id,
          nombre: u.posicion.nombre,
        }
        : null,
      autorizador: u.autorizador
        ? { id: u.autorizador.id, nombre: u.autorizador.nombre, correo: u.autorizador.correo }
        : null,
      tickets: u.tickets.map((t) => ({
        id: t.id,
        descripcion: t.descripcion,
        created_at: t.created_at.toISOString(),
        categoria: t.categoria ? { nombre: t.categoria.nombre } : null,
      })),
    }));

    const sectores = sectoresRaw.map((s) => ({
      id: s.id,
      nombre: s.nombre,
      created_at: s.created_at.toISOString(),
    }));

    const posiciones = posicionesRaw.map((p) => ({
      id: p.id,
      nombre: p.nombre,
      created_at: p.created_at.toISOString(),
    }));

    const autorizadores = autorizadoresRaw.map((a) => ({
      id: a.id,
      nombre: a.nombre,
      correo: a.correo,
    }));

    return { usuarios, sectores, posiciones, autorizadores };
  } catch (error) {
    console.error("Error obteniendo usuarios + catálogos:", error);
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
      createUser={createUser}
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