import { StyleSheet, Text, View, ScrollView } from "react-native"
import {images} from '../'

export const Yada = () => {
    return (
        <ScrollView style={styles.background}>
           
            {/* <Text style={styles.text}>
                Yada
            </Text> */}
            <Text style={styles.definition}>
                Yada (v): To be known.
            </Text>
            <Text style={styles.mission}>
                Mission:
            </Text>
            <Text style={styles.summary}>
            These small gatherings known as Yada are to deeping spiritual knowledge and connection with God. Through home services people are set on a journey of discovering and experiencing God's love, grace, and presence. 
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        fontFamily: 'cursive',
        color: 'black',
        textAlign: 'center',
        right: 150,
    },
    definition: {
        textAlign: 'center',
        color: 'black',
        fontFamily: "Ariel",
        fontSize: 20,
        top: 40,
        marginBottom: '100%'
    },
    mission: {
        fontSize: 50,
        fontFamily: 'cursive',
        color: 'black',
        textAlign: 'center',
        bottom: 340,
       
    },
    summary: {
        textAlign: 'center',
        color: 'black',
        fontFamily: "Ariel",
        fontSize: 20,
        bottom: 335
    }, 
    background: {
        backgroundColor: 'linen',
    }
})