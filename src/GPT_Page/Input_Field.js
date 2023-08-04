import React from 'react';
import GPT_Send_Button from './GPT_Send_Button';

export function Input_Field(loading, setLoading, messages, button_ref) {

  function Handle_Enter(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      button_ref.current.click();
    }
  };

  return (
      <input onKeyUp={Handle_Enter} id='text_input' type="text" className="bg-gray-200 dark:bg-gray-800 dark:text-lime-100 p-2 rounded-lg" />
  );
}
