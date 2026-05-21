// 📚 LEARN: Separation of Concerns (SoC) - Separamos la lógica de datos de la UI.
// ✅ BEST PRACTICE: Los servicios del cliente simulan peticiones reales y manejan almacenamiento local de forma segura.

export interface IdeaInput {
  nombre: string;
  correo: string;
  estamento: string;
  opinion: string;
}

export interface ServiceResult {
  success: boolean;
  error?: string;
}

/**
 * Servicio para gestionar las ideas y propuestas del lado del cliente.
 * Guarda las ideas en localStorage para dar persistencia interactiva en GitHub Pages.
 */
export async function submitIdeaClient(data: IdeaInput): Promise<ServiceResult> {
  try {
    // 🚧 SIMPLIFIED: Simulamos un retraso de red de 1 segundo para mostrar el estado Loading en la UI
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Validación básica en cliente
    if (!data.nombre || !data.correo || !data.estamento || !data.opinion) {
      return { success: false, error: "Todos los campos son requeridos." };
    }

    // Guardado local para interacción real en el navegador
    const storedIdeas = localStorage.getItem("ped_propuestas");
    const ideasList = storedIdeas ? JSON.parse(storedIdeas) : [];
    
    ideasList.push({
      ...data,
      id: Date.now(),
      fecha: new Date().toISOString(),
    });

    localStorage.setItem("ped_propuestas", JSON.stringify(ideasList));

    console.log("✅ Propuesta guardada localmente de forma interactiva:", data);
    return { success: true };
  } catch (error) {
    console.error("Error en el servicio de ideas:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Error inesperado al guardar la propuesta." 
    };
  }
}
