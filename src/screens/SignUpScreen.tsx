// src/screens/SignUpScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { signUp } from '../services/authService';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [message, setMessage] = useState('');

  async function handleSignUp() {
    try {
      const user = await signUp(email, password, displayName);
      setMessage(`Usuário criado com email: ${user.email}`);
    } catch (error) {
      setMessage(`Erro ao criar conta: ${error}`);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput
        value={displayName}
        onChangeText={setDisplayName}
        style={styles.input}
      />
      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={styles.input}
      />
      <Text>Senha:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      {message ? <Text>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
});