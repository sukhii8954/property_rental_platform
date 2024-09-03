import React, {  createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [isAuthen, setIsAuthen] = useState(false);

    useEffect(() => {
        const storedUser =localStorage.getItem('user');
      const token =localStorage.getItem('authtoken');
      if(storedUser && token){
        setUser(JSON.parse(storedUser));
        setIsAuthen(true);
      }
      else{
        setIsAuthen(false);
      }
    
      
    }, []);
    
    
    const login = (userData ,token) => {
        // setIsAuthenciated(true);    
        setUser(userData);
        setIsAuthen(true);
        localStorage.setItem('user',JSON.stringify(userData));
        localStorage.setItem('authtoken', token);
    };
    
    const logout = () => {
    // setIsAuthenciated(false);

    setUser(null);
    setIsAuthen(false);
    localStorage.removeItem('user');
    localStorage.removeItem('authtoken');
};

const isAuthenticated = user !== null;


return (
    < AuthContext.Provider value ={{isAuthenticated, user , login ,logout}}>
      {children}
   </AuthContext.Provider>
);
};

// creating own hook or custom hook for accessing to context easily

export const userAuth = () => useContext(AuthContext);