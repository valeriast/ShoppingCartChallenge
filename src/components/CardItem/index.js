import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function CardItem({productItem, addToCart}) {

  function handleAdd(){
    addToCart()
  }

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>{productItem.name}</Text>
            <Text style={styles.price}>R$ {productItem.price}</Text>
        </View>
        
        <TouchableOpacity style={styles.addButton} onPress={()=> handleAdd()}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#cacaca',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 20,
        marginTop: 10
    },
    title:{
        fontWeight: 'bold',
        fontSize: 16,
        color: '#121212'
    },
    price:{
        color: '#121212',
        fontSize: 15
    },
    addButton:{
        backgroundColor: '#348cff',
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        color: '#ffff',
        fontSize: 20
    }
})