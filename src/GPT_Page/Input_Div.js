import React from "react";
import GPT_Send_Button from "./GPT_Send_Button";
import { Input_Field } from "./Input_Field";

export function Input_Div(loading, setLoading, messages, setMessages) {
    const button_ref = React.useRef();

    return (
        <div className='h-[10%] flex justify-center space-x-10 align-bottom'>
            {Input_Field(loading, setLoading, messages, button_ref)}
            {GPT_Send_Button(loading, setLoading, messages, button_ref, setMessages)}
        </div>
    );
}
