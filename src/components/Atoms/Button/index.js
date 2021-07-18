import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../../utils';
import IconOnly from './iconOnly';

export default function Button({ type, title, onPress, icon }) {
  if (type === 'icon-only') {
    return <IconOnly onPress={onPress} icons={icon} />;
  }
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
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
  }),
  textBtn: type => ({
    fontSize: 18,
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
  }),
});
