import { Dispatch, SetStateAction, createContext, useState } from "react";

import { ProductProps } from "../interfaces/Products";
import { ContextProps } from "../interfaces/Context";

interface ContextType {
  cardItems: ProductProps[];
  setCardItems: Dispatch<SetStateAction<ProductProps[]>>;
}

export const ContextAPI = createContext<ContextType>({
  cardItems: [],
  setCardItems: () => {},
});

export default function ContextProvider({ children }: ContextProps) {
  const [cardItems, setCardItems] = useState<ProductProps[]>([]);

  return (
    <ContextAPI.Provider value={{ cardItems, setCardItems }}>
      {children}
    </ContextAPI.Provider>
  );
}