import { StyleSheet, Text, View, ScrollView, Image } from "react-native"
import {images} from '../'

export const Yada = () => {
    return (
        <ScrollView style={styles.background}>
           <Image source={{uri: 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/326730766_696903221912998_3493565974473042807_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=oEGfU9eawT0AX96aZoU&_nc_oc=AQn02JFW-pDFNdwdcC08s0vBTVDBaDIcq-5ea2go8rKEuLaAhNvYF7sbvzF7Vjx7Drg&_nc_ht=scontent-lga3-1.xx&oh=00_AfA6QkCGT8cc6YWgEaI7JHax9OWHvg38IAuvRlQUoYvqsA&oe=645989DE'}} style={styles.image}/>
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
        bottom: '27%',
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
        bottom: '55%',
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
        bottom: '53%',
        fontWeight: 'bold'
    }, 
    background: {
        backgroundColor: 'linen',
        flex:1
    }, 
    schedule: {
        bottom: '50%',
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontFamily: 'Arial',
        fontWeight: 'bold'
    },
    join: {
        bottom: '50%',
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
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 150,
        left: '25%',
        top: '2%',
        marginBottom: '100%'
    }
})