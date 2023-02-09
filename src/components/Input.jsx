import React from 'react';
import Attach from "../img/attach.png";
import Img from "../img/image.png";

function input() {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...'/>
      <div className="send">
      <input type="file" style={{display:"none"}} id="Attach"/>
        <label htmlFor="Attach">
           <img src={Attach} alt="" />
        </label>
        
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default input