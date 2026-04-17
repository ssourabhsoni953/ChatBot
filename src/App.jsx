import { useEffect, useState } from 'react'
import './App.css'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'
import { addChatResponses } from './components/AddResponses'

function App() {



  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('msg') ? localStorage.getItem('msg') : "[]"))

  console.log(chatMessages)

  useEffect(() => {
    localStorage.setItem('msg', JSON.stringify(chatMessages))
  }, [chatMessages])
  useEffect(() => {
    addChatResponses()
  }, [])

  return (
    <div className="app-container">
      <ChatMessages
        chatMessages={chatMessages}
      />
      {chatMessages.length === 0 && (
        <p
          className='Wlc-Message'
        >Welcome to the chatbot project! Send a message using the textbox below.</p>
      )}
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>)

}

export default App


/*{
        message: 'hello chatbot',
        sender: 'user',
        key: 'id1'
      }, {
        message: 'Hello! How can I help you?',
        sender: 'robot',
        key: 'id2'
      }, {
        message: 'can you get me todays date?',
        sender: 'user',
        key: 'id3'
      }, {
        message: 'Today is September 27',
        sender: 'robot',
        key: 'id4'
      } */