import * as React from "react";
import {StyleProp, TextInput, TextStyle, TextInputProps} from "react-native";

export interface ImprovedTextInputProps extends TextInputProps {
    style?: StyleProp<TextStyle>;
    placeholderStyle?: StyleProp<TextStyle>;
}

const ImprovedTextInput: React.FC<ImprovedTextInputProps> = ({ style, placeholderStyle, value, ...rest }) => (
  <TextInput {...rest} style={!value ? [style, placeholderStyle] : style} />
);

export default ImprovedTextInput;
