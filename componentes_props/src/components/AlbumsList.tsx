// src/components/AlbumsList.tsx
import {type JSX, useEffect, useState} from "react";
import type { Album } from "../types/album";
import { fetchAlbums } from "../services/albumService";
import "../styles/AlbumsList.css"; // 👈 Importa el CSS moderno

export default function AlbumsList(): JSX.Element {
    const [albums, setAlbums] = useState<Album[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        async function load() {
            try {
                setLoading(true);
                setError(null);
                const data = await fetchAlbums(controller.signal);
                setAlbums(data);
            } catch (err: unknown) {
                if ((err as any)?.name === "CanceledError" || (err as any)?.name === "AbortError") {
                    return;
                }
                const message =
                    (err as any)?.response?.data?.message ||
                    (err as any)?.message ||
                    "Error desconocido al cargar álbumes";
                setError(String(message));
            } finally {
                setLoading(false);
            }
        }

        load();
        return () => controller.abort();
    }, []);

    if (loading) return <p className="loading">⏳ Cargando álbumes…</p>;
    if (error) return <p className="error">❌ Error al cargar: {error}</p>;
    if (albums.length === 0) return <p className="empty">No hay álbumes disponibles 🎧</p>;

    return (
        <div className="albums-container">
            <h2 className="albums-title">🎶 Lista de Álbumes</h2>
            <table className="albums-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Lanzado</th>
                    <th>Precio</th>
                    <th>Género</th>
                </tr>
                </thead>
                <tbody>
                {albums.map((a) => (
                    <tr key={a.id}>
                        <td>{a.id}</td>
                        <td>{a.titulo}</td>
                        <td>{a.lanzado.toLocaleDateString()}</td>
                        <td>${a.precio.toFixed(2)}</td>
                        <td>{a.genero}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
