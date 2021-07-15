import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    color: '#7D8797',
    fontSize: size ? size : 12,
    textDecorationLine: 'underline',
    fontFamily: 'Nunito-Regular',
    textAlign: align,
  }),
});
