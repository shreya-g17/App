export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || { items: [] };
};

export const addToCart = (item) => {
  if (!item || !item._id) return;

  const cart = getCart();
  const existingItem = cart.items.find((cartItem) => cartItem.id === item._id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.items.push({ id: item._id, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeCartItem = (itemId) => {
  if (!itemId) return;

  const cart = getCart();
  const existingItemIndex = cart.items.findIndex((cartItem) => cartItem.id === itemId);

  if (existingItemIndex !== -1) {
    if (cart.items[existingItemIndex].quantity > 1) {
      cart.items[existingItemIndex].quantity -= 1;
    } else {
      cart.items.splice(existingItemIndex, 1);
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};
