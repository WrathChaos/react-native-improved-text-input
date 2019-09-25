import React, { useState } from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import TextInput from "react-native-improved-text-input";

const App = () => {
  const [textValue, setTextValue] = useState(null);

  handleTextOnChange = textValue => {
    setTextValue(textValue);
  };

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
          style={{
            marginTop: "50%",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TextInput
            value={textValue}
            selectionColor={"red"}
            onChangeText={this.handleTextOnChange}
            style={{ fontSize: 20, color: "red" }}
            placeholder="Improved TextInput Placeholder"
            placeholderStyle={{
              fontSize: 16,
              fontWeight: "bold"
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
