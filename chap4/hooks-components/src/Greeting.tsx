import React, { FC } from 'react';

interface GreetingProps {
  enteredName: string;
  message?: string;
  grettingDispatcher: React.Dispatch<{ type: string; payload: string }>;
}
const Greeting: FC<GreetingProps> = (props: GreetingProps) => {
  console.log('rendering props');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.grettingDispatcher({
      type: 'enteredName',
      payload: e.target.value,
    });
    props.grettingDispatcher({
      type: 'message',
      payload: e.target.value,
    });
  };
  return (
    <div>
      <input type='text' value={props.enteredName} onChange={onChange} />
      <div>{props.message}</div>
    </div>
  );
};

export default Greeting;
