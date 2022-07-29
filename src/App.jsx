import { BrowserRouter, Routes, Route } from "react-router-dom";
//import  'bootstrap/dist/css/bootstrap.min.css' ;
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
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<SearcherNewsPage />} />
          <Route path="/buscador" element={<SearcherNewsPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </main>
    <MyFooter />
    </>
  );
  // return (
  //   <>
  //   <MyHeader />
  //   <main role="main">
  //     <BrowserRouter basename="NewsSearchEngine">
  //       <Routes>
  //         <Route path="/" element={<SearcherNewsPage />} />
  //         <Route path="/buscador" element={<SearcherNewsPage />} />
  //         <Route path="*" element={<Error404 />} />
  //       </Routes>
  //     </BrowserRouter>
  //   </main>
  //   <MyFooter />
  //   </>
  // );
}

export default App;
