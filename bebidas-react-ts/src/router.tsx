import {BrowserRouter, Routes, Route} from "react-router-dom";
import IndexPage from "./views/IndexPage.tsx";
import FavoritePage from "./views/FavoritePage.tsx";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage/>}/>
                <Route path="/favoritos" element={<FavoritePage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;