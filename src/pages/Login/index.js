import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILlogo } from '../../assets/img';
import { Button, Input, Link, Gap } from '../../components';
export default function index() {
  return (
    <View style={styles.page}>
      <ILlogo />
      <Gap height={40} />
      <Text style={styles.myText}>Masuk dan mulai berkonsultasi</Text>
      <Gap height={40} />
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link text="Forgot my password" size={12} />
      <Gap height={40} />
      <Button title="Sign in" />
      <Gap height={30} />
      <Link text="Create new account" size={16} align="center" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    backgroundColor: 'white',
  },
  myText: {
    color: '#000',
    fontSize: 20,
    maxWidth: 153,
    fontFamily: 'Nunito-SemiBold',
  },
});
