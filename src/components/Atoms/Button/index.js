import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button({ type, title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(type)}>
      <Text style={styles.textBtn(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: type === 'secondary' ? '#ffff' : '#0BCAD4',
  }),
  textBtn: type => ({
    fontSize: 18,
    color: type === 'secondary' ? '#112340' : '#ffff',
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
  }),
});
