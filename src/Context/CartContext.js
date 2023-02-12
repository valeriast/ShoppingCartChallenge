import React, {createContext, useState} from 'react';
export const CartContext = createContext({})

export default function CartProvider({children}) {
  const [cart, setCart] = useState([])
  const [totalAmount, setTotalAmount] = useState(0)
 
  function addToCart(item){

    let itemIndex = cart.findIndex(product => product.id === item.id);

    if (itemIndex === -1){
        data = {
            ...item,
            quantity: 1,
            totalAmount: item.price
        }
        const cartList = [...cart, data]
        setCart(cartList)
        sumTotal(cartList)
        return;
    }

    let cartClone = cart;

    cartClone[itemIndex].quantity += 1;
    cartClone[itemIndex].totalAmount = (cartClone[itemIndex].quantity * cartClone[itemIndex].price).toFixed(2);
    
    setCart( cartClone )
    sumTotal(cartClone)
  }

  function removeFromCart(item){
    let itemIndex = cart.findIndex(product => product.id === item.id);

    if (itemIndex != -1){
        let cartClone = cart;
        
        if (cartClone[itemIndex].quantity > 1 ){
            cartClone[itemIndex].quantity -= 1;
            cartClone[itemIndex].totalAmount = (cartClone[itemIndex].quantity * cartClone[itemIndex].price).toFixed(2);
            setCart(cartClone); 
            sumTotal(cartClone)
        }else{
            const cartFiltered = cart.filter(product => product.id != item.id)
            setCart(cartFiltered)
            sumTotal(cartFiltered)
        }
    }

  }

  function sumTotal(items){
   let result =  items.reduce((acc, {totalAmount}) => acc +  parseFloat(totalAmount) , 0)
   setTotalAmount(result.toFixed(2))
  }

  return (
    <CartContext.Provider
        value={{
            cart,
            addToCart,
            removeFromCart,
            totalAmount
        }}
    >
        {children}
    </CartContext.Provider>
  );
}