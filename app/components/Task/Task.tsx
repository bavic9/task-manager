'use client'

import React from 'react'
import styled from 'styled-components'

function Task() {

  return (
    <TaskStyled className='w-100 h-100 bg-colorBg2 border-2 border-borderColor2 rounded-2xl p-2rem overflow-y-auto scrollbar scrollbar-thin'>
      task
    </TaskStyled>
  )
}


const TaskStyled = styled.main`
`;

export default Task
