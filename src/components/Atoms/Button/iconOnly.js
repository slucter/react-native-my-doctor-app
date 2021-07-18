import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowBackDark } from '../../../assets/img';

const iconOnly = ({ onPress, icons }) => {
  const Icon = () => {
    if (icons === 'back-dark') {
      return <ArrowBackDark />;
    }
    if (icons === 'back-light') {
      return <ArrowBackDark />;
    }
    return <ArrowBackDark />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default iconOnly;

const styles = StyleSheet.create({});
