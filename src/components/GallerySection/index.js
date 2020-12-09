import {
  GalleryContainer,
  GalleryWrapper,
  TextWrapper,
  TopLine,
  Heading,
  PicturesWrapper,
  PicutreElementWrap,
  PictureElement,
  ButtonWrapper,
} from './GalleryElements';

import './GallerySection.css';

import picture1 from '../../images/picture-21.jpg';
import picture2 from '../../images/picture-22.jpg';
import picture3 from '../../images/picture-23.jpg';
import picture4 from '../../images/picture-24.jpg';

import { ButtonAnchor } from '../ButtonElements';

const GallerySection = () => {
  return (
    <>
      <GalleryContainer id='gallery'>
        <ButtonWrapper>
          <ButtonAnchor primary={1} dark={1} big={1}>
            Zobacz więcej
          </ButtonAnchor>
        </ButtonWrapper>

        <GalleryWrapper>
          <TextWrapper>
            <TopLine>Galeria</TopLine>
            <Heading>Galeria miodowej polanki</Heading>
          </TextWrapper>
          <PicturesWrapper className='pictures-wrapper'>
            <PicutreElementWrap className='picture-element-wrap'>
              <PictureElement className='picture-element' src={picture1} />
            </PicutreElementWrap>
            <PicutreElementWrap className='picture-element-wrap'>
              <PictureElement className='picture-element' src={picture2} />
            </PicutreElementWrap>
            <PicutreElementWrap className='picture-element-wrap'>
              <PictureElement className='picture-element' src={picture3} />
            </PicutreElementWrap>
            <PicutreElementWrap className='picture-element-wrap'>
              <PictureElement className='picture-element' src={picture4} />
            </PicutreElementWrap>
          </PicturesWrapper>
        </GalleryWrapper>
      </GalleryContainer>
    </>
  );
};

export default GallerySection;
