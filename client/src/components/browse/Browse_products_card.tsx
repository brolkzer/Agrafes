const Browse_products_card = ({ product }: any) => {
  const productRelocate = (id: string) => {
    window.location.href = `/Product?=${id}`;
  };

  return (
    <li
      className="browsePage-products-card"
      style={{ backgroundImage: `url("${product.img}")` }}
    >
      <div
        className="browsePage-products-card-desc"
        onClick={() => productRelocate(product._id)}
      >
        <p className="browsePage-products-card-desc-name">{product.nom}</p>
        <p className="browsePage-products-card-desc-description">
          {product.description}
        </p>
        <p className="browsePage-products-card-desc-price">
          {product.prix / 10000}€
        </p>
      </div>
    </li>
  );
};

export default Browse_products_card;
