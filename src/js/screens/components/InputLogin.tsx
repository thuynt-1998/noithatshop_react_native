import React, { memo } from "react";
import { FieldError } from "react-hook-form";
import { View, TextInput as TextInputRender, StyleSheet } from "react-native";
import { DefaultTheme, HelperText, TextInput } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(120,120,120)",
    text: "rgb(120,120,120)",
    placeholder: "rgb(120,120,120)",
  },
};

interface PropsGlobal {
  onValue: Function;
  errors: FieldError | undefined;
  title: string;
  left: React.ReactNode;
  secureTextEntry: boolean;
  value: string;
}

const InputLogin = (props: PropsGlobal) => {
  const { onValue, errors, title, left, secureTextEntry, value } = props;

  return (
    <View style={{ width: "100%" }}>
      <TextInput
        accessibilityLabel="input"
        style={[styles.textInput, styles.textInputSuccess]}
        onChangeText={onValue}
        theme={theme}
        left={<TextInput.Icon name={()=>left} />}
        render={(props) => (
          <TextInputRender
            {...props}
            style={[styles.textInput]}
          />
        )}
        underlineColor="rgb(120,120,120)"
        placeholder={title}
        secureTextEntry={secureTextEntry}
        value={value}
      />
      {errors && <HelperText style={styles.textInputError} type="error" testID="nameError">
        {errors.message}
      </HelperText>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: { paddingHorizontal: 20 },
  textInput: {
    backgroundColor: "transparent",
    textAlign: "center",
    height: 50,
    color: "rgb(120,120,120)",
  },
  textInputSuccess: {
    borderBottomColor: "white",
  },
  textInputError: {
    borderBottomColor: "red",
  },
});


export default memo(InputLogin);
