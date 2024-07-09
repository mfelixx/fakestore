import { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct";
import { useGetProductLimit } from "../../hooks/useProducts";
import Loading from "../../components/Loading";

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [idProducts, setIdProducts] = useState(0);
  const [products, setProducts] = useState([]);
  const { getProductLimit, loading } = useGetProductLimit();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductLimit();
      setProducts(data);
    };
    fetchProducts();
  }, [getProductLimit]);

  const handleCard = (id) => {
    setIsOpen(true);
    setIdProducts(id);
  };
  //   const product = products.find((product) => product.id === productId);
  //   setAddToCart((prevAddToCart) => {
  //     const existingItem = prevAddToCart.find((item) => item.id === productId);
  //     if (existingItem) {
  //       return prevAddToCart.map((item) =>
  //         item.id === productId
  //           ? { ...item, price: item.price * 2, qty: item.qty + 1 }
  //           : item
  //       );
  //     } else {
  //       return [
  //         ...prevAddToCart,
  //         {
  //           id: productId,
  //           name: product.name,
  //           price: product.price,
  //           image: product.image,
  //           qty: 1,
  //         },
  //       ];
  //     }
  //   });
  // };

  // const removeFromCartHandler = (productId) => {
  //   setAddToCart((prevAddToCart) => {
  //     return prevAddToCart.filter((item) => item.id !== productId);
  //   });
  // };

  return (
    <>
      {loading ? (
        <Loading style="absolute top-1/2 left-1/2" />
      ) : (
        <div className="p-5">
          <h1 className="text-xl text-gray-700 font-bold mb-5">Products</h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-20">
            {products.slice(0, 4).map((product, index) => (
              <div
                key={index}
                onClick={() => handleCard(product.id)}
                className="cursor-pointer w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-center">
                  <img
                    className="p-8 max-h-52 rounded-t-lg"
                    src={product.image}
                    alt="product image"
                  />
                </div>
                <div className="px-5 pb-5">
                  <div>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {product.title.substring(0, 20)}...
                    </h5>
                  </div>
                  <div className="mt-2.5 mb-5">
                    <p className=" text-xs font-semibold py-0.5">
                      Review {product.rating.rate}/5 ({product.rating.count})
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-gray-900 dark:text-white">
                      {product.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {products.slice(4, 8).map((product, index) => (
              <div
                key={index + 4}
                onClick={() => handleCard(product.id)}
                className="cursor-pointer w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-center">
                  <img
                    className="p-8 max-h-52 rounded-t-lg"
                    src={product.image}
                    alt="product image"
                  />
                </div>
                <div className="px-5 pb-5">
                  <div>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {product.title.substring(0, 20)}...
                    </h5>
                  </div>
                  <div className="mt-2.5 mb-5">
                    <p className=" text-xs font-semibold py-0.5">
                      Review {product.rating.rate}/5 ({product.rating.count})
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-gray-900 dark:text-white">
                      {product.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {products.slice(8, 12).map((product, index) => (
              <div
                key={index + 4}
                onClick={() => handleCard(product.id)}
                className="cursor-pointer w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-center">
                  <img
                    className="p-8 max-h-52 rounded-t-lg"
                    src={product.image}
                    alt="product image"
                  />
                </div>
                <div className="px-5 pb-5">
                  <div>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {product.title.substring(0, 20)}...
                    </h5>
                  </div>
                  <div className="mt-2.5 mb-5">
                    <p className=" text-xs font-semibold py-0.5">
                      Review {product.rating.rate}/5 ({product.rating.count})
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-gray-900 dark:text-white">
                      {product.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <CardProduct
            idProduct={idProducts}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default Products;
