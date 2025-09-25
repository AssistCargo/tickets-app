export default function Loading() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center flex-col gap-8 bg-gray-50">
      {/* Spinner con sombra y colores más fuertes */}
      <div className="relative">
        <div
          className="animate-spin rounded-full h-24 w-24 border-8 border-gray-300 border-t-blue-600 border-r-blue-600 shadow-lg"
          role="status"
          aria-label="Cargando"
        ></div>
      </div>

      {/* Texto con animación */}
      <div className="text-center animate-pulse">
        <p className="text-gray-800 text-2xl font-semibold">Cargando...</p>
        <p className="text-gray-600 text-base mt-2">Por favor espere un momento</p>
      </div>

      {/* Indicador adicional */}
      <div className="flex space-x-1">
        <div className="h-2 w-2 bg-blue-600 rounded-full animate-bounce"></div>
        <div className="h-2 w-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="h-2 w-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
}