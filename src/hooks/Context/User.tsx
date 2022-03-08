import {useContext} from 'react';
import {UserContext} from './UserContext';

// type userName = {
//   userName: String;
// };
// const User = ({userName}: userName) => {
const User = () => {
  //   const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setUsername(e.target.value);
  //   };
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    // if (userContext) {
    // export const UserContext = createContext({} as UserContextType); to eliminate checking in userContext
    userContext.setUser({
      name: 'jaymark',
      email: 'slasher_@gmail.com',
    });
    // }
  };

  const handleLogout = () => {
    // if (userContext) {
    userContext.setUser(null);
    // }
  };

  return (
    <div>
      <h2>useContext</h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
    </div>
  );
};

export default User;
