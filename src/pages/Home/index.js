import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Feather'
import CardItem from '../../components/CardItem';
import { CartContext } from '../../Context/CartContext';

export default function Home() {
  const navigation = useNavigation()
  const [products, setProducts] = useState([
    { id: '1', name:'Coca-Cola', price: 19.90},
    { id: '2', name:'Chocolate', price: 5.90},
    { id: '3', name:'Guarana', price: 6.00},
    { id: '4', name:'Sorvete', price: 21.00}
  ])  
  const{cart, addToCart} = useContext(CartContext)
 
  function handleAddToCart(item){
    addToCart(item)
  }
 
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Lista de produtos</Text>
            <TouchableOpacity onPress={ ()=> navigation.navigate("Cart")}>
                <Icon
                    name="shopping-cart"
                    size={25}
                    color="#121212"
                />
                { cart.length > 0 &&
                    <View style={styles.dot}>
                      <Text style={{color: '#FFF'}}>{cart.length}</Text>
                    </View>
                }
                
            </TouchableOpacity>
        </View>

        <FlatList
            data={products}
            renderItem={({item}) => <CardItem productItem={item} addToCart={() => handleAddToCart(item)} />}
            keyExtractor={item => item.id}
      />
        
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#121212'
    },
    dot:{
        backgroundColor: 'red',
        height: 20,
        width: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        position: 'absolute',
        top: 12,
        left: -8

    }   
})