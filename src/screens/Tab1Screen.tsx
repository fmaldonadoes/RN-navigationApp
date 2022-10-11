import React, {useEffect} from 'react';

import {Text, View} from 'react-native';
import {styles} from '../theme/appThemes';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  // useEffect(() => {

  // }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Íconos</Text>
      <Text>
        <TouchableIcon iconName="rocket-outline" />
        <TouchableIcon iconName="compass-outline" />
        <TouchableIcon iconName="camera-outline" />
        <TouchableIcon iconName="alarm-outline" />
        <TouchableIcon iconName="cloud-outline" />
        <TouchableIcon iconName="sunny-outline" />
        <TouchableIcon iconName="flower-outline" />
        <TouchableIcon iconName="snow-outline" />
        <TouchableIcon iconName="laptop-outline" />
        <TouchableIcon iconName="boat-outline" />
        <TouchableIcon iconName="train-outline" />
        <TouchableIcon iconName="bicycle-outline" />
        <TouchableIcon iconName="cash-outline" />
        <TouchableIcon iconName="car-outline" />
        <TouchableIcon iconName="cart-outline" />
      </Text>
    </View>
  );
};
