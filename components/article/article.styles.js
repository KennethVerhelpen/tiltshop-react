
import styled from '@emotion/styled';
import { StarHalfTwoTone, Star, StarBorderTwoTone } from '@material-ui/icons';

export const ActiveStar = styled(Star)`
  color: #FFBB27;
`

export const ActiveStarHalf = styled(StarHalfTwoTone)`
  color: #FFBB27;
`

export const InactiveStar = styled(StarBorderTwoTone)`
  color: white;
  opacity: 0.5;
`

export const Shape = styled.article`
  height: 30rem;
  max-width: 20rem;
  background: black;
  transition: all .3s ease-in-out;
  box-shadow: 6px 6px 20px 0 rgba(0,0,0,0.35), 5px 5px 7px 0 rgba(0,0,0,0.09), 20px 20px 8px 0 rgba(0,0,0,0.08);
  &:hover {
    transition: all .3s ease-in-out;
    box-shadow: 6px 6px 40px 0 rgba(0,0,0,0.45), 5px 5px 14px 0 rgba(0,0,0,0.15), 20px 20px 16px 0 rgba(0,0,0,0.14);
    img {
      transition: all .1s ease-in-out;
      transform: scale(1.05);
    }
    .button {
      transition: all .1s ease-in-out;
      background: rgba(255,255,255,0.2);
    }
  }
`

export const Main = styled.main`
  z-index: 1; 
  span {
    color: white;
  }
`

export const IconButton = styled.a`
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(3px);
  color: white;
`

export const Footer = Main.withComponent('footer');

export const ImageWrapper = styled.div`
  z-index: 0;

  img {
    transition: all .1s ease-in-out;
    overflow: hidden;
    border-radius: 1rem;
  }
`