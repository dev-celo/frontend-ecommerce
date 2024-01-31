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

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
  return useContext(AppContext);
}
