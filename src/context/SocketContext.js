import React, { createContext } from 'react';
import { useSocket } from '../hooks/useSocket';


export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online } = useSocket('http://localhost:8080');
    // const { socket, online } = useSocket('https://bandnames-server.netlify.app/');

    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}