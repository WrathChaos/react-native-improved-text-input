import React from "react";
import { TextInput } from "react-native";

const ImprovedTextInput = ({ style, placeholderStyle, value, ...rest }) => (
  <TextInput {...rest} style={!value ? [style, placeholderStyle] : style} />
);

export default ImprovedTextInput;
