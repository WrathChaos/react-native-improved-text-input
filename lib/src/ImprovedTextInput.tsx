import * as React from "react";
import {StyleProp, TextInput, TextStyle} from "react-native";

export interface ImprovedTextInputProps {
    style?: StyleProp<TextStyle>;
    placeholderStyle?: StyleProp<TextStyle>;
    value?: string | null;
}

const ImprovedTextInput: React.FC<ImprovedTextInputProps> = ({ style, placeholderStyle, value, ...rest }) => (
  <TextInput {...rest} style={!value ? [style, placeholderStyle] : style} />
);

export default ImprovedTextInput;
