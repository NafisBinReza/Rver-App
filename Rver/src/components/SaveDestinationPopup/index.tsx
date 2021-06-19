import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import styles from "./styles";

interface Props {
  onAccept: (text: string) => void
  onReject: () => void
}

export default function SaveDestinationPopup(props: Props) {
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        style={styles.input}
      />
      <Pressable style={styles.button} onPress={() => text !== '' && props.onAccept(text)}><Text style={styles.buttonText}>Save</Text></Pressable>
      <Pressable style={styles.button} onPress={props.onReject}><Text style={styles.buttonText}>Cancel</Text></Pressable>
    </View>
  )
}
