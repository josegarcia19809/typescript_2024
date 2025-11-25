import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type {Cafe} from '../../types.ts';
import { createCafe, getById, updateCafe } from '../../services/cafeService.ts';
import './CafeForm.dark.css';

export default function CafeForm() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const isEdit = Boolean(id);


    const [form, setForm] = useState<Cafe>({ nombre: '', tipo: '', precio: 0, imagen: '' });
    const [errors, setErrors] = useState<Record<string, string> | null>(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (isEdit && id) {
            setLoading(true);
            getById(Number(id))
                .then((resp) => setForm(resp.data as Cafe))
                .catch((err) => setErrors(err?.errors ?? { general: err?.message }))
                .finally(() => setLoading(false));
        }
    }, [id, isEdit]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: name === 'precio' ? Number(value) : value }));
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrors(null);


        const action = isEdit ? updateCafe(Number(id), form) : createCafe(form);


        action
            .then(() => navigate('/'))
            .catch((err) => setErrors(err?.errors ?? { general: err?.message }))
            .finally(() => setLoading(false));
    };


    return (
        <div className="cafe-form-container">
            <div className="cafe-form-card">
                <h2 className="cafe-form-title">{isEdit ? 'Editar Café' : 'Nuevo Café'}</h2>

                {errors && (
                    <div className="form-errors">
                        {Object.entries(errors).map(([k,v]) => <div key={k}><strong>{k}:</strong> {v}</div>)}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <label className="cafe-label">Nombre</label>
                        <input name="nombre" value={form.nombre} onChange={handleChange} className="cafe-input" />
                    </div>

                    <div className="form-row">
                        <label className="cafe-label">Tipo</label>
                        <input name="tipo" value={form.tipo} onChange={handleChange} className="cafe-input" />
                    </div>

                    <div className="form-row">
                        <label className="cafe-label">Precio</label>
                        <input name="precio" type="number" step="0.01" value={form.precio} onChange={handleChange} className="cafe-input" />
                    </div>

                    <div className="form-row">
                        <label className="cafe-label">Imagen (URL)</label>
                        <input name="imagen" value={form.imagen} onChange={handleChange} className="cafe-input" />
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? 'Guardando...' : 'Guardar'}
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );

}