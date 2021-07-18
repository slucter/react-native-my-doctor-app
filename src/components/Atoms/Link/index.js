import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const index = ({ text, size, align }) => {
  return (
    <View>
      <Text style={styles.myLink(size, align)}>{text}</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  myLink: (size, align) => ({
    color: colors.text.secondary,
    fontSize: size ? size : 12,
    textDecorationLine: 'underline',
    fontFamily: fonts.primary[400],
    textAlign: align,
  }),
});
