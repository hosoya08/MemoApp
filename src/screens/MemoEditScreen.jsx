import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/circleButton';

export default function MemoEditScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton name="check" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27, // 縦
    paddingVertical: 32, // 横
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 14,
    lineHeight: 24,
  },
});
