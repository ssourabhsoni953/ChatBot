import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState('');
    const [sendBtn, setSendBtn] = useState(true);


    function saveInputText(event) {
        setInputText(event.target.value)
    }
    async function sendMessage() {
        setSendBtn(false)
        const newChatMessages = [
            ...chatMessages, {
                message: inputText,
                sender: 'user',
                key: crypto.randomUUID()
            }
        ]

        const lodingMessages = [
            ...newChatMessages, {
                loading: 'yes',
                message: '',
                sender: 'robot',
                key: crypto.randomUUID()
            }
        ]
        setChatMessages(lodingMessages)




        setInputText('')
        const response = await Chatbot.getResponseAsync(inputText);
        const finalMessages = [
            ...newChatMessages, {
                message: response,
                sender: 'robot',
                key: crypto.randomUUID()
            }
        ];
        setChatMessages(finalMessages);
        setSendBtn(true)

    }

    return (
        <div className="chat-input-container">
            <input
                className="chat-input"
                placeholder="Send a message to Chatbot"
                size="30"
                onChange={(event) => {
                    saveInputText(event)
                }}
                value={inputText}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        if (sendBtn === true) {
                            sendMessage()
                        }
                    }
                    else if (event.key === 'Escape') {
                        setInputText('')
                    }
                }}
            />
            <button
                onClick={() => {
                    if (sendBtn === true) {
                        sendMessage()
                    }
                }}
                className='send-button'
            >Send</button>
            <button
                onClick={() => {
                    localStorage.clear();
                    setChatMessages([]);
                }}
                className='clear-button'
            >clear</button>
        </div >
    );
}