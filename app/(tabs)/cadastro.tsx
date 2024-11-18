import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, useWindowDimensions } from "react-native";
import { supabase } from "../supabase";

export default function RegisterScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const buttonWidth = width > 600 ? "30%" : "80%"; // Ajusta largura dos botões

  async function handleRegister() {
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) alert(error.message)
    else if (!session) {
      alert('Por favor, verifique seu email!')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={[styles.input, { width: buttonWidth }]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, { width: buttonWidth }]}
        placeholder="Senha"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <View style={[styles.buttonContainer, { width: buttonWidth }]}>
        <Button title="Cadastrar" onPress={handleRegister} />
      </View>
      <View style={[styles.buttonContainer, { width: buttonWidth }]}>
        <Button title="Voltar para Login" onPress={() => router.push("/")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    alignSelf: "center"
  },
  buttonContainer: {
    marginVertical: 10,
    alignSelf: "center",
  },
});
