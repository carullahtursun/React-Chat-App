import Chat from './components/Chat'
import './App.css';
import Room from './components/Room';

import io from 'socket.io-client'

import { useState } from 'react';

const socket =io.connect('http://localhost:5000')



function App() {

  const [user ,setUser]=useState('')

  const [room ,setRoom]=useState('')

  const [chatScreen ,setChatScreen]=useState(false)
  return (

    

    <div className='App' >

      {
        !chatScreen ?
        <Room user={user} setUser={setUser} room={room} setRoom ={setRoom} setChatScreen={setChatScreen} socket={socket} />
        :<Chat socket={socket} user={user} room={room} />
      }
      
      
    </div>
  );
}

export default App;
