import Hero from "../../components/home/hero/hero.component";
import Directory from "../../components/shared/directory/directory.component";
import ProductsFocus from "../../components/home/products-focus/products-focus.component";
import CompanyFocus from "../../components/shared/company-focus/company-focus.component";

const Home = () => {
  return (
    <>
      <Hero />
      <Directory />
      <ProductsFocus />
      <CompanyFocus />
    </>
  );
};

export default Home;
