import { StyleSheet, Text, View, ScrollView } from "react-native"

export const FoodPantry = ({form}) => {
    return (
        <ScrollView style={styles.background}>
            <Text style={styles.text}>
                Food Pantry
            </Text>
            <Text style={styles.text2}>
            Our Food pantry welcomes both volunteers and those in need of assistance. As a volunteer, you have the opportunity to serve and demonstrate Christ's love by providing nourishing food to those who are struggling. If you are in need of assistance, the food pantry provides a welcoming and supportive environment where you can receive physical nourishment and also experience the love of God through the kindness of others.
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: 'black',
        // bottom: 200
    },
    background: {
        backgroundColor: 'linen',
        // flex: 1,
        // justifyContent: 'center'
    },
    text2: {
        // marginbottom: '100%',
        fontSize: 17.5,
        color: 'black',
        marginTop: 50
    }
})