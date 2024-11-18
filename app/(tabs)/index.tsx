import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, useWindowDimensions } from "react-native";
import { supabase } from "../supabase";

export default function LoginScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const buttonWidth = width > 600 ? "30%" : "80%"; // Ajusta largura dos botões

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  
    if (error) {
      if (error.message.includes("Invalid login credentials")) {
        alert("ERRO: Usuário não cadastrado. Por favor, verifique as credenciais ou cadastre-se.");
      } else {
        alert(error.message);
      }
    } else {
      alert("Login realizado com sucesso!");
      // Redirecionamento para outra tela, se necessário
      router.replace('./home');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
        <Button title="Login" onPress={handleLogin} />
      </View>
      <View style={[styles.buttonContainer, { width: buttonWidth }]}>
        <Button title="Cadastrar" onPress={() => router.push("./cadastro")} />
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
