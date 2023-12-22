import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrumb from "../../component/Breadcrumb";
import Marquee from "../../component/Marquee";
import { selectCurrentTotalCartValue } from "../../features/cart/cartSlice";
import {
  useDeleteCartItemMutation,
  useGetCartQuery,
  useUpdateCartMutation,
} from "../../services/cart/cartAPI";
import toast from "react-hot-toast";

const CartIndex: React.FunctionComponent = () => {
  const totalItemPrice = useSelector(selectCurrentTotalCartValue);

  const { data } = useGetCartQuery();

  const [deleteCartItem] = useDeleteCartItemMutation();
  const [updateCartItem] = useUpdateCartMutation();

  const handleDeleteCartItem = async (cart_id: number[]) => {
    await deleteCartItem(cart_id);
  };

  async function incrementCount(id_cart: number, amount: number) {
    const amountInc = amount + 1;
    await updateCartItem({ cart_id: id_cart, amount: amountInc });
    const updateAmount = data?.map((item) => ({
      ...item,
      amount: amountInc,
    }));
  }

  async function decrementCount(id_cart: number, amount: number) {
    const amountDec = amount > 1 ? amount - 1 : 1;
    await updateCartItem({ cart_id: id_cart, amount: amountDec });
    const updateAmount = data?.map((item) => ({
      ...item,
      amount: amountDec,
    }));
  }

  const pathAfterDomain = window.location.pathname;

  return (
    <div className="mt-[76px] bg-[#FBF4EA]">
      <Marquee></Marquee>
      <div className="container-nmc mx-auto pb-8">
        <Breadcrumb></Breadcrumb>
        <h1 className="text-orange-orange-6 px-3 flex items-center justify-center mb-3 py-4">
          <i className="bdx-cart-fill inline-flex items-center"></i>{" "}
          <span>My Cart</span>
        </h1>
        <div className="cart-info__block">
          <div className="cart-info__table">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Order Value</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => (
                  <tr key={item?.book_id}>
                    {/* Delete button */}
                    <td className="btn-delete">
                      <i
                        onClick={() => handleDeleteCartItem([item?.cart_id])}
                        className="bdx-close"
                      ></i>
                    </td>
                    {/* Product info */}
                    <td data-th="Product">
                      <div className="product-img shrink-0">
                        <a href={`/product/${item?.book_id}`} target="_blank">
                          <img src={item?.image} alt="img-banner"></img>
                        </a>
                      </div>
                      <div>
                        <p>
                          <a href={`/product/${item?.book_id}`} target="_blank">
                            {item?.book_name}
                          </a>
                        </p>
                        <p>{item?.author}</p>
                      </div>
                    </td>
                    {/* Product price */}
                    <td data-th="Price">
                      {item?.sale === 0 ? (
                        <div className="table-price">
                          <p className="table-price__new">{item?.price}$</p>
                        </div>
                      ) : (
                        <div className="table-price">
                          <p className="table-price__new">
                            {" "}
                            {(
                              Number(item?.price) *
                              (1 - Number(item?.sale) / 100)
                            ).toFixed(2)}
                            $
                          </p>
                          <p className="table-price__old">{item?.price}</p>
                          <p className="table-price__discount">
                            -{item?.sale}%
                          </p>
                        </div>
                      )}
                    </td>
                    {/* Product quantity */}
                    <td data-th="Quantity">
                      <div className="qty-input">
                        <button
                          className="qty-count qty-count--minus"
                          data-action="minus"
                          type="button"
                          onClick={() =>
                            decrementCount(item?.cart_id, item?.amount)
                          }
                        >
                          -
                        </button>
                        <input
                          className="product-qty"
                          type="number"
                          name="product-qty"
                          min="0"
                          max="100"
                          value={item?.amount}
                        ></input>
                        <button
                          className="qty-count qty-count--add"
                          data-action="add"
                          type="button"
                          onClick={() => {
                            incrementCount(item.cart_id, item.amount);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    {/* Total value of 1 items */}
                    <td data-th="Order Value">
                      <p className="table-sumprice">
                        {item?.sale === 0
                          ? `${(item?.price * item.amount).toFixed(2)}$`
                          : `${(
                              Number(item?.price) *
                              (1 - Number(item?.sale) / 100) *
                              item?.amount
                            ).toFixed(2)}`}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:w-full w-[25%] ms-auto">
            <div className="cart-info__bottom">
              <p className="cart-info__bottom__noting">
                *Shipping fee included
              </p>
              <p className="cart-info__bottom__sum">
                <span className="text-uppercase">Total order value</span>
                <span>{totalItemPrice.toFixed(2)}$</span>
              </p>
              <div className="cart-info__bottom__btn d-flex justify-content-between align-items-center">
                <a href="javascript:history.back()">Return</a>
                {data?.length && data?.length > 0 ? (
                  <Link to="/user/order/info">
                    Accept
                    <i className="bdx-cart"></i>
                  </Link>
                ) : (
                  <Link
                    to="/user/cart"
                    onClick={() =>
                      toast.error("You have to purchase book first !")
                    }
                  >
                    Accept
                    <i className="bdx-cart"></i>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartIndex;
