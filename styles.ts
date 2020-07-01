import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: "column",
    paddingTop: 30,
    paddingBottom: 15,
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },

  startText: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 10,
    textDecorationLine: 'underline'
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },

  toDoInputContainer: {
    width: "80%",
    marginTop: 10,
    paddingLeft: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 2,
  },

  toDoListItemContainer: {
    
  },

  toDoListItem: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center',
    backgroundColor: '#FBFBFB',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 20,
    padding: 2,
    paddingRight: 12
  },

  listText : { 
    flex: 1, 
    paddingLeft: 10
  }
});

export default styles