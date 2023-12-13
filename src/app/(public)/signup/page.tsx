'use client';

import {Button} from '@/components/ui/button';
import {ReloadIcon} from '@radix-ui/react-icons';
import {FormEvent, useState} from 'react';

// const URI = 'https://gull-assuring-pigeon.ngrok-free.app/signup';
const URI = 'https://gull-assuring-pigeon.ngrok-free.app/login';

export default function SignupPage() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);

  // handler
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(URI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
      });

      // Handle response if necessary
      const data = await response.json();
      console.log(data);
      // ...
    } catch (e: any) {
      console.error(e.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        name='username'
        className='text-zinc-950'
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        type='text'
        name='password'
        className='text-zinc-950'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button type='submit'>
        {isLoading && <ReloadIcon className='animate-spin' />}
        <span>Submit</span>
      </Button>
    </form>
  );
}
