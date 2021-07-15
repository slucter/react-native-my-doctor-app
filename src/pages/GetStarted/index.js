import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ILbg, ILlogo } from '../../assets/img';
import { Button, Gap } from '../../components/index';

export default function GetStarted({ navigation }) {
  return (
    <ImageBackground source={ILbg} style={styles.page}>
      <View style={styles.wrapTop}>
        <ILlogo />
        <Text style={styles.textTitle}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View style={styles.wrapBottom}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => navigation.replace('Login')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    backgroundColor: '#eeee',
  },
  wrapTop: {
    flex: 1,
  },
  wrapBottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textTitle: {
    fontSize: 28,
    color: '#fff',
    marginTop: 90,
    fontFamily: 'Nunito-SemiBold',
  },
});
