import { useState } from "react";

interface ShoppingCartValue {
  id: string;
  title: string;
  slug: string;
  price: number;
  inventory: number;
  image: {
    fileName: string;
    url: string;
  }
}

export const ShoppingCartProvider = () => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartValue[]>([])

  const addNewPurchase = (props: ShoppingCartValue) => {
    setShoppingCart(props)
  }
}
