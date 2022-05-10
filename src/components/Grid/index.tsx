import React, { ReactNode } from 'react';
//styles
import { Wrapper, Content } from './Grid.styles';
// Types
interface Props {
  header: string;
  children?: ReactNode;
}

const Grid: React.FC<Props> = ({header, children}) => {


  return (
    <>
      <Wrapper>
        <h1>{header}</h1>
        <Content >{children}</Content>
      </Wrapper>
    </>
  );
};

export default Grid;
