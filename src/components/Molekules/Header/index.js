import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Button, Gap } from '../../Atoms';

const index = ({ title, onPress, type, icons }) => {
  return (
    <View style={styles.wrapper}>
      <Button type={type} icon={icons} onPress={onPress} />
      <Text style={styles.myTitle}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  myTitle: {
    fontSize: 20,
    color: colors.secondary,
    fontFamily: fonts.primary[600],
    flex: 1,
    textAlign: 'center',
  },
});
