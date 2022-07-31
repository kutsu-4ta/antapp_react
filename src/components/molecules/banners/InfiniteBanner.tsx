import styled, {keyframes} from "styled-components";

interface Props{
    height: number;
    src: string;
}

export const infiniteBanner = (props:Props) => {
    const { height, src } = props;
    return (
        <Loop src={src} height={height}/>
    );
};

const loop = keyframes`
  0% {
    background-position: 0% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const Loop = styled.div<{ src: string, height: number }>`
  width: 100%;
  animation: ${loop} 30s linear infinite;
  ${({ src }) => `background: url(${src})`};
  ${({ height }) => `height: ${height}px`};
  ${({ height }) => `background-size: auto ${height}px`};
`;

export default infiniteBanner;