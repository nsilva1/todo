import React, { Component } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";

class App extends Component {
  state = {
    todo: [],
    text: ""
  };

  addTodo = () => {
    var todo = this.state.text;
    var arr = this.state.todo;
    arr.push(todo);
    this.setState({ todo: arr, text: "" });
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>First Native App</Text>
        <TextInput style={styles.inputStyle} value={this.state.text} />
        <Button title="Add Todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inputStyle: {
    height: 40,
    borderColor: "blue",
    borderWidth: 1
  }
};

export default App;
