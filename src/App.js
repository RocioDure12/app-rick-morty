import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import SearchModeloSimple from "./components/SearchModeloSimple";
import SearchMComplejo from "./components/SearchMComplejo";
import { baseUrl, apiKey, capitalizar } from "./components/auxiliares/funcionesAuxiliares";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/busqueda" element={<SearchModeloSimple />}></Route>
        <Route path="redireccionado/:nombre" element={<SearchMComplejo />}></Route>

      </Routes>
    </BrowserRouter>
  )
}
export default App;
