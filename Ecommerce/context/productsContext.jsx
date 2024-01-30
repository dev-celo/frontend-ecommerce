// productsContext.jsx

import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export function AppProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <AppContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
