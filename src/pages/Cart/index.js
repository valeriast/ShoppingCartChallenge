import React, {useContext, useState} from 'react';
import { View, Text, FlatList } from 'react-native';
import CartItems from '../../components/CartItems';

import { CartContext } from '../../Context/CartContext';

export default function Cart() {
  const { cart, addToCart, removeFromCart, totalAmount } = useContext(CartContext)
  const [updateFlatList, setUpdateFlatlist] = useState(false)

  function quantityChanger(){
    setUpdateFlatlist(!updateFlatList)
  }

  function haddleAdd(item){
    addToCart(item)
    quantityChanger()
  }

  function handleRemove(item){
    removeFromCart(item)
    quantityChanger()
  }

  return (
   <View>
       <FlatList
         data={cart}
         keyExtractor={(item) => item.id}
         renderItem={({item}) => <CartItems productItem={item} addItem={() => haddleAdd(item)} removeItem={() => handleRemove(item)}/>}
         extraData={updateFlatList}
         ListEmptyComponent={() => <View style={{alignItems: 'center', marginTop: 20}}><Text>Nenhum produto na lista</Text></View>}
         ListFooterComponent={()=> <Text style={{fontSize: 16, fontWeight: 'bold', color: '#121212', marginTop: 20, textAlign: 'center'}}>Total Amount: {totalAmount}</Text> } 
         
       />
   </View>
  );
}