import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {getAll} from '../../services/cafeService.ts';
import type {Cafe} from '../../types.ts';
import './CafeList.css';

export default function CafeList() {
    const [cafes, setCafes] = useState<Cafe[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        setLoading(true);
        getAll()
            .then((resp) => {
                setCafes(resp.data ?? []);
            })
            .catch((err) => {
                setError(err?.message || 'Error desconocido');
            })
            .finally(() => setLoading(false));
    }, []);


    if (loading) return <div>🔄 Cargando cafés...</div>;
    if (error) return <div>❌ {error}</div>;


    return (
        <div className="cafe-list-container">
            <div className="cafe-list-header">
                <h2 className="cafe-title">Cafés</h2>
                <Link to="/crear" className="cafe-btn-new">
                    <span className="float-cta">☕</span> Nuevo
                </Link>
            </div>

            <ul className="cafe-grid">
                {cafes.map((c, idx) => (
                    <li key={c.id} className="cafe-card" style={{ animationDelay: `${idx * 60}ms` }}>
                        <img src={c.imagen} alt={c.nombre} className="cafe-img" />
                        <div className="cafe-top">
                            <div>
                                <h3 className="cafe-name">{c.nombre}</h3>
                                <div className="cafe-type"><span className="cafe-badge">{c.tipo}</span></div>
                            </div>
                            <div className="cafe-price">${c.precio.toFixed(2)}</div>
                        </div>

                        <div className="cafe-actions">
                            <Link to={`/${c.id}`} className="cafe-btn cafe-btn-view">Ver</Link>
                            <Link to={`/${c.id}/editar`} className="cafe-btn cafe-btn-edit">Editar</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}