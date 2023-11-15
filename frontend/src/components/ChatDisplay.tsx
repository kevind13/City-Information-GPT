import { Message } from '../models/message';
import CityInfoCard from './CityInfoCard';

export interface ChatDisplayProps {
  messages: Message[];
}
const ChatDisplay = ({ messages }: ChatDisplayProps) => {
  return (
    <div className='chat-display'>
      {messages.map((msg, index) => (
        <>
          <div
            key={index}
            className={`message ${
              msg.sender === 'user' ? 'flex justify-start' : 'flex justify-end'
            }`}>
            {msg.sender === 'user' ? (
              <p className='user-message bg-blue-200 rounded-lg p-2'>{msg.text}</p>
            ) : (
              <>
                <p className='bot-message bg-green-200 rounded-lg p-2'>{msg.text}</p>
              </>
            )}
          </div>
          {msg.text && msg.cityInfo && <div><CityInfoCard cityInfo={msg.cityInfo} /></div>}
        </>
      ))}
    </div>
  );
};

export default ChatDisplay;
