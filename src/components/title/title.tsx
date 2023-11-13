import React from 'react';

interface Props {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  title: string;
  description: string;
}

export default function Title(props: Props) {
  return (
    <div className="flex flex-col items-end">
      <props.type className="text-6xl font-black text-brand-accent">{props.title}</props.type>
      <small className="text-end text-ellipsis text-gray-200">{props.description}</small>
    </div>
  );
}
