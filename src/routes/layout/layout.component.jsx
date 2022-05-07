import { Outlet } from "react-router-dom";
import Navigation from "../navigation/navigation.component";
import Footer from "../../components/footer/footer.component";

const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
