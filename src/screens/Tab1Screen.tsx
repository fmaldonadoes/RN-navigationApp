import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {Text, View} from 'react-native';
import {colores, styles} from '../theme/appThemes';

export const Tab1Screen = () => {
  // useEffect(() => {

  // }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Íconos</Text>
      <Text>
        <Icon name="rocket-outline" size={50} color={colores.primary} />
        <Icon name="compass-outline" size={50} color={colores.primary} />
        <Icon name="camera-outline" size={50} color={colores.primary} />
        <Icon name="alarm-outline" size={50} color={colores.primary} />
        <Icon name="cloud-outline" size={50} color={colores.primary} />
      </Text>
    </View>
  );
};
