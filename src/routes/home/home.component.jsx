import Hero from "../../components/home/hero/hero.component";
import Directory from "../../components/shared/directory/directory.component";
import ProductsFocus from "../../components/home/products-focus/products-focus.component";
import CompanyFocus from "../../components/shared/company-focus/company-focus.component";
import ErrorBoundary from "../../components/shared/error-boundary/error-boundary.component";

import { MainHome } from "./home.styles";

const Home = () => {
  return (
    <MainHome className="main">
      <ErrorBoundary>
        <Hero />
        <Directory parent="home" />
        <ProductsFocus />
        <CompanyFocus />
      </ErrorBoundary>
    </MainHome>
  );
};

export default Home;
