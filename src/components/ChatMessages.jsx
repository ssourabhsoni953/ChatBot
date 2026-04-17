import { useAutoScroll } from './useAutoScroll'
import { ChatMessage } from './ChatMessage'
import './ChatMessages.css'


export function ChatMessages({ chatMessages }) {
    const chatMessagesRef = useAutoScroll(chatMessages);

    return (
        <div className="chat-messages-container"
            ref={chatMessagesRef} >
            {chatMessages.map((chatMessage) => {
                return (
                    <div
                        key={chatMessage.key}
                    >
                        <ChatMessage
                            message={chatMessage.message}
                            sender={chatMessage.sender}
                            loading={chatMessage.loading}
                        />
                    </div>

                )
            })}

        </div>
    );

}

export default ChatMessage;