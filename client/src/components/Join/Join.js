import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join the Room</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" />
        </div>
        <div>
          <input placeholder="Room" className="joinInput" type="text" mt-20 />
        </div>
        <Link to="/chat">
          <button className="button" mt-20 type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
