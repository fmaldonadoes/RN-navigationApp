import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appThemes';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

export const AlbumsScreen = () => {
  const {
    authState: {isLoggedIn},
    logout,
  } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>AlbumsScreen</Text>
      {isLoggedIn && <Button title="LogOut" onPress={logout} />}
    </View>
  );
};
