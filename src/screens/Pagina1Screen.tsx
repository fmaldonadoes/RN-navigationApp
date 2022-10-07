import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/appThemes';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Text>Navegar con argumentos</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: 'slateblue'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: 'sandybrown'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Jaime',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Jaime</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
