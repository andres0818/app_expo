import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from "../components/StyledTextInput";

const initialValues = {
  email: "",
  password: "",
};

const FormikInputValue = ({ name, ...props }) => {
  const [filed, meta, helpers] = useField(name);
  return (
    <StyledTextInput
      value={filed.value}
      onChangeText={(value) => helpers.setValue(value)}
      {...props}
    />
  );
};

export default function Login() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue name="email" placeholder="E-mail" />
            <FormikInputValue
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Button title="Log in" onPress={handleSubmit} />
          </View>
        );
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
});
