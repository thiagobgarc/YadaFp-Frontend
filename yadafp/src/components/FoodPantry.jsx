import { useState, useEffect } from 'react';
import { ScrollView, Text, TextInput, Button, View, StyleSheet, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const URL = 'https://yadafp-backend.herokuapp.com/yada/'

export const FoodPantry = () => {
  // DATA STATE
  const [data, setdata] = useState([])
  // NAME STATE
  const [newName, setNewName] = useState('')
  // PHONE STATE
  const [newPhone, setNewPhone] = useState('')

// DECLARES FUNCTION AT getData
  const getData = () => {
    // GET REQUEST
    fetch(`${URL}`)
      // PROMISE RETURN BY FETCH
      .then(resp => resp.json())
      .then(data => {
        console.log('data:', data)
        // UPDATE STATE WITH FETCH DATA
        setdata(data)
      })
      .catch(error => console.error(error))
  }
// HANDLE NAME CHANGES 
  const handleNameChange = (text) => {
    setNewName(text)
  }
// HANDLE PHONE CHANGES
  const handlePhoneChange = (text) => {
    setNewPhone(text)
  }

  const handleSubmit = async () => {
    // LOG NEW NAME
    console.log('New name:', newName);
    // LOG NEW PHONE
    console.log('New phone:', newPhone);
    // RESPONSE FETCH URL
    const response = await fetch(`${URL}`, {
        // METHOD POST
      method: 'POST',
    // STRAIGHT FORWARD HEADERS
      headers:{
        // ACCEPTS APPLICATION/JSON AND CONTENT-TYPE 
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    // CONVERT JS OBJECT TO JSON STRING USING STRINGIFY
      body: JSON.stringify({ name: newName, phone: newPhone })
    })
  
    console.log('Response:', response)
    // EXTRACT AND PARSE JSON BODY OF HTTP RESPONSE
    const json = await response.json()
    // LOG NEW DATA AT JSON
    console.log('New data:', json)
    // STATE UPDATE
    setNewName('')
    setNewPhone('')
    // RESPONSE TO USER INPUT
    getData()
  };
  
  

  useEffect(() => {
    getData()
  }, [])

  return (
    <ScrollView style={styles.background}>
      <Text style={styles.text2}>
        Our food pantry welcomes both volunteers and those in need of assistance. As a volunteer, you have the opportunity to serve and demonstrate Christ's love by providing nourishing food to those who are struggling. If you are in need of assistance, the food pantry provides a welcoming and supportive environment where you can receive physical nourishment and also experience the love of God through the kindness of others.
      </Text>
      <Text style={styles.schedule}>Schedule:</Text>
      <Text style={styles.schedule2}>Saturdays: 9am to 1:30pm</Text>

      <Text style={styles.sign_in}>Food Pantry Sign-in:</Text>
      <TextInput
      placeholder='Enter Name'
      value={newName}
      onChangeText={handleNameChange}
      style={styles.input}
      />

      <TextInput
        placeholder="Phone Here"
        value={newPhone}
        onChangeText={handlePhoneChange}
        style={styles.input}
      />
      <Pressable>
        <Text
        title="Submit"
        onPress={handleSubmit}
        style={styles.buttonSignin}>
          Submit
        </Text>
      </Pressable>
      

      {data.map((item) => {
        return (
    <View key={item.id}>
      <Text style={styles.displayName}>{item.name} {item.phone}</Text>
    </View>
        )
  })}
 
    </ScrollView>

  );
};

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
        marginBottom: '100%',
        fontWeight: 'bold'
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
        bottom: 240,
        textAlign: 'center',
        marginLeft: 100,
        marginRight: 100,
        borderBottomWidth: 5,
        borderBottomColor: 'skyblue',
        color: 'black'
      },
      displayName: {
        textAlign: 'center',
        fontSize: 25,
        bottom: 220,
        color:'black'
      }
})