import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appThemes';
import {useContext} from 'react';

import {AuthContext} from '../context/AuthContext';

export const ContactsScreen = () => {
  const {signIn, authState} = useContext(AuthContext);
  const {isLoggedIn} = authState;

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactsScreen</Text>

      {!isLoggedIn && <Button title="SignIn" onPress={signIn} />}
    </View>
  );
};
