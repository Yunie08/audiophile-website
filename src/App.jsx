import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import ScrollToTop from "./components/shared/scroll-to-top/scroll-to-top.component";
import Layout from "./routes/layout/layout.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";

const App = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
};

export default App;
