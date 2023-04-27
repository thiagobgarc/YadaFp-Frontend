import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native"
import { useCallback, useMemo, useState, useEffect } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native"
import { FormFood } from "./FormFood"



export const FoodPantry = () => {
    
    const Navigation = useNavigation()

    const Navigate = () => {
        Navigation={FormFood}
    }

    return (
        <ScrollView style={styles.background}>
            <Text style={styles.text}>
                Food Pantry
            </Text>
            <Text style={styles.text2}>
            Our Food pantry welcomes both volunteers and those in need of assistance. As a volunteer, you have the opportunity to serve and demonstrate Christ's love by providing nourishing food to those who are struggling. If you are in need of assistance, the food pantry provides a welcoming and supportive environment where you can receive physical nourishment and also experience the love of God through the kindness of others.
            </Text>
            <Text style={styles.schedule}>
                Schedule:
            </Text>
            <Text style={styles.schedule2}>
                Saturdays: 9am to 1:30pm
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
        fontSize: 20,
        color: 'black',
        marginTop: 50,
        textAlign: 'center',
        marginBottom: '100%'
    },
    schedule: {
        textAlign: 'center',
        color: 'black',
        fontSize: 50,
        fontFamily: 'cursive',
        bottom: 340
    },
    schedule2: {
        textAlign: 'center',
        fontSize: 20,
        bottom:340,
        color: 'black'
    },
})