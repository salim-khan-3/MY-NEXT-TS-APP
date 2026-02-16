"use client"
import { ThemeContext } from '@/components/ThemeProvider';
import React, { useContext } from 'react';

const Login = () => {

    const theme = useContext(ThemeContext)
    return (
        <div>
            <h1 className="text-primary">this is login</h1>
        </div>
    );
};

export default Login;