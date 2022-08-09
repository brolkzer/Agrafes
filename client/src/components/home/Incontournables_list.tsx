import axios from "axios";

const Incontournables_list = () => {
  const styloBic = async () => {
    await axios
      .get("http://localhost:5000/api/product/62dc846708117b3bf09c62d0")
      .then((product) => console.log(product.data[0].nom))
      .catch((error) => console.log(error));
  };
  styloBic();

  return <div></div>;
};

export default Incontournables_list;
