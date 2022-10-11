import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

// Definir cómo luce el context
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

// Interfaz usada para indicar la manera en que luce y qué expone
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  changeUsername: (userName: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Exponer el proveedor del estado. Conocido también como High Order Component
export const AuthProvider = ({children}: {children: JSX.Element}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  const changeUsername = (userName: string) => {
    dispatch({type: 'changeUsername', payload: userName});
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          authState,
          signIn,
          logout,
          changeFavoriteIcon,
          changeUsername,
        }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
