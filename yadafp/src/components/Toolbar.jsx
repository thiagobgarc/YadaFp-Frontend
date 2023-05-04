import { Image, StyleSheet, Text, View, } from "react-native"
import { Navigate } from "react"

export const Toolbar = () => {
    return (
        <View style={styles.style}>
            {/* <Image source={{ uri: 'https://assembly-of-god-world-vision-ministry-youth.square.site/uploads/b/6d194390-5b84-11ea-b829-138bd9785118/902c45649a4729c9831f8b07a722e7f5.png'}} style={styles.image}/> */}
            <Text style={styles.yada}>
                Yada
            </Text>
            <Text style={styles.foodpantry}>
                Food Pantry
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    style: {
        backgroundColor: 'skyblue',
        marginTop: '100%',
        postion: 'fixed',
        height: 70,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        marginLeft: 175,
        borderRadius: 50,
        flex: 1,
        position: 'relative',
        bottom: 20,
    },
    yada: {
        bottom: -20,
        left:55,
        fontSize: 25,
        fontFamily: 'cursive',
    },
    foodpantry: {
        bottom: 10,
        left:270,
        fontSize: 25,
        fontFamily: 'cursive',
    }
})