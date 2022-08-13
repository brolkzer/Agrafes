import { useSelector } from "react-redux";
import { isEmpty } from "../../utils/IsEmpty";
import Incontournables_list_cards from "./Incontournables_list_cards";

const Incontournables_list = () => {
  const productsData = useSelector((state: any) => state.productsReducer);

  return (
    <div className="product-div">
      <ul className="product-list">
        {isEmpty(productsData)
          ? " ... "
          : productsData.map((product: object | any) => {
              if (
                product._id == "62f3f7c484f81d4e085b56f6" ||
                product._id == "62f3f7c484f81d4e085b56fc" ||
                product._id == "62f3f7c484f81d4e085b5728" ||
                product._id == "62f3f7c484f81d4e085b5709" ||
                product._id == "62f3f7c484f81d4e085b570e" ||
                product._id == "62f3f7c484f81d4e085b571d" ||
                product._id == "62f3f7c484f81d4e085b572b" ||
                product._id == "62f3f7c484f81d4e085b56f0"
              )
                return (
                  <Incontournables_list_cards
                    product={product}
                    key={product._id}
                  />
                );
            })}
      </ul>
    </div>
  );
};

export default Incontournables_list;
