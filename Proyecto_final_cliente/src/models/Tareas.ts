export class Tarea{
        public id: string;
        public nombre: string;
        public titulo: string;
        public descripcion: string;
        public estado: string;
        public completada: boolean;
        public fechaCreacion: Date;
        public fechaLimite: Date;

    constructor(nombre: string, titulo: string, descripcion: string, fechaLimite: Date){
        this.id= crypto.randomUUID();
        this.titulo = titulo;
        this.nombre =nombre;
        this.descripcion = descripcion;
        this.estado = "pendiente";
        this.completada = false;
        this.fechaCreacion = new Date();
        this.fechaLimite = fechaLimite;

    }

    estaCompletada(): void{
        this.completada = true;
    }

    estadoProgreso(): void{
        this.estado="En Progreso";
    }

    estadoCompletada(): void{
        this.estado="Completada";
    }
}