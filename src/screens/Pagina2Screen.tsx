import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appThemes';

interface Props extends StackScreenProps<any, any> {}

export const Pagina2Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>

      <Button
        title="Página 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
};
