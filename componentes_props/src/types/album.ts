// src/types/album.ts
export interface AlbumDTO {
    id: number;
    titulo: string;
    lanzado: string; // el backend devuelve fecha en ISO string
    precio: number;
    genero: string;
}

export interface Album {
    id: number;
    titulo: string;
    lanzado: Date; // ya parseada a Date en el frontend
    precio: number;
    genero: string;
}