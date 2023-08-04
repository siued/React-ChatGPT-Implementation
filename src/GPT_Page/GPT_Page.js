import { useEffect, useState } from 'react';
import React from 'react';
import { Input_Field } from './Input_Field';
import GPT_Send_Button from './GPT_Send_Button';
import { Input_Div } from './Input_Div';
import Message_List from './Message_List';

function GPT_Page() {

  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([])

  return (
    <div className="dark:bg-gray-600 dark:text-lime-100 text-center min-h-screen p-10 justify-center space-y-10">
      {Message_List(messages)}
      {Input_Div(loading, setLoading, messages, setMessages)}
    </div>
  );
}

export default GPT_Page;
