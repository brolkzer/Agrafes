import { useSelector } from "react-redux";
import { isEmpty } from "../../utils/IsEmpty";
import ProductSpec from "./ProductSpec";
import ProductTree from "./ProductTree";
import SimilarProductDisplay from "./SimilarProductDisplay";

type productDataProps = {
  productData: object | any;
};

const ProductDisplay = ({ productData }: productDataProps) => {
  const productsData = useSelector((state: any) => state.productsReducer);
  const similarProductsData = productsData
    .filter(
      (product: object | any) =>
        product.subtype === productData.subtype &&
        product._id != productData._id
    )
    .slice(0, 4);

  return (
    <>
      <div className="product-tree-structure">
        <ProductTree productData={productData} />
      </div>
      <div className="product-data">
        <div className="product-data-name">{productData.nom}</div>
        <div className="product-data-buy">
          <span>{productData.prix / 10000 + "€"}</span>
          <button className="addToCartBtn">Ajouter au panier</button>
        </div>
        <div className="product-data-img">
          <img
            src={productData.img}
            alt="Image du produit"
            className="product-data-img-img"
          />
        </div>
        <div className="product-data-similarProducts">
          <p>Produits similaires :</p>
          <div className="product-data-similarProducts-list">
            <ul>
              {!isEmpty(similarProductsData)
                ? similarProductsData.map((similarProduct: any | object) => {
                    return (
                      <SimilarProductDisplay similarProduct={similarProduct} />
                    );
                  })
                : ""}
            </ul>
          </div>
        </div>
      </div>
      <div className="product-desc">
        <h2>Description du produit</h2>
        <p>{productData.description}</p>
      </div>
      <div className="product-spec">
        {!isEmpty(productData.spec) ? <h3>Fiche technique</h3> : ""}
        <div className="product-spec-list">
          <ProductSpec productData={productData} />
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
