import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/slice/cartSlice";

const Carts = () => {
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  const removeFromCartById = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="p-5 mb-16 relative overflow-x-auto sm:rounded-lg">
          <h1 className="text-xl text-gray-700 font-bold mb-5">Cart</h1>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4">
                    <img
                      src={item.image}
                      className="w-16 md:w-12"
                      alt="Apple Watch"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div
                        id="first_product"
                        className="w-14 text-gray-900 text-sm rounded-lg block px-2.5 py-1 dark:border-gray-600 dark:text-white "
                      >
                        {item.quantity}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {item.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      onClick={() => removeFromCartById(item.id)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}

              <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td
                  className="px-6 py-4 font-bold text-gray-900 dark:text-white"
                  colSpan={3}
                >
                  Total Price
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {totalPrice.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="p-5 mb-16 relative overflow-x-auto sm:rounded-lg">
          <h1 className="text-xl text-gray-700 font-bold mb-5">No Items</h1>
        </div>
      )}
    </>
  );
};

export default Carts;
