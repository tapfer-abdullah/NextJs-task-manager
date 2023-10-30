"use client"

import React, { createContext, useEffect, useState } from 'react';
import { axiosHttp } from './axiosHttp';

export const AuthContext = createContext({});
const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState({});

    useEffect(() => {

        axiosHttp.get('/loggedin-user')
            .then(res => {
                setUserData(res.data?.userData)
            })
            .catch(error => console.log(error.message))

    }, [])

    return (
        <AuthContext.Provider value={{ userData, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;