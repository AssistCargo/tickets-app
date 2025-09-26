-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "public"."categoria" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nombre" TEXT,
    "encargado" INTEGER NOT NULL,

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."estados" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nombre" TEXT,

    CONSTRAINT "estados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."posicion" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nombre" TEXT,

    CONSTRAINT "posicion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."prioridad" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nombre" TEXT,

    CONSTRAINT "prioridad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."rol" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nombre" TEXT,

    CONSTRAINT "rol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."sector" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nombre" TEXT,

    CONSTRAINT "sector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."sub_categorias" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nombre" TEXT,
    "id_categorias" INTEGER,

    CONSTRAINT "sub_categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ticket" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_user" TEXT,
    "id_categoria" INTEGER,
    "id_subcategoria" INTEGER,
    "telefono" TEXT,
    "descripcion" TEXT,
    "id_prioridad" INTEGER,
    "id_sector" INTEGER,
    "valor" TEXT,
    "link_art" TEXT,
    "id_estado" INTEGER,
    "fecha" VARCHAR,

    CONSTRAINT "ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT,
    "nombre" TEXT NOT NULL,
    "correo" TEXT,
    "id_sector" INTEGER,
    "id_posicion" INTEGER,
    "id_autorizador" TEXT,
    "rol" TEXT DEFAULT 'user',
    "telefono" TEXT,
    "iB1" TEXT,
    "iB2" TEXT,
    "iB3" TEXT,
    "iB4" TEXT,
    "iB5" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "public"."users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_correo_key" ON "public"."users"("correo");

-- AddForeignKey
ALTER TABLE "public"."sub_categorias" ADD CONSTRAINT "sub_categorias_id_categorias_fkey" FOREIGN KEY ("id_categorias") REFERENCES "public"."categoria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ticket" ADD CONSTRAINT "ticket_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "public"."categoria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ticket" ADD CONSTRAINT "ticket_id_estado_fkey" FOREIGN KEY ("id_estado") REFERENCES "public"."estados"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ticket" ADD CONSTRAINT "ticket_id_prioridad_fkey" FOREIGN KEY ("id_prioridad") REFERENCES "public"."prioridad"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ticket" ADD CONSTRAINT "ticket_id_sector_fkey" FOREIGN KEY ("id_sector") REFERENCES "public"."sector"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ticket" ADD CONSTRAINT "ticket_id_subcategoria_fkey" FOREIGN KEY ("id_subcategoria") REFERENCES "public"."sub_categorias"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ticket" ADD CONSTRAINT "ticket_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."users" ADD CONSTRAINT "users_id_autorizador_fkey" FOREIGN KEY ("id_autorizador") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."users" ADD CONSTRAINT "users_id_posicion_fkey" FOREIGN KEY ("id_posicion") REFERENCES "public"."posicion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."users" ADD CONSTRAINT "users_id_sector_fkey" FOREIGN KEY ("id_sector") REFERENCES "public"."sector"("id") ON DELETE SET NULL ON UPDATE CASCADE;

