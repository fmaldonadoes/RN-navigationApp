import {Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useEffect, useContext} from 'react';

import {RootStackParams} from '../navigator/StackNavigator';
import {styles} from '../theme/appThemes';
import {AuthContext} from '../context/AuthContext';

// interface RouteParams {
//   id: number;
//   nombre: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  const params = route.params; //as RouteParams;

  const {changeUsername} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);

  useEffect(() => {
    changeUsername(params.nombre);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
