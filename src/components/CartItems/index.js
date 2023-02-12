import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function CartItems({productItem, addItem, removeItem}) {
 return (
   <View style={styles.container}>
    <View style={styles.productDetailsArea}>
        <View>
            <Text style={styles.title}>{productItem.name}</Text>
            <Text style={styles.price}>{productItem.price}</Text>
        </View>
        <View>
           <Text style={{fontWeight: 'bold'}}>Total Amount</Text>
           <Text style={styles.price}>{productItem.totalAmount}</Text>
        </View>
    </View>
     
     <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.buttonQuantity} onPress={()=> removeItem()}>
            <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{productItem.quantity}</Text>
        <TouchableOpacity style={styles.buttonQuantity} onPress={()=> addItem()}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
     </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 20,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: '#adadad',
        padding: 10
    },
    buttonArea:{
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#121212'
    },
    price:{
        fontSize: 16
    },
    buttonQuantity:{
        backgroundColor: '#348cff',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold'
    },  
    quantity:{
        marginLeft: 10,
        marginRight: 10
    },
    productDetailsArea:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

})