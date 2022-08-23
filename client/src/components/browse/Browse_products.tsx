import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByType,
  getProductsBySubtype,
} from "../../actions/products.actions";
import { isEmpty } from "../../utils/IsEmpty";
import pagesHandler from "../../utils/pagesHandler";
import Browse_prodcuts_card from "./Browse_products_card";

const Browse_prodcuts = () => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getProductByType(productTypeSearch));
    dispatch(getProductsBySubtype(productTypeSearch));
  }, [Browse_prodcuts]);

  let productsData = useSelector((state: any) => state.productsReducer);
  let productsDataByType = useSelector(
    (state: any) => state.productsByTypeReducer
  );
  let productsDataBySubype = useSelector(
    (state: any) => state.productsBySubtypeReducer
  );
  let pageNumber: number = 0;

  let paramsString: any = window.location;
  let searchParams = new URLSearchParams(paramsString)
    .getAll("search")
    .toString()
    .split("=")[1]
    .toLowerCase();
  const productTypeSearch = searchParams.split("/")[0].toLowerCase();
  const productQuerySearch = productTypeSearch.split("%20");
  const productPageSearch = searchParams.split("/")[1];
  const slicedArray = pagesHandler(productsData);
  const slicedArrayByType = pagesHandler(productsDataByType);

  if (productPageSearch == "1") {
    pageNumber = 0;
  } else if (productPageSearch == "2") {
    pageNumber = 1;
  } else if (productPageSearch == "3") {
    pageNumber = 2;
  } else if (productPageSearch == "4") {
    pageNumber = 3;
  } else if (productPageSearch == "5") {
    pageNumber = 4;
  } else if (productPageSearch == "6") {
    pageNumber = 5;
  } else if (productPageSearch == "7") {
    pageNumber = 6;
  } else if (productPageSearch == "8") {
    pageNumber = 7;
  } else if (productPageSearch == "9") {
    pageNumber = 8;
  } else if (productPageSearch == "10") {
    pageNumber = 9;
  } else if (productPageSearch == "11") {
    pageNumber = 10;
  } else if (productPageSearch == "12") {
    pageNumber = 11;
  } else if (productPageSearch == "13") {
    pageNumber = 12;
  } else if (productPageSearch == "14") {
    pageNumber = 13;
  } else if (productPageSearch == "15") {
    pageNumber = 14;
  } else if (productPageSearch == "16") {
    pageNumber = 15;
  }

  console.log(productTypeSearch);

  return (
    <>
      {!isEmpty(productsData) ? (
        <div className="browsePage-products">
          <ul>
            {(productsData &&
              productsDataByType &&
              productTypeSearch === "ecriture") ||
            "papeterie" ||
            "fournitures"
              ? slicedArrayByType[pageNumber].map((product: any) => {
                  if (productTypeSearch === product.type) {
                    return (
                      <Browse_prodcuts_card
                        product={product}
                        key={product._id}
                      />
                    );
                  }
                })
              : ""}
            {(productsData &&
              productsDataByType &&
              productsDataBySubype &&
              productTypeSearch === "stylos-feutres") ||
            "marqueurs" ||
            "crayons-portemines" ||
            "surligneurs" ||
            "papiers" ||
            "agendas-calendriers" ||
            "cahiers-blocs-notes" ||
            "courriers" ||
            "agrafage" ||
            "colles" ||
            "coupe" ||
            "tampons"
              ? productsDataBySubype.map((product: any) => {
                  if (productTypeSearch === product.subtype) {
                    return (
                      <Browse_prodcuts_card
                        product={product}
                        key={product._id}
                      />
                    );
                  }
                })
              : ""}
            {(productsData &&
              productsDataByType &&
              productTypeSearch != "ecriture") ||
            "papeterie" ||
            "fournitures"
              ? productsData.map((product: any) => {
                  if (
                    productQuerySearch[0] &&
                    product.nom.toLowerCase().includes(productQuerySearch[0])
                  ) {
                    return (
                      <Browse_prodcuts_card
                        product={product}
                        key={product._id}
                      />
                    );
                  } else if (
                    productQuerySearch[1] &&
                    product.nom.toLowerCase().includes(productQuerySearch[1])
                  ) {
                    return (
                      <Browse_prodcuts_card
                        product={product}
                        key={product._id}
                      />
                    );
                  } else if (
                    productQuerySearch[2] &&
                    product.nom.toLowerCase().includes(productQuerySearch[2])
                  ) {
                    return (
                      <Browse_prodcuts_card
                        product={product}
                        key={product._id}
                      />
                    );
                  }
                })
              : ""}
          </ul>
          <div className="browsePage-products-pages">
            {productsDataByType.length / 6 >= 1 ? (
              <span
                className={productPageSearch == "1" ? "nav-active" : "nav"}
                onClick={() => {
                  if (productTypeSearch == "1") return null;
                  else if (productTypeSearch != "1")
                    window.location.href = `/Browse?=${productTypeSearch}/1`;
                }}
              >
                1
              </span>
            ) : null}
            {productsDataByType.length / 6 > 1 ? (
              <span
                className={productPageSearch == "2" ? "nav-active" : "nav"}
                onClick={() => {
                  if (productTypeSearch == "2") return null;
                  else if (productTypeSearch != "2")
                    window.location.href = `/Browse?=${productTypeSearch}/2`;
                }}
              >
                2
              </span>
            ) : null}
            {productsDataByType.length / 6 > 2 ? (
              <span
                className={productPageSearch == "3" ? "nav-active" : "nav"}
                onClick={() => {
                  if (productTypeSearch == "3") return null;
                  else if (productTypeSearch != "3")
                    window.location.href = `/Browse?=${productTypeSearch}/3`;
                }}
              >
                3
              </span>
            ) : null}
            {productsDataByType.length / 6 > 3 ? (
              <span
                className={productPageSearch == "4" ? "nav-active" : "nav"}
                onClick={() => {
                  if (productTypeSearch == "4") return null;
                  else if (productTypeSearch != "4")
                    window.location.href = `/Browse?=${productTypeSearch}/4`;
                }}
              >
                4
              </span>
            ) : null}
            {productsDataByType.length / 6 > 4 ? (
              <span
                className={productPageSearch == "5" ? "nav-active" : "nav"}
                onClick={() => {
                  if (productTypeSearch == "5") return null;
                  else if (productTypeSearch != "5")
                    window.location.href = `/Browse?=${productTypeSearch}/5`;
                }}
              >
                5
              </span>
            ) : null}
            {productsDataByType.length / 6 > 5 ? (
              <span
                className={productPageSearch == "6" ? "nav-active" : "nav"}
                onClick={() => {
                  if (productTypeSearch == "6") return null;
                  else if (productTypeSearch != "6")
                    window.location.href = `/Browse?=${productTypeSearch}/6`;
                }}
              >
                6
              </span>
            ) : null}
            {productsDataByType.length / 6 > 6 ? (
              <span
                className={productPageSearch == "7" ? "nav-active" : "nav"}
                onClick={() => {
                  if (productTypeSearch == "7") return null;
                  else if (productTypeSearch != "7")
                    window.location.href = `/Browse?=${productTypeSearch}/7`;
                }}
              >
                7
              </span>
            ) : null}
            {productsDataByType.length / 6 > 7 ? (
              <span
                className={productPageSearch == "8" ? "nav-active" : "nav"}
                onClick={() => {
                  if (productTypeSearch == "8") return null;
                  else if (productTypeSearch != "8")
                    window.location.href = `/Browse?=${productTypeSearch}/8`;
                }}
              >
                8
              </span>
            ) : null}
            {productsDataByType.length / 6 > 8 ? (
              <span
                className={productPageSearch == "9" ? "nav-active" : "nav"}
                onClick={() => {
                  if (productTypeSearch == "9") return null;
                  else if (productTypeSearch != "9")
                    window.location.href = `/Browse?=${productTypeSearch}/9`;
                }}
              >
                9
              </span>
            ) : null}
            {productsDataByType.length / 6 > 9 ? (
              <span
                className={productPageSearch == "10" ? "nav-active" : "nav"}
                onClick={() => {
                  if (productTypeSearch == "10") return null;
                  else if (productTypeSearch != "10")
                    window.location.href = `/Browse?=${productTypeSearch}/10`;
                }}
              >
                10
              </span>
            ) : null}
            {productsDataByType.length / 6 > 10 ? (
              <span
                className={productPageSearch == "11" ? "nav-active" : "nav"}
                onClick={() => {
                  if (productTypeSearch == "11") return null;
                  else if (productTypeSearch != "11")
                    window.location.href = `/Browse?=${productTypeSearch}/11`;
                }}
              >
                11
              </span>
            ) : null}
            {productsDataByType.length / 6 > 11 ? (
              <span
                className={productPageSearch == "12" ? "nav-active" : "nav"}
                onClick={() => {
                  if (productTypeSearch == "12") return null;
                  else if (productTypeSearch != "12")
                    window.location.href = `/Browse?=${productTypeSearch}/12`;
                }}
              >
                12
              </span>
            ) : null}
            {productsDataByType.length / 6 > 12 ? (
              <span
                className={productPageSearch == "13" ? "nav-active" : "nav"}
                onClick={() => {
                  if (productTypeSearch == "13") return null;
                  else if (productTypeSearch != "13")
                    window.location.href = `/Browse?=${productTypeSearch}/13`;
                }}
              >
                13
              </span>
            ) : null}
            {productsDataByType.length / 6 > 13 ? (
              <span
                className={productPageSearch == "14" ? "nav-active" : "nav"}
                onClick={() => {
                  if (productTypeSearch == "14") return null;
                  else if (productTypeSearch != "14")
                    window.location.href = `/Browse?=${productTypeSearch}/14`;
                }}
              >
                14
              </span>
            ) : null}
            {productsDataByType.length / 6 > 14 ? (
              <span
                className={productPageSearch == "15" ? "nav-active" : "nav"}
                onClick={() => {
                  if (productTypeSearch == "15") return null;
                  else if (productTypeSearch != "15")
                    window.location.href = `/Browse?=${productTypeSearch}/15`;
                }}
              >
                15
              </span>
            ) : null}
            {productsDataByType.length / 6 > 15 ? (
              <span
                className={productPageSearch == "16" ? "nav-active" : "nav"}
                onClick={() => {
                  if (productTypeSearch == "16") return null;
                  else if (productTypeSearch != "16")
                    window.location.href = `/Browse?=${productTypeSearch}/16`;
                }}
              >
                16
              </span>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Browse_prodcuts;
