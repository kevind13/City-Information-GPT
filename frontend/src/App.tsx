import { useEffect, useRef, useState } from 'react';
import ChatDisplay from './components/ChatDisplay';
import ChatInput from './components/ChatInput';
import { Message } from './models/message';
import { getCityInfo } from './services/city';

const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chatDisplayRef = useRef<any>(null);

  const handleMessageSubmit = async (message: string) => {
    const cityInfo = await getCityInfo(message);

    let cityMessage: Message = { text: cityInfo.text, sender: 'bot' };

    const newMessage = { text: message, sender: 'user' };

    if (cityInfo.valid) {
      cityMessage = { text: cityInfo.text, sender: 'bot', cityInfo: cityInfo.cityInfo };
    }

    setMessages([...messages, newMessage, cityMessage]);
  };

  useEffect(() => {
    if (chatDisplayRef.current) {
      chatDisplayRef.current.scrollTop = chatDisplayRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col py-20 items-center'>
      <h1 className='text-3xl font-bold mb-8'>City Information Chat</h1>
      <div className='chat-container bg-white rounded shadow-lg w-[90vw] p-4 h-[35rem] relative'>
        <div ref={chatDisplayRef} className='overflow-y-auto h-full pb-12'>
          <ChatDisplay messages={messages} />
        </div>
        <div className='absolute bottom-0 left-1/4 w-[50%] mb-4 bg-white'>
          <ChatInput onSubmit={handleMessageSubmit} />
        </div>
      </div>
    </div>
  );
};

export default App;
