import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getById, deleteCafe } from '../../services/cafeService.ts';
import type { Cafe } from '../../types.ts';
import './CafeDetail.dark.css';

export default function CafeDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [cafe, setCafe] = useState<Cafe | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        getById(Number(id))
            .then((resp) => setCafe(resp.data as Cafe))
            .catch((err) => setError(err?.message || 'Error'))
            .finally(() => setLoading(false));
    }, [id]);

    const handleDelete = () => {
        if (!window.confirm("¿Eliminar este café?")) return;
        deleteCafe(Number(id))
            .then(() => navigate('/'))
            .catch(() => setError("Error al eliminar"));
    };

    if (loading) return <div className="cafe-detail-container">Cargando...</div>;
    if (error) return <div className="cafe-detail-container">{error}</div>;
    if (!cafe) return <div className="cafe-detail-container">No encontrado</div>;

    return (
        <div className="cafe-detail-container">
            <div className="cafe-detail-card">
                <img src={cafe.imagen} alt={cafe.nombre} className="cafe-detail-img" />

                <h2 className="cafe-detail-title">{cafe.nombre}</h2>
                <span className="cafe-detail-type">{cafe.tipo}</span>

                <p className="cafe-detail-price">${cafe.precio.toFixed(2)}</p>

                <div className="cafe-detail-actions">
                    <button
                        onClick={() => navigate(`/${cafe.id}/editar`)}
                        className="cafe-detail-btn cafe-detail-btn-edit"
                    >
                        ✏️ Editar
                    </button>

                    <button
                        onClick={handleDelete}
                        className="cafe-detail-btn cafe-detail-btn-delete"
                    >
                        🗑️ Eliminar
                    </button>

                    <button
                        onClick={() => navigate(-1)}
                        className="cafe-detail-btn cafe-detail-btn-back"
                    >
                        🔙 Volver
                    </button>
                </div>
            </div>
        </div>
    );
}
