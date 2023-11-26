'use client'

import React from 'react'
import styled from 'styled-components';

interface Props {
    children: React.ReactNode;    
}

const GlobalStyleProvider = ({children}: Props ) => {
  return (
    <GlobalStyles className='flex h-full p-2.5 gap-2.5'>
      {children}
    </GlobalStyles>
  )
}

const GlobalStyles = styled.main`
  
`;

export default GlobalStyleProvider;
