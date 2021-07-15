import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Gap, Input } from '../../components';
import { Header } from '../../components/Molekules';

export default function index() {
  return (
    <View style={styles.wrapper}>
      <Header title="Daftar Akun" />
      <View style={styles.container}>
        <Gap height={24} />
        <Input label="Fullname" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button title="Continue" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    padding: 40,
    paddingTop: 0,
  },
});
