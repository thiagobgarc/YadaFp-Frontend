import { useCallback, useEffect, useState } from "react"
import { Text, Image, View, StyleSheet, ScrollView } from "react-native"
import { Toolbar } from "./Toolbar"
import { About } from "./About"

const URL = "https://yadafb-backend.herokuapp.com/yadafp/"

export const MainPage = () => {
    const [form, setForm] = useState({})

    const getForm = useCallback (async () => {
        const form = await fetch(`${URL}`)
        const data = await form.json()
        setForm(data)
    }, [])

    useEffect(() => {
        getForm()
    }, [])

    return (
        <ScrollView style={styles.color}>
            <Text style={styles.title}>
                Welcome to 
            </Text>
            <Image source={{uri: 'https://assembly-of-god-world-vision-ministry-youth.square.site/uploads/b/6d194390-5b84-11ea-b829-138bd9785118/902c45649a4729c9831f8b07a722e7f5.png'}} style={styles.image}/>
            <Text style={styles.text}>
                AGWV
            </Text>
            <Text style={styles.text2}>
                Mobile
            </Text>
            <About style={styles.about}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 150,
        left: '25%',
        top: '20%',
        marginBottom: '100%'
    },
    text: {
        fontSize: 50,
        textAlign: 'center',
        color:'black',
        bottom: '20%',
    },
    title: {
        fontSize: 50,
        textAlign: 'center',
        top: '15%',
        color:'black'
    },
    text2: {
        fontSize: 35,
        textAlign: 'center',
        color:'black',
        bottom: '20%',
    },
    color: {
        backgroundColor: 'linen',
        flex: .5,
        // border: 'solid',
        // borderColor: 'black',
        // borderWidth: 2,
    },
    about: {
        color: 'black',
        
    }
})