import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => (props.useRWD ? 'cloumn' : 'row')};
`;

export const LeftSide = styled.div`
  width: 50%;
  min-width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #dff68f;
`;

export const RightSide = styled.div`
  width: 50%;
  min-width: 300px;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 100px);
`;

export const theme = {
  main: '#DFF68F',
  secandary: '#586E58',
  third: '#D6A20B',
  text: '#102326',
};
