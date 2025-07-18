import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./routes/main/main";
import Categories from "./routes/categories/categories";
import Services from "./routes/services/services";
import GosPresident from "./routes/gos-president/gos-president";
import Queue from "./routes/queue/queue";
import Search from "./routes/search/search";
import Home from "./routes/home/home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />}/>
            <Route path="/categories" element={<Categories />} />
            <Route path="/services/:id" element={<Services />} />
            <Route path="/gos-president" element={<GosPresident />} />
            <Route path="/queue" element={<Queue />} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
