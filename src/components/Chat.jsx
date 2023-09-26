import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import {BsFillCameraVideoFill} from 'react-icons/bs'
import {IoPersonAddSharp} from 'react-icons/io5'
import {FiMoreHorizontal} from 'react-icons/fi'

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
        <BsFillCameraVideoFill/>
        <IoPersonAddSharp/>
        <FiMoreHorizontal/>
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;