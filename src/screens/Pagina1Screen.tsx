import React from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles, colores} from '../theme/appThemes';
import Icon from 'react-native-vector-icons/Ionicons';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  const {
    authState: {isLoggedIn},
  } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Text>Navegar con argumentos</Text>

      {!isLoggedIn ? (
        <Text style={{...styles.title, color: 'red', textAlign: 'center'}}>
          Sesión no iniciada
        </Text>
      ) : (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{...styles.botonGrande, backgroundColor: 'slateblue'}}
            onPress={() =>
              navigation.navigate('PersonaScreen', {
                id: 1,
                nombre: 'Pedro',
              })
            }>
            <Icon name="man-outline" size={32} color={'white'} />
            <Text style={styles.botonGrandeTexto}>Pedro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{...styles.botonGrande, backgroundColor: 'sandybrown'}}
            onPress={() =>
              navigation.navigate('PersonaScreen', {
                id: 2,
                nombre: 'Susana',
              })
            }>
            <Icon name="woman-outline" size={32} color={'white'} />
            <Text style={styles.botonGrandeTexto}>Susana</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
