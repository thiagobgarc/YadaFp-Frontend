import { StyleSheet, Text, View, ScrollView, TextInput, Button } from "react-native"
import { useCallback, useMemo, useState, useEffect } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native"
import { FormFood } from "./FormFood"
import { Component } from "react"

const URL = "https://yadafb-backend.herokuapp.com/yadafp/"
export const FoodPantry = () => {
    const [form, setForm] = useState({})
    const [inputState, setInputState] = useState('')
    const [inputStyle, setInputStyle] = useState(false)

    const updateTextInput = useCallback((textValue) => {
        setInputState((prev) => textValue)
    }, [])

    const getForm = useCallback (async () => {
        const form = await fetch(`${URL}`)
        const data = await form.json()
        setForm(data)
    }, [])

    useEffect(() => {
        getForm()
    }, [])

    const inputError = useMemo(() => ({
        ...styles.input,
        borderColor: inputStyle ? 'red' : 'gray'
      }), [inputStyle])
    // const pressNavigate = navigation.navigate()
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
            {/* <Button title="Click to Sign-in!" onPress={()=> navigation.navigate('FormFood')}/> */}

        <Text style={styles.sign_in}>
            Food Pantry Sign-in:
        </Text>
        <TextInput
        onPress={updateTextInput}
        value={inputState}
        style={inputError}
        placeholder="Name"
        />
        <TextInput
        onPress={updateTextInput}
        value={inputState}
        style={inputError}
        placeholder="phone"
        />
        <TextInput
        onPress={updateTextInput}
        value={inputState}
        style={inputError}
        placeholder="address"
        />
        <TextInput
        onPress={updateTextInput}
        value={inputState}
        style={inputError}
        placeholder="service"
        />
        <TextInput
        onPress={updateTextInput}
        value={inputState}
        style={inputError}
        placeholder="text"
        />
        <TextInput
        onPress={updateTextInput}
        value={inputState}
        style={inputError}
        placeholder="date"
        />
        {/* Volunteer sign up */}
        <Text style={styles.volunteerSignup}>
            Volunteer Sign-up:
        </Text>
        <TextInput
        onPress={updateTextInput}
        value={inputState}
        style={styles.volunteer}
        placeholder="name"
        />
        <TextInput
        onPress={updateTextInput}
        value={inputState}
        style={styles.volunteer}
        placeholder="phone"
        />
        <TextInput
        onPress={updateTextInput}
        value={inputState}
        style={styles.volunteer}
        placeholder="date"
        />
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
        flex: 1,
        // justifyContent: 'center'
    },
    text2: {
        fontSize: 20,
        color: 'black',
        marginTop: 50,
        textAlign: 'center',
        marginBottom: '200%'
    },
    schedule: {
        textAlign: 'center',
        color: 'black',
        fontSize: 50,
        fontFamily: 'cursive',
        bottom: 750
    },
    schedule2: {
        textAlign: 'center',
        fontSize: 20,
        bottom:750,
        color: 'black'
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 60,
        paddingVertical: 0,
        marginVertical: 0,
        bottom: 630,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        marginBottom: 10
      },
      sign_in: {
        textAlign: 'center',
        fontSize: 50,
        bottom: 650,
        color: 'black',
        fontFamily: 'cursive'
      }, 
      volunteerSignup: {
        textAlign: 'center',
        fontSize: 50,
        bottom: 520,
        color: 'black',
        fontFamily: 'cursive'
      },
      volunteer: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 60,
        paddingVertical: 0,
        marginVertical: 0,
        bottom: 520,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        marginBottom: 10
      }
})