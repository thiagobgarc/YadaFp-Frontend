import { useState, useEffect } from 'react';
import { ScrollView, Text, TextInput, Button, View, StyleSheet, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FoodPantry = () => {
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
      <Button onPress={saveData} title='Add Name' style={styles.buttonSignin}/>

      {data.map((item) => (
        <View key={item.id} >
          <Text style={styles.displayName}>{item.title}</Text>
        </View>
      ))}
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
      },
      displayName: {
        textAlign: 'center',
        fontSize: 25,
        bottom: 260
      }
})