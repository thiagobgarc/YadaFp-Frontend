import { TextInput, Text, ScrollView, StyleSheet } from "react-native"
import { useEffect, useMemo, useState, useCallback } from "react"
import { Component } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"



const URL = "https://yadafb-backend.herokuapp.com/yadafp/"

export const FormFood = () => {
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([]);
  
    const getData = async() => {
      try {
        const storedData = await AsyncStorage.getItem('data');
        if(storedData !== null){
          setData(JSON.parse(storedData));
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    const handleInput = (value) => {
      setInputValue(value);
    } 
     
    const saveData = async () => {
      try {
        const newItem = { id: Date.now(), title: inputValue };
        const newData = [...data, newItem];
        await AsyncStorage.setItem('data', JSON.stringify(newData));
        setData(newData);
        setInputValue('');
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <ScrollView style={styles.background}>
        <Text style={styles.text}>Food Pantry</Text>
        <Text style={styles.text2}>
          Our Food pantry welcomes both volunteers and those in need of assistance. As a volunteer, you have the opportunity to serve and demonstrate Christ's love by providing nourishing food to those who are struggling. If you are in need of assistance, the food pantry provides a welcoming and supportive environment where you can receive physical nourishment and also experience the love of God through the kindness of others.
        </Text>
        <Text style={styles.schedule}>Schedule:</Text>
        <Text style={styles.schedule2}>Saturdays: 9am to 1:30pm</Text>
  
        <Text style={styles.sign_in}>Food Pantry Sign-in:</Text>
        <TextInput
          placeholder="Enter Name"
          value={inputValue}
          onChangeText={handleInput}
          style={styles.input}
        />
        <Pressable>
          <Text style={styles.buttonSignin} onPress={saveData}>Add name</Text>
        </Pressable>
  
        {data.map((item) => (
          <View key={item.id} >
            <Text style={styles.displayName}>{item.title}</Text>
          </View>
        ))}
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