export interface Cafe {
    id?: number;
    nombre: string;
    tipo: string;
    precio: number;
    imagen: string;
}


export interface ApiResponse<T> {
    status: number;
    message: string;
    data: T | null;
    errors: Record<string, string> | null;
}