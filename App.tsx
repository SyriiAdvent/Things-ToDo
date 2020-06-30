import React, { useState } from "react";
import { Text, View, Button, TextInput, FlatList } from "react-native";
import { CheckBox } from 'react-native-elements'

import styles from './styles'
import idGen from './utils/idGenerater'

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
    if(item.text.length >= 1) {
      setThingsToDo([...thingsToDo, item]);
      setInputValue('');
    }
  };

  const completedHandler = (thingsToDoId: string) => {
    const newArr = [...thingsToDo]
    const arrIndex = newArr.findIndex(item => item.id === thingsToDoId)
    newArr[arrIndex] = {
      ...newArr[arrIndex], completed: !newArr[arrIndex].completed
    }

    setThingsToDo(newArr)
  }

  const deleteItem = (thingsToDoId: string) => {
    const update = thingsToDo.filter(del => del.id !== thingsToDoId)
    setThingsToDo(update)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.startText}>Things</Text>

      <View style={styles.mainHeader}>
        <TextInput
          placeholder={inputValue.length >= 1 ? '' : 'Things to do.'}
          style={styles.toDoInputContainer}
          onChangeText={handleChange}
          value={inputValue}
        />
        <Button title='Add' onPress={() => addToDo({ id: idGen(), text: inputValue, completed: false })} />
      </View>

      <FlatList data={thingsToDo} renderItem={listData => (
        <View style={styles.toDoListItem} >
          <CheckBox center size={24} checkedColor='green' checked={listData.item.completed} onPress={() => completedHandler(listData.item.id)} />
          <Text style={styles.listText}>{listData.item.text}</Text>
          {
            listData.item.completed === true ? <Button title='DELETE' color='red' onPress={() => deleteItem(listData.item.id)} /> : null
          }
        </View>
      )} />
    </View>
  );
}