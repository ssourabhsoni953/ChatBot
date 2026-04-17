import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import LoadingImage from '../assets/loading-spinner.gif'
import dayjs from 'dayjs'
import './ChatMessage.css'

export function ChatMessage({ message, sender, loading }) {

    return (
        <div className={
            sender === 'user'
                ? 'chat-message-user'
                : 'chat-message-robot'
        }>
            {sender === 'robot' && (
                <img src={RobotProfileImage} width="50" className="chat-message-profile" />
            )}
            <div
                className="chat-message-text">
                {loading ?
                    <img
                        className='loading-image'
                        src={LoadingImage}
                        alt="img" />
                    : message


                }
                <div className="current-date"
                >{dayjs().format('h:mm A')}</div>
            </div>

            {sender === 'user' && (
                <img src={UserProfileImage} width="50" className="chat-message-profile" />
            )}
        </div>
    );
}