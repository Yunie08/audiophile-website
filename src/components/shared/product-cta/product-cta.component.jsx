import Button from "../button/button.component";

import { BaseCta, HeroCta, MinimalCta, MainCta } from "./product-cta.styles";

/* CTA types:
base, hero, homeMain, minimal
*/

export const CTA_TYPES_CLASSES = {
  base: "base",
  hero: "hero",
  main: "main",
  minimal: "minimal",
};

const getCta = (ctaType = CTA_TYPES_CLASSES.base) =>
  ({
    [CTA_TYPES_CLASSES.base]: BaseCta,
    [CTA_TYPES_CLASSES.hero]: HeroCta,
    [CTA_TYPES_CLASSES.main]: MainCta,
    [CTA_TYPES_CLASSES.minimal]: MinimalCta,
  }[ctaType]);

const ProductCta = ({
  product: { isNew, name, description, route },
  ctaType,
  buttonType,
}) => {
  const CustomCta = getCta(ctaType);
  return (
    <CustomCta>
      {!ctaType === "minimal" && isNew && <div>New product</div>}
      <span>{name}</span>
      {ctaType !== "minimal" &&
        (ctaType === "hero" ? <h1>{description}</h1> : <p>{description}</p>)}

      <Button buttonType={buttonType}>See product</Button>
    </CustomCta>
  );
};

export default ProductCta;
