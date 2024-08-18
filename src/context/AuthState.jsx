import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const AuthState = (props) => {
  const [user, setUser] = useState({
    username: '',
    email: ''
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token'); 
    if (storedUser && storedUser !== 'undefined' && token) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser({
      username: '',
      email: ''
    });
    localStorage.removeItem('user');
    localStorage.removeItem('token'); // Remove token from local storage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;