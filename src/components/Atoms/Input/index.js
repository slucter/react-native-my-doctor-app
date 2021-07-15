import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function index({ label }) {
  return (
    <View>
      <Text style={styles.myLabel}>{label}</Text>
      <TextInput style={styles.myInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  myInput: {
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
  },
  myLabel: {
    fontSize: 16,
    color: '#7D8797',
    fontFamily: 'Nunito-Regular',
    marginBottom: 6,
  },
});
