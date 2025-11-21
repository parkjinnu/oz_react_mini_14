import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout";
import App from "./App";
import MovieDetail from "./assets/MovieDetail";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Layout />}>
        
        
        <Route index element={<App />} />
               <Route path="details" element={<MovieDetail />} />
                    </Route>
                       </Routes>
                          </BrowserRouter>
);

