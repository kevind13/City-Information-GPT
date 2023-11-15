import { useState } from 'react';

export interface ChatInputProps {
  onSubmit(menssage: string): void;
}

const ChatInput = ({ onSubmit }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMessageSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleMessageSubmit} className="flex items-center">
      <input
        type='text'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Tell the city you need information'
        className="border rounded-l px-4 py-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white rounded-r px-4 py-2">
        Send
      </button>
    </form>
  );
};

export default ChatInput;
