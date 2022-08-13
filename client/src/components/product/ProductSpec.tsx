import { isEmpty } from "../../utils/IsEmpty";

type productDataProps = {
  productData: object | any;
};

const ProductSpec = ({ productData }: productDataProps) => {
  const productSpec = [];

  for (const [key, value] of Object.entries(productData.spec)) {
    productSpec.push(`${key}: ${value}`);
  }

  return (
    <>
      {!isEmpty(productSpec)
        ? productSpec.map((spec: string) => {
            if (productSpec.length != 0) {
              return (
                <>
                  <ul key={spec} className="product-spec-list-map">
                    <li
                      key={spec.split(":")[0]}
                      className="product-spec-list-map-key"
                    >
                      {spec.split(":")[0] + " : "}
                    </li>
                    <li
                      key={spec.split(":")[1]}
                      className="product-spec-list-map-value"
                    >
                      {spec.split(":")[1]}
                    </li>
                  </ul>
                </>
              );
            } else if (productSpec.length == 0) return null;
          })
        : ""}
    </>
  );
};

export default ProductSpec;
