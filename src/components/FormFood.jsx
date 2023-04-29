import { TextInput, Text, ScrollView, StyleSheet } from "react-native"
import { useEffect, useMemo, useState, useCallback } from "react"
import { Component } from "react"


const URL = "https://yadafb-backend.herokuapp.com/yadafp/"

export const FormFood = () => {

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

    return (
        <ScrollView>
        <Text style={styles.sign_in}>
            Food Pantry Sign-in:
        </Text>
        <TextInput
        onPress={updateTextInput}
        value={inputState}
        style={inputError}
        />
        <TextInput
        onPress={updateTextInput}
        value={inputState}
        style={inputError}
        />
        <TextInput
        onPress={updateTextInput}
        value={inputState}
        style={inputError}
        />
        <TextInput
        onPress={updateTextInput}
        value={inputState}
        style={inputError}
        />
        <TextInput
        onPress={updateTextInput}
        value={inputState}
        style={inputError}
        />
        <TextInput
        onPress={updateTextInput}
        value={inputState}
        style={inputError}
        />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 50,
        paddingVertical: 0,
        marginVertical: 0,
        bottom: 250,
        backgroundColor: 'white'
      },
      sign_in: {
        textAlign: 'center',
        fontSize: 50,
        bottom:290,
        color: 'black',
        fontFamily: 'cursive'
      }
})