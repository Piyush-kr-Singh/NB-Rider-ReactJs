import React from 'react';
import loading from '../photos/loading.gif';

const Loading = () => {
  return (
    <div className='text-center'>
      <img src={loading} alt="" width='60' />
    </div>
  )
}

export default Loading
