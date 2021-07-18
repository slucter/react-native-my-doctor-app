import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { fonts } from '../../../utils';

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
    fontFamily: fonts.primary[400],
  },
  myLabel: {
    fontSize: 16,
    color: '#7D8797',
    fontFamily: fonts.primary[400],
    marginBottom: 6,
  },
});
