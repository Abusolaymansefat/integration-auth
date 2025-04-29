import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const userInfo = {
        email: 'habu@10.com'
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;