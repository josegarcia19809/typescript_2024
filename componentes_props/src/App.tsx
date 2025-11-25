// App.tsx


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CafeList from './components/RestAPI_Cafes/CafeList.tsx';
import CafeForm from './components/RestAPI_Cafes/CafeForm.tsx';
import CafeDetail from './components/RestAPI_Cafes/CafeDetail.tsx';


export default function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-50">
                <Routes>
                    <Route path="/" element={<CafeList />} />
                    <Route path="/crear" element={<CafeForm />} />
                    <Route path="/:id" element={<CafeDetail />} />
                    <Route path="/:id/editar" element={<CafeForm />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
