"use client"

import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { axiosHttp } from './axiosHttp';

export const AuthContext = createContext({});
const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState({});
    const [click, setClick] = useState(0);

    useEffect(() => {

        try {
            axiosHttp.get('/loggedin-user')
                .then(res => {
                    setUserData(res.data?.userData)
                })
                .catch(error => {
                    // toast.error(error.response?.data?.message);
                    console.log(error.response?.data)
                })
        }
        catch (error) {
            console.log(error)
        }

    }, [click]);

    return (
        <AuthContext.Provider value={{ userData, setUserData, setClick, click }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;