import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import MyHeader from "./components/general/MyHeader";
import MyFooter from "./components/general/MyFooter";
import SearcherNewsPage from "./pages/SearcherNewsPage";
import Error404 from "./pages/Error404";

function App() {
  return (
    <>
    <MyHeader />
    <main role="main">
      <BrowserRouter basename='/NewsSearchEngine'>  {/* agregar basename={'/NewsSearchEngine'}  para subir en github-pages */}
        <Routes >
          <Route path="/" element={<SearcherNewsPage />} />
          <Route path="home" element={<SearcherNewsPage />}/>
          <Route path="buscador" element={<SearcherNewsPage />} />
          <Route path="*" element={<Error404 />}></Route>             
        </Routes>
      </BrowserRouter>
    </main>
    <MyFooter />
    </>
  );
}

export default App;
