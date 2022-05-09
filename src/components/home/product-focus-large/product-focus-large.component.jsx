const ProductFocusLarge = ({ name, imageUrl, description, route }) => {
  const { desktop, tablet, mobile } = imageUrl;
  return (
    <div>
      <div className="image-container">
        <img src={desktop} alt={name} />
      </div>
    </div>
  );
};
// TODO:
export default ProductFocusLarge;
