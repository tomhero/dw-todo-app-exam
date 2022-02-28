import React, { useState } from 'react';
import Image from 'next/image';

export const Logo: React.FC = () => {
  const [first, setFirst] = useState('');

  return <Image src="/icons/nextjs-icon.svg" alt="nextjs" width="96" height="58" />;
};
