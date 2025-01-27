import getItemsFromCart from "./getItemsFromCart";

async function getTotalPrice() {
  const data = await getItemsFromCart();
  
  return data.reduce(
    (totalPrice, currentPrice) => (totalPrice += currentPrice),
    0
  );
}

export default getTotalPrice;
