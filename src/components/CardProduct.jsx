import { useEffect, useState } from "react";
import { useGetAllProduct } from "../hooks/useProducts";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
// import { products } from "../utils/products";

const CardProduct = ({ idProduct, isOpen, onClose }) => {
  // const [addToCart, setAddToCart] = useState(() => {
  //   const saveCart = localStorage.getItem("cartBelajarReact");
  //   if (saveCart) {
  //     try {
  //       const parsedData = JSON.parse(saveCart);
  //       return parsedData.items || [];
  //     } catch (error) {
  //       console.error("Error parsing localStorage data:", error);
  //       return [];
  //     }
  //   }
  //   return [];
  // });
  // const [total, setTotal] = useState(() => {
  //   const saveCart = localStorage.getItem("cartBelajarReact");
  //   if (saveCart) {
  //     try {
  //       const parsedData = JSON.parse(saveCart);
  //       return parsedData.total || 0;
  //     } catch (error) {
  //       console.error("Error parsing localStorage data:", error);
  //       return 0;
  //     }
  //   }
  //   return 0;
  // });
  const [products, setProducts] = useState([]);
  const { getAllProduct } = useGetAllProduct();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProduct();
      setProducts(data);
    };

    fetchProducts();
  }, [getAllProduct]);

  // useEffect(() => {
  //   const newCartData = {
  //     items: addToCart,
  //     total,
  //   };
  //   localStorage.setItem("cartBelajarReact", JSON.stringify(newCartData));
  // }, [addToCart, total]);

  const product = products.find((product) => product.id === idProduct);

  const handleAddToCart = () => {
    // const existingItem = addToCart.find((item) => item.id === productId);
    // let newAddToCart;
    try {
      // if (existingItem) {
      //   newAddToCart = addToCart.map((item) =>
      //     item.id === productId
      //       ? { ...item, price: item.price * 2, qty: item.qty + 1 }
      //       : item
      //   );
      //   toast.success("Item added to cart");
      // } else {
      //   newAddToCart = [
      //     ...addToCart,
      //     {
      //       id: productId,
      //       name: product.name,
      //       price: product.price,
      //       image: product.image,
      //       qty: 1,
      //     },
      //   ];
      //   toast.success("Item added to cart");
      // }
      dispatch(addToCart(product));
    } catch (error) {
      toast.error(error.message);
    }

    // const newTotal = newAddToCart.reduce((acc, item) => acc + item.price, 0);
    // setTotal(newTotal);
    // setAddToCart(newAddToCart);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center p-5 z-50 bg-black bg-opacity-70"
          onClick={onClose}
        >
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800">
            <img
              className="object-cover max-w-2xl my-2 rounded-t-lg h-60 md:p-3 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={product.image}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {product.description}
              </p>
              <button
                type="button"
                onClick={handleAddToCart}
                className="text-blue-700 focus:outline-none font-medium rounded-lg text-sm text-start hover:underline"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardProduct;
