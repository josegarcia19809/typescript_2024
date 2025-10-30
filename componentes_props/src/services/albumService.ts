// src/services/albumService.ts
import api from "../api/axiosConfig";
import type { AlbumDTO, Album } from "../types/album";

/**
 * Obtiene todos los álbumes desde GET /albums
 * Devuelve los datos convertidos a Album (lanzado -> Date)
 */
export async function fetchAlbums(signal?: AbortSignal): Promise<Album[]> {
    const response = await api.get<AlbumDTO[]>("/api/albums", { signal });
    const dtos = response.data ?? [];

    // convertir lanzado (string) a Date
    return dtos.map((d) => ({
        id: d.id,
        titulo: d.titulo,
        lanzado: new Date(d.lanzado),
        precio: d.precio,
        genero: d.genero,
    }));
}
