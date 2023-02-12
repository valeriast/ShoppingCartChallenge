import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const CartStack = createNativeStackNavigator();
import Home from "../Home";
import Cart from "../Cart";

export default function CartRoutes(){
    return(
      <CartStack.Navigator>
        <CartStack.Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false
            }}
        />
        
        <CartStack.Screen
            name="Cart"
            component={Cart}
            options={{
                headerTitle: "Meu carrinho"
            }}
        />
      </CartStack.Navigator>  
    )
}