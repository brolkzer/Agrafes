import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByType } from "../../actions/products.actions";
import { isEmpty } from "../../utils/IsEmpty";
import pagesHandler from "../../utils/pagesHandler";
import Browse_prodcuts_card from "./Browse_products_card";

const Browse_prodcuts = () => {
  let productsData = useSelector((state: any) => state.productsReducer);
  let productsDataByType = useSelector(
    (state: any) => state.productsByTypeReducer
  );
  let pageNumber: number = 0;
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getProductByType(productTypeSearch));
  }, [Browse_prodcuts]);

  let paramsString: any = window.location;
  let searchParams = new URLSearchParams(paramsString)
    .getAll("search")
    .toString()
    .split("=")[1]
    .toLowerCase();
  const productTypeSearch = searchParams.split("/")[0].toLowerCase();
  const productPageSearch = searchParams.split("/")[1];
  const slicedArray = pagesHandler(productsDataByType);
  if (!isEmpty(productsData) && productTypeSearch === "fournitures") {
    productsData = productsData.filter((p: any) => p.type == "fournitures");
  } else if (!isEmpty(productsData) && productTypeSearch === "ecriture") {
    productsData = productsData.filter((p: any) => p.type == "ecriture");
  } else if (!isEmpty(productsData) && productTypeSearch === "papeterie") {
    productsData = productsData.filter((p: any) => p.type == "papeterie");
  }
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
  }

  return (
    <>
      {!isEmpty(productsData) ? (
        <div className="browsePage-products">
          <ul>
            {slicedArray[pageNumber].map((product: any) => {
              if (product.type === productTypeSearch) {
                return (
                  <Browse_prodcuts_card product={product} key={product._id} />
                );
              }
            })}
          </ul>
          <div className="browsePage-products-pages">
            {productsData.filter((p: any) => p.type == productTypeSearch)
              .length /
              9 >=
            1 ? (
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
            {productsData.filter((p: any) => p.type == productTypeSearch)
              .length /
              9 >
            1 ? (
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
            {productsData.filter((p: any) => p.type == productTypeSearch)
              .length /
              9 >
            2 ? (
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
            {productsData.filter((p: any) => p.type == productTypeSearch)
              .length /
              9 >
            3 ? (
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
            {productsData.filter((p: any) => p.type == productTypeSearch)
              .length /
              9 >
            4 ? (
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
            {productsData.filter((p: any) => p.type == productTypeSearch)
              .length /
              9 >
            5 ? (
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
            {productsData.filter((p: any) => p.type == productTypeSearch)
              .length /
              9 >
            7 ? (
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
            {productsData.filter((p: any) => p.type == productTypeSearch)
              .length /
              9 >
            7 ? (
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
            {productsData.filter((p: any) => p.type == productTypeSearch)
              .length /
              9 >
            8 ? (
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
            {productsData.filter((p: any) => p.type == productTypeSearch)
              .length /
              9 >
            9 ? (
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
            {productsData.filter((p: any) => p.type == productTypeSearch)
              .length /
              9 >
            10 ? (
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
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Browse_prodcuts;
