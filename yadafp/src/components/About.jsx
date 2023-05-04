import { useState } from "react"
import { StyleSheet, Text, View, ScrollView } from "react-native"
import { TouchableOpacity } from "react-native"

export const About = () => {
    const [visible, setVisible] = useState(false)
    const aboutUs = () => {
        setVisible(!visible)
    }
    return (
        <View>
            <TouchableOpacity onPress={aboutUs}>
            <Text style={styles.text}>
                About us
            </Text>
            </TouchableOpacity>
            {visible && (
                <Text style={styles.text}> 
                    Welcome to our Christian youth group! We are a community of young people who gather to grow in our faith, support each other, and serve our community. Our mobile app helps us stay connected even when we can't meet in person. You can use it to see our events calendar, join discussions, access Bible study resources, submit prayer requests, sign up for volunteer opportunities, and contact our leaders. We're excited to have you join us!
                </Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        justifyContent: 'center',
        flex: 1,
        top: 240,
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        position: 'relative',
    },
    about: {
        top: 250,
        justifyContent: 'center',
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        position: 'relative'
    }
})