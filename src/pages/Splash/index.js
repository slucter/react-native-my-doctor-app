import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILlogo } from '../../assets/img';
import { colors } from '../../utils';

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.page}>
      <ILlogo />
      <Text style={styles.title}>My Doctorz</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.secondary,
    marginTop: 20,
  },
});
