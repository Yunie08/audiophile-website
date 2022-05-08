const ProductCta = ({ newProduct, name, description, slug }) => {
  return (
    <div className="product-cta-container">
      {newProduct && <div>New product</div>}
      <p>XX99 MARK II headphones</p>
      <h1>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </h1>
      <button>See product</button>
    </div>
  );
};

export default ProductCta;
