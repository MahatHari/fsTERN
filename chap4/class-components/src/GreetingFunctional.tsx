import React from 'react';

interface GreetingProps {
  message: string;
}
function GreetingFunctional(props: GreetingProps) {
  console.log('rendering Greeting');
  return <div>{props.message}</div>;
}

export default GreetingFunctional;
