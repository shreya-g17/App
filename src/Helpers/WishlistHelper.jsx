export const getWishlist = () => {
  const preItems = JSON.parse(localStorage.getItem("wishlist")) || {
    items: [],
  };
  return preItems.items;
};

export const addToWishlist = (item) => {
  if (!item || !item._id) return;

  const preItems = getWishlist();
  let newWishlist;

  if (preItems.includes(item._id)) {
    // Remove item if already in wishlist
    newWishlist = preItems.filter((id) => id !== item._id);
  } else {
    // Add item if not in wishlist
    newWishlist = [...preItems, item._id];
  }

  localStorage.setItem("wishlist", JSON.stringify({ items: newWishlist }));
};

export const removeWishlistItem = (itemId) => {
  if (!itemId) return;

  let wish = getWishlist();
  wish = wish.filter((id) => id !== itemId); // Remove the item from the array

  localStorage.setItem("wishlist", JSON.stringify({ items: wish }));
};
