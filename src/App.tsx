import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseState from './hooks/State/UseState';
import UseReducer from './hooks/Reducer/UseReducer';
import UseRef from './hooks/Ref/UseRef';
import UseImperativeHandle from './hooks/ImperativeHandle/UseImperativeHandle';
import User from './hooks/Context/User';
import {UserContextProvider} from './hooks/Context/UserContext';
import UserCallBack from './hooks/CallBack-Memo/userCallBackMemo';

function App() {
  return (
    <div className="App">
      <UserCallBack />
      <UseState />
      <UseReducer />
      <UseRef />
      <UseImperativeHandle />
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
