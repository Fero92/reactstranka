import React, { useState } from 'react';
import CartPage from './CartPage';

const Header = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const products = [
    { id: 1, name: 'MacBook Pro', price: '2499€', priceValue: 2499, icon: '💻' },
    { id: 2, name: 'iPhone 15', price: '1199€', priceValue: 1199, icon: '📱' },
    { id: 3, name: 'AirPods Pro', price: '279€', priceValue: 279, icon: '🎧' },
    { id: 4, name: 'iPad Air', price: '699€', priceValue: 699, icon: '📱' },
    { id: 5, name: 'Apple Watch', price: '449€', priceValue: 449, icon: '⌚' }
  ];

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.priceValue * item.quantity), 0);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold mb-5 drop-shadow-lg">
        Vitajte v mojej React aplikácii
      </h1>
      <p className="text-xl mb-6 opacity-90">
        Toto je základná React stránka.
      </p>

      {/* Košík pod nadpisom - mobilne friendly */}
      <div className="mb-8 flex justify-center px-2">
        <div 
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 w-full max-w-md cursor-pointer hover:bg-white/20 transition-all duration-300"
          onClick={openCart}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-3xl">🛒</span>
            <span className="text-white font-semibold text-lg">Košík</span>
            <span className="bg-yellow-400 text-black rounded-full px-3 py-1 text-sm font-bold">
              {getTotalItems()}
            </span>
          </div>
          <div className="text-center text-white/80 text-lg mb-2">
            Celkom: <span className="text-yellow-300 font-bold text-xl">{getTotalPrice()}€</span>
          </div>
          {cart.length > 0 && (
            <div className="mt-3 max-h-24 overflow-y-auto bg-white/5 rounded-lg p-2">
              {cart.map((item) => (
                <div key={item.id} className="text-sm text-white/80 flex justify-between py-1">
                  <span>{item.name}</span>
                  <span className="text-yellow-300">{item.quantity}x</span>
                </div>
              ))}
            </div>
          )}
          <div className="text-sm text-white/70 mt-3 text-center">
            👆 Kliknite pre detail košíka
          </div>
        </div>
      </div>
      
      {/* Produktové karty - posuvateľné na mobile, animované na desktop */}
      <div className="mb-10">
        {/* Mobile/Tablet - horizontálne posuvateľné */}
        <div className="lg:hidden">
          <div className="overflow-x-scroll scrollbar-hide px-2">
            <div className="flex gap-3 pb-4 w-max">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 w-[170px] hover:bg-white/20 transition-all duration-300 cursor-pointer active:scale-95"
                  onClick={() => addToCart(product)}
                >
                  <div className="text-2xl mb-2">{product.icon}</div>
                  <h3 className="text-white font-semibold text-sm leading-tight">{product.name}</h3>
                  <p className="text-yellow-300 font-bold text-lg mt-1">{product.price}</p>
                  <div className="text-xs text-white/60 mt-2">👆 Tap to add</div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center text-white/60 text-sm mt-1 px-4">
            👈 Swipe left and right to browse products 👉
          </div>
        </div>

        {/* Desktop - animované ako predtým */}
        <div className="hidden lg:block relative overflow-hidden h-32">
          <div className="absolute inset-0 flex animate-scroll">
            {/* Prvá sada kariet */}
            {products.map((product) => (
              <div
                key={`first-${product.id}`}
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mx-2 min-w-[190px] hover:bg-white/20 transition-all duration-300 cursor-pointer"
                onClick={() => addToCart(product)}
              >
                <div className="text-2xl mb-1">{product.icon}</div>
                <h3 className="text-white font-semibold text-sm">{product.name}</h3>
                <p className="text-yellow-300 font-bold text-lg">{product.price}</p>
                <div className="text-xs text-white/60 mt-1">Click to add</div>
              </div>
            ))}
            {/* Druhá sada kariet pre plynulú animáciu */}
            {products.map((product) => (
              <div
                key={`second-${product.id}`}
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mx-2 min-w-[180px] hover:bg-white/20 transition-all duration-300 cursor-pointer"
                onClick={() => addToCart(product)}
              >
                <div className="text-2xl mb-1">{product.icon}</div>
                <h3 className="text-white font-semibold text-sm">{product.name}</h3>
                <p className="text-yellow-300 font-bold text-lg">{product.price}</p>
                <div className="text-xs text-white/60 mt-1">Click to add</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Košíková stránka ako modal */}
      {isCartOpen && (
        <CartPage 
          cart={cart}
          onClose={closeCart}
          getTotalPrice={getTotalPrice}
        />
      )}
    </>
  );
};

export default Header;
