import { StyleSheet, Text, View, ScrollView, TextInput, Button, Pressable } from "react-native"
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
        <Pressable>
            <Text onPress={getForm} style={styles.buttonSignin}>
                Sign-in
            </Text>
        </Pressable>
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
        <Pressable>
            <Text onPress={getForm} style={styles.button}>
                Sign-up
            </Text>
        </Pressable>
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
        marginBottom: '100%'
    },
    schedule: {
        textAlign: 'center',
        color: 'black',
        fontSize: 50,
        fontFamily: 'cursive',
        bottom: 320,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        borderRadius: 15,
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },
    schedule2: {
        textAlign: 'center',
        fontSize: 20,
        bottom:322,
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 10,
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 60,
        paddingVertical: 0,
        marginVertical: 0,
        bottom: 240,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderColor: 'black'
      },
      sign_in: {
        textAlign: 'center',
        fontSize: 50,
        bottom: 250,
        color: 'black',
        fontFamily: 'cursive',
        backgroundColor: 'white',
        borderRadius: 15,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopColor: 'black',
        borderTopWidth: 1
      }, 
      volunteerSignup: {
        textAlign: 'center',
        fontSize: 50,
        bottom: 160,
        color: 'black',
        fontFamily: 'cursive',
        backgroundColor: 'white',
        borderRadius: 15,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopColor: 'black',
        borderTopWidth: 1
      },
      volunteer: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 60,
        paddingVertical: 0,
        marginVertical: 0,
        bottom: 150,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        marginBottom: 10
      },
      button: {
        backgroundColor: 'skyblue',
        borderRadius: 15,
        bottom: 140,
        textAlign: 'center',
        marginLeft: 100,
        marginRight: 100,
        borderBottomWidth: 5,
        borderBottomColor: 'skyblue',
        color: 'black'
      }, 
      buttonSignin: {
        backgroundColor: 'skyblue',
        borderRadius: 15,
        bottom: 230,
        textAlign: 'center',
        marginLeft: 100,
        marginRight: 100,
        borderBottomWidth: 5,
        borderBottomColor: 'skyblue',
        color: 'black'
      }
})