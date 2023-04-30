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
            <Text style={styles.join}>
                Come join us!
            </Text>
            <Text style={styles.schedule}>
                We meet daily on Tuesdays at 8pm
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
        top: '32%',
        marginBottom: '100%',
        borderTopColor: 'black',
        borderWidth: 1,
        marginLeft: 50,
        marginRight: 50,
        backgroundColor: 'white',
        borderRadius: 15
    },
    mission: {
        fontSize: 50,
        fontFamily: 'cursive',
        color: 'black',
        textAlign: 'center',
        bottom: '20%',
        backgroundColor: 'white',
        borderRadius: 15,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopColor: 'black',
        borderTopWidth: 1
    },
    summary: {
        textAlign: 'center',
        color: 'black',
        fontFamily: "Arial",
        fontSize: 20,
        bottom: '20%'
    }, 
    background: {
        backgroundColor: 'linen',
        flex:1
    }, 
    schedule: {
        bottom: '13.5%',
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontFamily: 'Arial'
    },
    join: {
        bottom: '13.5%',
        textAlign: 'center',
        color: 'black',
        fontSize: 50,
        fontFamily: 'cursive',
        backgroundColor: 'white',
        borderRadius: 15,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopColor: 'black',
        borderTopWidth: 1
    }
})