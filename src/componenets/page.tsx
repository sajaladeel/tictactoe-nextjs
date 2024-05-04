import React from 'react';

// import { Container } from './styles';

interface BlockProps{
    value?:string | null
    onClick?: (value:string | any)=> void
}

const  Block: React.FC<BlockProps> = (props) => {
  return <div onClick={props.onClick} className='block'>{props.value}</div>
}

export default Block;