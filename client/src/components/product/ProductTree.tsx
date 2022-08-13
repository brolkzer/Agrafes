type productDataPropos = {
  productData: object | any;
};

const relocateToHome = () => (window.location.href = "/Home");
const relocateToType = () => (window.location.href = "/");
const relocateToSubtype = () => (window.location.href = "/");

const ProductTree = ({ productData }: productDataPropos) => {
  const productTreeStructure = [
    "Accueil",
    " / ",
    productData.type,
    " / ",
    productData.subtype,
    " / ",
    productData.nom,
  ];

  return (
    <>
      <ul>
        <>
          {productTreeStructure
            ? productTreeStructure.map((root) => {
                if (root == productTreeStructure[0])
                  return (
                    <li
                      className="product-tree-structure-root"
                      onClick={() => {
                        relocateToHome();
                      }}
                      key={"Accueil"}
                    >
                      {root}
                    </li>
                  );
                else if (root == productTreeStructure[2])
                  return (
                    <li
                      className="product-tree-structure-root"
                      onClick={() => {
                        relocateToType();
                      }}
                      key={"Type"}
                    >
                      {root}
                    </li>
                  );
                else if (root == productTreeStructure[4])
                  return (
                    <li
                      className="product-tree-structure-root"
                      onClick={() => {
                        relocateToSubtype();
                      }}
                      key={"Subtype"}
                    >
                      {root}
                    </li>
                  );
                else if (
                  root == productTreeStructure[1] ||
                  root == productTreeStructure[3] ||
                  root == productTreeStructure[5] ||
                  root == productTreeStructure[6]
                )
                  return <li key={Math.random() * Math.random()}>{root}</li>;
              })
            : ""}
        </>
      </ul>
    </>
  );
};

export default ProductTree;
