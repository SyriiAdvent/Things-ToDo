import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

interface IToDo {
  id: string
  text: string;
  completed: boolean;
}

export default function App() {
  const [thingsToDo, setThingsToDo] = useState<IToDo[]>([]);
  const [inputValue, setInputValue] = useState<string>('')

  const handleChange = (enteredText: string) => {
    setInputValue(enteredText)
  }

  const addToDo = (item: IToDo) => {
    setThingsToDo([...thingsToDo, item]);
    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.startText}>Things</Text>

      <View style={styles.mainHeader}>
        <TextInput
          placeholder=' Things to do.'
          style={styles.toDoInputContainer}
          onChangeText={handleChange}
          value={inputValue}
        />
        <Button title='Add' onPress={() => addToDo({ id: Math.random().toString(), text: inputValue, completed: false })} />
      </View>

      <View>
        {thingsToDo.map(item => (
          <View key={item.id} style={styles.toDoListItem} >
            <Text style={{ flex: 1, paddingLeft: 10 }}>{item.text}</Text>
            <Button title='DELETE' onPress={() => null} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    borderColor: "red",
    borderWidth: 1,
  },

  mainHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  toDoInputContainer: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 2,
  },

  startText: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 10,
  },

  toDoListItem: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 20,
    paddingBottom: 5
  }
});
