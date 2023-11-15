import { Message } from '../models/message';
import CityInfoCard from './CityInfoCard';

export interface ChatDisplayProps {
  messages: Message[];
  loading: boolean | undefined;
}
const ChatDisplay = ({ messages, loading }: ChatDisplayProps) => {
  return (
    <div className='chat-display'>
      {messages.map((msg, index) => (
        <>
          <div
            key={index}
            className={`message ${
              msg.sender === 'user' ? 'flex justify-start' : 'flex justify-end'
            }`}>
            <p
              className={`${
                msg.sender === 'user' ? 'bg-blue-200' : 'bg-green-200'
              } rounded-lg p-2`}>
              {msg.text}
            </p>
          </div>
          {msg.text && msg.cityInfo && (
            <div>
              <CityInfoCard cityInfo={msg.cityInfo} />
            </div>
          )}
        </>
      ))}

      {loading && (
        <div className='flex justify-center items-center'>
          <p className='text-gray-500 mt-2'>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default ChatDisplay;
