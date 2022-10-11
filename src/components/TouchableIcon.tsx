import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colores} from '../theme/appThemes';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

interface Props {
  iconName: string;
}

export const TouchableIcon = ({iconName}: Props) => {
  const {changeFavoriteIcon} = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon(iconName)}>
      <Icon name={iconName} size={50} color={colores.primary} />
    </TouchableOpacity>
  );
};
