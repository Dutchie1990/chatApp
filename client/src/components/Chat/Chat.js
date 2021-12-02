import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { io } from 'socket.io-client';
import { useLocation } from 'react-router';

let socket;

const Chat = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const location = useLocation();
  const ENDPOINT = 'http://localhost:5000/';

  useEffect(() => {
    console.log();
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);
    console.log(socket);

    socket.emit('join', { name, room }, ({ error }) => {
      alert(error);
    });
  }, [ENDPOINT, location.search]);

  return <h1>Chat</h1>;
};

export default Chat;
