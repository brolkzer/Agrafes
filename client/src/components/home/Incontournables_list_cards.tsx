const Incontournables_list_cards = ({ product }: object | any) => {
  const productRelocate = () => {
    window.location.href = `/Product?=${product._id}`;
  };

  return (
    <li
      className="product-card"
      key={product._id}
      style={{ backgroundImage: `url("${product.img}")` }}
    >
      <div className="product-card-desc" onClick={() => productRelocate()}>
        <p className="product-card-desc-name">{product.nom}</p>
        <p className="product-card-desc-description">{product.description}</p>
        <p className="product-card-desc-price">{product.prix / 10000}€</p>
      </div>
    </li>
  );
};

export default Incontournables_list_cards;
