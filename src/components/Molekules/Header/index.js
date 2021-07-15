import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ArrowBack } from '../../../assets/img/icon';
import { Gap } from '../../Atoms';

const index = ({ title }) => {
  return (
    <View style={styles.wrapper}>
      <ArrowBack />
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
    color: '#112340',
    fontFamily: 'Nunito-SemiBold',
    flex: 1,
    textAlign: 'center',
  },
});
