import { useEffect } from "react";
import sendGPTRequest from "./GPT_Request";

export default function GPT_Send_Button(loading, setLoading, messages, button_ref, setMessages) {

  // add the new message, clear input field and set the state to loading until a reply is received
  const sendButtonClicked = () => {
    const text_input = document.getElementById('text_input');
    const text = text_input.value;
    if (text === '') return;
    setLoading(true);
    setMessages([...messages, text]);
    text_input.value = '';
  }

  // Send a request when a new message is added
  useEffect(() => {
    if (messages.length % 2 == 0) return;

    sendGPTRequest(messages).then(response => 
        response.json().then(data => {
          const reply = data['choices'][0]['message']['content'];
          setMessages([...messages, reply]);
          setLoading(false);
        })
    );
  }, [messages]);

  return (
    <button ref = {button_ref} disabled={loading} onClick={sendButtonClicked} 
            className='bg-gray-800 text-lime-100 rounded-lg w-20 transition-w ease-out duration-300 disabled:w-[150px]'>
      {
        loading
        ?(<div className='flex items-center justify-center m-[10px]'>
              <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
              <div className="ml-2"> Processing... </div>
          </div>)
        :<div className='h-[25px] ml-5 mr-5'>Send</div>
      }
    </button>);
};