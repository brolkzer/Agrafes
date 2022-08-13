type similarProductProps = {
  similarProduct: any | object;
};

const SimilarProductDisplay = ({ similarProduct }: similarProductProps) => {
  const productRelocate = () => {
    window.location.href = `/Product?=${similarProduct._id}`;
  };

  return (
    <li
      className="similar-product-card"
      key={similarProduct._id}
      style={{ backgroundImage: `url("${similarProduct.img}")` }}
    >
      <div
        className="similar-product-card-desc"
        onClick={() => productRelocate()}
      >
        <p className="similar-product-card-desc-name">{similarProduct.nom}</p>
        <p className="similar-product-card-desc-description">
          {similarProduct.description.length > 200
            ? similarProduct.description.slice(0, 201) + " ..."
            : similarProduct.description}
        </p>
        <p className="similar-product-card-desc-price">
          {similarProduct.prix / 10000}€
        </p>
      </div>
    </li>
  );
};

export default SimilarProductDisplay;
