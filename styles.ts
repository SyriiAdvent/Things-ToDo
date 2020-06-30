import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 10
  },

  startText: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 10,
    textDecorationLine: 'underline'
  },

  mainHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  toDoInputContainer: {
    width: "80%",
    paddingLeft: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 2,
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