import React from 'react';
import ji from '../img/LINE_ALBUM_230208_7.jpg';
import pon from '../img/LINE_ALBUM_230208_4.jpg';
import tiger from '../img/LINE_ALBUM_230208_6.jpg';
import rct from '../img/LINE_ALBUM_230208_3.jpg';

function Chats() {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src={ji} alt="" />
        <div className="userChatInfo">
          <span>Ji</span>
          <p>Narok</p>
        </div>
      </div>
      <div className="userChat">
        <img src={pon} alt="" />
        <div className="userChatInfo">
          <span>Pon</span>
          <p>E Dam</p>
        </div>
      </div>
      <div className="userChat">
        <img src={tiger} alt="" />
        <div className="userChatInfo">
          <span>Tiger</span>
          <p>E pon</p>
        </div>
      </div>
      <div className="userChat">
        <img src={rct} alt="" />
        <div className="userChatInfo">
          <span>RCT</span>
          <p>time traveler</p>
        </div>
      </div>
    </div>
  )
}

export default Chats