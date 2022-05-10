import Hero from "../../components/home/hero/hero.component";
import Directory from "../../components/shared/directory/directory.component";
import ProductCta from "../../components/shared/product-cta/product-cta.component";
import ProductsFocus from "../../components/home/products-focus/products-focus.component";
import { LayoutContainer } from "../../utils/style/layout";

const Home = () => {
  return (
    <>
      <Hero />
      <Directory />
      <ProductsFocus />
    </>
  );
};

export default Home;
