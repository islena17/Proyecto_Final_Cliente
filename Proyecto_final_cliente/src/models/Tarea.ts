export interface Tarea {
  id: string;
  nombre: string;
  titulo: string;
  descripcion: string;
  estado: string;
  completada: boolean;
  fechaCreacion: Date;
  fechaLimite: Date;
}