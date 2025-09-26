"use client"

import { useState } from "react"
import Header from "@/components/header"
import { Search, Plus, Pencil } from 'lucide-react'
import { useRouter } from "next/navigation"
import Modal from "@/components/modal"

export function AjustesComponent({
  usuarios,
  sectores,
  posiciones,
  categorias,
  subcategorias,
  createSector,
  updateSector,
  createPosicion,
  updatePosicion,
  createCategoria,
  updateCategoria,
  createSubcategoria,
  updateSubcategoria,
  createUser,
}) {
  const users = usuarios
  const sectorsList = sectores
  const positionsList = posiciones
  const categoriesList = categorias
  const subcategoriasList = subcategorias
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("usuarios")

  // State for Sectors and Positions lists
  // const [sectorsList, setSectorsList] = useState([
  //   { id: "s1", name: "Sistemas" },
  //   { id: "s2", name: "Operación" },
  //   { id: "s3", name: "RRHH" },
  //   { id: "s4", name: "Comercial" },
  //   { id: "s5", name: "Adm&Fin" },
  //   { id: "s6", name: "Dirección" },
  // ])

  // const [positionsList, setPositionsList] = useState([
  //   { id: "p1", name: "CEO" },
  //   { id: "p2", name: "CEO Assistcargo" },
  //   { id: "p3", name: "CFO" },
  //   { id: "p4", name: "Director Operación" },
  //   { id: "p5", name: "Gerente Aplicaciones" },
  //   { id: "p6", name: "Gerente Comercial" },
  //   { id: "p7", name: "Gerente Operaciones" },
  //   { id: "p8", name: "Gerente RRHH" },
  //   { id: "p9", name: "Gerente Sistemas" },
  //   { id: "p10", name: "Gerente Técnico Comercial" },
  //   { id: "p11", name: "Jefe Administración" },
  //   { id: "p12", name: "Jefe Custodia Móvil" },
  //   { id: "p13", name: "Jefe Dispositivos Móviles" },
  //   { id: "p14", name: "Jefe Operaciones" },
  //   { id: "p15", name: "Jefe SAC" },
  //   { id: "p16", name: "Jefe Técnico y Calidad" },
  //   { id: "p17", name: "Líder Operaciones" },
  //   { id: "p18", name: "Operador de Cuenta" },
  //   { id: "p19", name: "Operador de Monitoreo" },
  //   { id: "p20", name: "Presidente" },
  //   { id: "p21", name: "Responsable área integraciones GPS y Gestión de Datos Operaciones" },
  //   { id: "p22", name: "Supervisor" },
  // ])

  // New states for Categories and Subcategories lists
  // const [categoriesList, setCategoriesList] = useState([
  //   { id: "c1", name: "Incidencia" },
  //   { id: "c2", name: "Compra" },
  // ])

  // const [subcategoriesList, setSubcategoriesList] = useState([
  //   { id: "sc1", name: "Insumos", categoryId: "c2" },
  //   { id: "sc2", name: "Artículos", categoryId: "c2" },
  //   { id: "sc3", name: "Otros", categoryId: "c2" },
  // ])

  // Modal states
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false)
  const [isAddEditUserModalOpen, setIsAddEditUserModalOpen] = useState(false)
  const [modalType, setModalType] = useState("") // 'sector', 'position', 'category', or 'subcategory'
  const [editingItem, setEditingItem] = useState(null) // Item being edited (null for adding)
  const [newItemName, setNewItemName] = useState("")
  const [newParentCategoryId, setNewParentCategoryId] = useState("") // For subcategories

  const handleEditUser = (userId) => {
    router.push(`/ajustes/usuarios/${userId}`)
  }

  function emptyToNull(v) {
    const s = (v ?? "").toString().trim();
    return s === "" ? null : s;
  }

  function isEmail(s) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
  }


  // Functions for general list management (Sectors, Positions, Categories, Subcategories)
  const openAddModal = (type) => {
    setModalType(type)
    setEditingItem(null)
    setNewItemName("")
    setNewParentCategoryId("") // Reset for new item
    setIsAddEditModalOpen(true)
  }

  const openEditModal = (type, item) => {
    setModalType(type)
    setEditingItem(item.id)
    setNewItemName(item.nombre)
    setNewParentCategoryId(item.categoryId || "") // Set parent category if exists
    setIsAddEditModalOpen(true)
  }

  const closeModal = () => {
    setIsAddEditModalOpen(false)
    setModalType("")
    setEditingItem(null)
    setNewItemName("")
    setNewParentCategoryId("")
  }
  const openUsuarioModal = (type) => {
    setModalType(type)
    setEditingItem(null)
    setNewItemName("")
    setIsAddEditUserModalOpen(true)
  }

  const closeUserModal = () => {
    setIsAddEditUserModalOpen(false)
    setModalType("")
    setEditingItem(null)
    setNewItemName("")
  }

  const handleSaveItem = () => {
    if (!newItemName.trim()) return // Don't save empty names

    if (modalType === "sector") {
      if (editingItem) {
        updateSector(editingItem, newItemName) // Call server action to update sector
      } else {
        createSector(newItemName) // Call server action to create sector
      }
    } else if (modalType === "position") {
      if (editingItem) {
        updatePosicion(editingItem, newItemName) // Call server action to update position
      } else {
        createPosicion(newItemName) // Call server action to create position
      }
    } else if (modalType === "category") {
      if (editingItem) {
        updateCategoria(editingItem, newItemName)
      } else {
        createCategoria(newItemName)
      }
    } else if (modalType === "subcategory") {
      if (!newParentCategoryId.trim()) {
        alert("Por favor, introduce el ID de la Categoría Padre para la subcategoría.")
        return
      }
      if (editingItem) {
        updateSubcategoria(editingItem, newItemName, newParentCategoryId)
      } else {
        createSubcategoria(newItemName, newParentCategoryId)
      }
    }
    closeModal()
  }


  // Helper to get category name from ID
  const getCategoryName = (categoryId) => {
    const category = categoriesList.find(c => c.id === categoryId);
    return category ? category.nombre : "Desconocida";
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Header />
      <div
        style={{
          flex: 1,
          padding: "24px",
          paddingTop: "80px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", color: "#333333" }}>
          Ajustes del Sistema
        </h1>

        {/* Tabs for Ajustes */}
        <div style={{ borderBottom: "1px solid #e0e0e0", marginBottom: "24px", display: "flex" }}>
          <div className="tabs-list">
            <button
              className={`tabs-trigger ${activeTab === "general" ? "active" : ""}`}
              onClick={() => setActiveTab("general")}
            >
              General
            </button>
            <button
              className={`tabs-trigger ${activeTab === "tickets" ? "active" : ""}`}
              onClick={() => setActiveTab("tickets")}
            >
              Tickets
            </button>
            <button
              className={`tabs-trigger ${activeTab === "usuarios" ? "active" : ""}`}
              onClick={() => setActiveTab("usuarios")}
            >
              Usuarios
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="card" style={{ padding: "24px" }}>
          {activeTab === "general" && (
            <div>
              <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "24px" }}>Configuración General</h2>

              {/* Sectors Management */}
              <div style={{ marginBottom: "32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "600" }}>Sectores</h3>
                  <button
                    className="button button-primary"
                    onClick={() => openAddModal("sector")}
                    style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px" }}
                  >
                    <Plus style={{ height: "16px", width: "16px" }} />
                    Agregar Sector
                  </button>
                </div>
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nombre del Sector</th>
                        <th style={{ width: "120px" }}>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sectorsList.length === 0 ? (
                        <tr>
                          <td colSpan={2} className="table-empty-message">
                            No hay sectores disponibles.
                          </td>
                        </tr>
                      ) : (
                        sectorsList.map((sector) => (
                          <tr key={sector.id}>
                            <td>{sector.nombre}</td>
                            <td>
                              <div style={{ display: "flex", gap: "8px" }}>
                                <button
                                  className="button button-ghost"
                                  onClick={() => openEditModal("sector", sector)}
                                  style={{ padding: "6px", minWidth: "unset" }}
                                  aria-label={`Editar ${sector.name}`}
                                >
                                  <Pencil style={{ height: "16px", width: "16px" }} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Positions Management */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "600" }}>Posiciones</h3>
                  <button
                    className="button button-primary"
                    onClick={() => openAddModal("position")}
                    style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px" }}
                  >
                    <Plus style={{ height: "16px", width: "16px" }} />
                    Agregar Posición
                  </button>
                </div>
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nombre de la Posición</th>
                        <th style={{ width: "120px" }}>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {positionsList.length === 0 ? (
                        <tr>
                          <td colSpan={2} className="table-empty-message">
                            No hay posiciones disponibles.
                          </td>
                        </tr>
                      ) : (
                        positionsList.map((position) => (
                          <tr key={position.id}>
                            <td>{position.nombre}</td>
                            <td>
                              <div style={{ display: "flex", gap: "8px" }}>
                                <button
                                  className="button button-ghost"
                                  onClick={() => openEditModal("position", position)}
                                  style={{ padding: "6px", minWidth: "unset" }}
                                  aria-label={`Editar ${position.name}`}
                                >
                                  <Pencil style={{ height: "16px", width: "16px" }} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "tickets" && (
            <div>
              <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "24px" }}>Configuración de Tickets</h2>

              {/* Categories Management */}
              <div style={{ marginBottom: "32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "600" }}>Categorías</h3>
                  <button
                    className="button button-primary"
                    onClick={() => openAddModal("category")}
                    style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px" }}
                  >
                    <Plus style={{ height: "16px", width: "16px" }} />
                    Agregar Categoría
                  </button>
                </div>
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nombre de la Categoría</th>
                        <th style={{ width: "120px" }}>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categoriesList.length === 0 ? (
                        <tr>
                          <td colSpan={2} className="table-empty-message">
                            No hay categorías disponibles.
                          </td>
                        </tr>
                      ) : (
                        categoriesList.map((category) => (
                          <tr key={category.id}>
                            <td>{category.nombre}</td>
                            <td>
                              <div style={{ display: "flex", gap: "8px" }}>
                                <button
                                  className="button button-ghost"
                                  onClick={() => openEditModal("category", category)}
                                  style={{ padding: "6px", minWidth: "unset" }}
                                  aria-label={`Editar ${category.name}`}
                                >
                                  <Pencil style={{ height: "16px", width: "16px" }} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Subcategories Management */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "600" }}>Subcategorías</h3>
                  <button
                    className="button button-primary"
                    onClick={() => openAddModal("subcategory")}
                    style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px" }}
                  >
                    <Plus style={{ height: "16px", width: "16px" }} />
                    Agregar Subcategoría
                  </button>
                </div>
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nombre de la Subcategoría</th>
                        <th>Categoría Padre</th>
                        <th style={{ width: "120px" }}>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subcategoriasList.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="table-empty-message">
                            No hay subcategorías disponibles.
                          </td>
                        </tr>
                      ) : (
                        subcategoriasList.map((subcategory) => (
                          <tr key={subcategory.id}>
                            <td>{subcategory.nombre}</td>
                            <td>{getCategoryName(subcategory.id_categorias)}</td> {/* Display parent category name */}
                            <td>
                              <div style={{ display: "flex", gap: "8px" }}>
                                <button
                                  className="button button-ghost"
                                  onClick={() => openEditModal("subcategory", subcategory)}
                                  style={{ padding: "6px", minWidth: "unset" }}
                                  aria-label={`Editar ${subcategory.name}`}
                                >
                                  <Pencil style={{ height: "16px", width: "16px" }} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "usuarios" && (
            <div>
              <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>Gestión de Usuarios</h2>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "16px" }}>
                <div style={{ position: "relative", flexGrow: 1, maxWidth: "300px" }}>
                  <input
                    type="text"
                    placeholder="Buscar usuario..."
                    className="input-field"
                    style={{ paddingRight: "40px", width: "100%", height: "36px" }}
                  />
                  <button
                    className="button button-ghost"
                    style={{ position: "absolute", right: "0", top: "0", height: "100%", padding: "0 8px" }}
                  >
                    <Search style={{ height: "16px", width: "16px" }} />
                  </button>
                </div>
                <button
                  className="button button-primary"
                  onClick={() => openUsuarioModal("addUser")}
                  style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px" }}
                >
                  <Plus style={{ height: "16px", width: "16px" }} />
                  Agregar Usuario
                </button>
              </div>

              <div className="table-container">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Sector</th>
                      <th>Puesto</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.usuarios.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="table-empty-message">
                          No hay usuarios disponibles.
                        </td>
                      </tr>
                    ) : (
                      users.usuarios.map((user) => (
                        <tr key={user.id}>
                          <td>{user.nombre}</td>
                          <td>{user.sector?.nombre}</td>
                          <td>{user.posicion?.nombre}</td>
                          <td>
                            <div style={{ display: "flex", gap: "8px" }}>
                              <button
                                className="button button-ghost"
                                onClick={() => handleEditUser(user.id)}
                                style={{ padding: "6px", minWidth: "unset" }}
                                aria-label={`Editar ${user.nombre}`}
                              >
                                <Pencil style={{ height: "16px", width: "16px" }} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Sector/Position/Category/Subcategory Modal */}
      <Modal
        isOpen={isAddEditModalOpen}
        onClose={closeModal}
        title={editingItem ? `Editar ${modalType === 'sector' ? 'Sector' : modalType === 'position' ? 'Posición' : modalType === 'category' ? 'Categoría' : 'Subcategoría'}` : `Agregar ${modalType === 'sector' ? 'Sector' : modalType === 'position' ? 'Posición' : modalType === 'category' ? 'Categoría' : 'Subcategoría'}`}
      >
        <form onSubmit={(e) => { e.preventDefault(); handleSaveItem(); }}>
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="itemName" style={{ display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "4px" }}>
              Nombre del {modalType === 'sector' ? 'Sector' : modalType === 'position' ? 'Posición' : modalType === 'category' ? 'Categoría' : 'Subcategoría'}
            </label>
            <input
              id="itemName"
              type="text"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              className="input-field"
              placeholder={`Introduce el nombre del ${modalType === 'sector' ? 'sector' : modalType === 'position' ? 'posición' : modalType === 'category' ? 'categoría' : 'subcategoría'}`}
              required
            />
          </div>
          {modalType === "subcategory" && (
            <div style={{ marginBottom: "16px" }}>
              <label htmlFor="parentCategoryId" style={{ display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "4px" }}>
                ID de Categoría Padre
              </label>
              <input
                id="parentCategoryId"
                type="text"
                value={newParentCategoryId}
                onChange={(e) => setNewParentCategoryId(e.target.value)}
                className="input-field"
                placeholder="Ej: c1 (Incidencia), c2 (Compra)"
                required
              />
              <p style={{ fontSize: "12px", color: "#757575", marginTop: "4px" }}>
                Para una mejor experiencia, este campo debería ser un selector de categorías existentes.
              </p>
            </div>
          )}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
            <button type="button" onClick={closeModal} className="button button-ghost">
              Cancelar
            </button>
            <button type="submit" className="button button-primary">
              Guardar
            </button>
          </div>
        </form>
      </Modal>
      <Modal
        isOpen={isAddEditUserModalOpen}
        onClose={closeModal}
        title={editingItem ? `Editar Usuario'}` : `Agregar Usuario`}
      >
        <form action={createUser}>
          <div className="grid grid-cols-[180px,1fr] gap-3 items-center">
            <label>Nombre</label>
            <input
              name="nombre"
              type="text"
              defaultValue={modalType === 'addUser' ? '' : (users?.nombre ?? '')}
              className="input-field"
              placeholder="Introduce el nombre del Usuario"
              required
            />
            <label>Contraseña</label>
            <input
              name="contrasena"
              type="password"
              defaultValue=""
              className="input-field"
              placeholder="Introduce la contraseña"
              required
            />
            <label>Mail</label>
            <input
              name="mail"
              type="text"
              defaultValue={modalType === 'addUser' ? '' : (users?.mail ?? '')}
              className="input-field"
              placeholder="Introduce el mail"
              required
            />
            <label>Sector</label>
            <select
              name="sector"
              defaultValue={modalType === "addUser" ? "" : (users?.id_sector ?? "")}
              className="input-field"
            >
              <option value="" disabled>
                Ingrese el sector
              </option>
              {sectorsList.map((sector) => (
                <option key={sector.id} value={sector.id}>
                  {sector.nombre}
                </option>
              ))}
            </select>
            <label>Posición</label>
            <select
              name="posicion"
              defaultValue={modalType === 'addUser' ? '' : (users?.posicion ?? '')}
              className="input-field"
            >
              <option value="" disabled>
                Ingrese la posición
              </option>
              {positionsList.map((position) => (
                <option key={position.id} value={position.id}>
                  {position.nombre}
                </option>
              ))}
            </select>
            <label>Informe BI</label>
            <input
              name="iB"
              type="text"
              defaultValue={modalType === 'addUser' ? '' : (users?.iB ?? '')}
              className="input-field"
              placeholder="Introduce el link del Informe BI"
            />
            <label>Informe BI I</label>
            <input
              name="iB1"
              type="text"
              defaultValue={modalType === 'addUser' ? '' : (users?.iB1 ?? '')}
              className="input-field"
              placeholder="Introduce el link del Informe BI"
            />
            <label>Informe BI II</label>
            <input
              name="iB2"
              type="text"
              defaultValue={modalType === 'addUser' ? '' : (users?.iB2 ?? '')}
              className="input-field"
              placeholder="Introduce el link del Informe BI"
            />
            <label>Informe BI III</label>
            <input
              name="iB3"
              type="text"
              defaultValue={modalType === 'addUser' ? '' : (users?.iB3 ?? '')}
              className="input-field"
              placeholder="Introduce el link del Informe BI"
            />
            <label>Informe BI IV</label>
            <input
              name="iB4"
              type="text"
              defaultValue={modalType === 'addUser' ? '' : (users?.iB4 ?? '')}
              className="input-field"
              placeholder="Introduce el link del Informe BI"
            />
            <label>Informe BI V</label>
            <input
              name="iB5"
              type="text"
              defaultValue={modalType === 'addUser' ? '' : (users?.iB5 ?? '')}
              className="input-field"
              placeholder="Introduce el link del Informe BI"
            />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
            <button type="button" onClick={closeUserModal} className="button button-ghost">
              Cancelar
            </button>
            <button type="submit" className="button button-primary">
              Guardar
            </button>
          </div>
        </form>
      </Modal>
    </div >
  )
}