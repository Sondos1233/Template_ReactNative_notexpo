import {createContext, useReducer} from 'react';
import {reducer} from './reducer/reducer';
export const ProductsContext = createContext();

export function Provider({children}) {
  const [state, dispatch] = useReducer(reducer, {
    list: [],
    details: {},
  });

  return (
    <ProductsContext.Provider value={{state, dispatch}}>
      {children}
    </ProductsContext.Provider>
  );
}
