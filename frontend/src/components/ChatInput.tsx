import { useState } from 'react';

export interface ChatInputProps {
  onSubmit(menssage: string): void;
}

const ChatInput = ({ onSubmit }: ChatInputProps) => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState<boolean>()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMessageSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit(message);
    setLoading(false)
    setMessage('');
  };

  return (
    <form onSubmit={handleMessageSubmit} className='flex items-center'>
      <input
        type='text'
        value={message}
        disabled={loading} 
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Tell the city you need information'
        className='border rounded-l px-4 py-2 w-full'
      />
      <button  disabled={loading}  type='submit' className='bg-blue-500 text-white rounded-r px-4 py-2'>
        Send
      </button>
    </form>
  );
};

export default ChatInput;
