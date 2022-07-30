import styled, {keyframes} from "styled-components";
import Banner from '../../../assets/images/Home_banner.png';

export const infiniteBanner = () => {
    return (
        <Loop src={Banner} height={80} />
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