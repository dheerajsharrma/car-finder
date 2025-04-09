import { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlist(storedWishlist);
  }, []);

  const toggleWishlist = (car) => {
    let updated;
    if (wishlist.find(item => item.id === car.id)) {
      updated = wishlist.filter(item => item.id !== car.id);
    } else {
      updated = [...wishlist, car];
    }
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
