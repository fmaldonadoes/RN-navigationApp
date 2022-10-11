import {useContext} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores, styles} from '../theme/appThemes';

import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);
  const {favoriteIcon} = authState;

  return (
    <View style={{marginTop: insets.top}}>
      <Text style={styles.globalMargin}>SettingsScreen</Text>

      <Text style={styles.globalMargin}>
        {JSON.stringify(authState, null, 3)}
      </Text>

      {favoriteIcon && (
        <Icon name={favoriteIcon} size={100} color={colores.primary} />
      )}
    </View>
  );
};
