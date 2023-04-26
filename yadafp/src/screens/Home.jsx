import { Text, View, ScrollView, StyleSheet } from "react-native"
import { Toolbar } from "../components/Toolbar"
import {MainPage} from "../components/MainPage"
import { Yada } from "../components/Yada"
import { FoodPantry } from "../components/FoodPantry"
import { About } from "../components/About"

export const Home = () => {
    return (
        <View style={styles.color}>
            <MainPage/>
        </View>
    )
}

const styles = StyleSheet.create({
    color: {
        backgroundColor: 'white'
    }
})