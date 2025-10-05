import React from 'react';

const CartPage = ({ cart, onClose, getTotalPrice }) => {
  const removeFromCart = (productId) => {
    // Táto funkcia bude implementovaná v Header komponente
  };

  const updateQuantity = (productId, newQuantity) => {
    // Táto funkcia bude implementovaná v Header komponente
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div 
        className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header košíka */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            🛒 Môj košík
          </h1>
          <button
            onClick={onClose}
            className="text-white hover:text-red-300 text-2xl font-bold transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Obsah košíka */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-h-[60vh] overflow-y-auto">
          {cart.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-white text-xl">Váš košík je prázdny</p>
              <p className="text-white/70 mt-2">Pridajte produkty kliknutím na animované karty</p>
            </div>
          ) : (
            <>
              {/* Zoznam produktov */}
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="bg-white/10 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <h3 className="text-white font-semibold">{item.name}</h3>
                        <p className="text-white/70">Cena za kus: {item.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-1">
                        <span className="text-white">Množstvo:</span>
                        <span className="text-yellow-300 font-bold text-lg">{item.quantity}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-yellow-300 font-bold text-lg">
                          {item.priceValue * item.quantity}€
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Súhrn */}
              <div className="border-t border-white/20 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white text-lg">Celkový počet produktov:</span>
                  <span className="text-yellow-300 font-bold text-xl">
                    {cart.reduce((total, item) => total + item.quantity, 0)} ks
                  </span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-white text-xl font-semibold">Celková cena:</span>
                  <span className="text-yellow-300 font-bold text-3xl">
                    {getTotalPrice()}€
                  </span>
                </div>

                {/* Tlačidlá */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    🛍️ Objednať
                  </button>
                  <button className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-lg transition-colors border border-white/20">
                    💾 Uložiť na neskôr
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 text-center">
          <p className="text-white/70 text-sm">
            Kliknite mimo košík alebo na ✕ pre zatvorenie
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;