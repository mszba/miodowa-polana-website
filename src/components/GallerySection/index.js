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

import { ButtonRouter } from '../ButtonElements';

import {
  titleAnimation,
  titleAnimation2,
  infoTextTransition,
} from '../animations/index';

const GallerySection = () => {
  return (
    <>
      <GalleryContainer id='gallery'>
        <ButtonWrapper>
          <ButtonRouter to='/gallery' primary={1} dark={1} big={1}>
            Zobacz więcej
          </ButtonRouter>
        </ButtonWrapper>

        <GalleryWrapper>
          <TextWrapper>
            <TopLine
              initial='hidden'
              animate='visible'
              variants={titleAnimation}
              transition={infoTextTransition}>
              Galeria
            </TopLine>

            <Heading
              initial='hidden'
              animate='visible'
              variants={titleAnimation2}
              transition={infoTextTransition}>
              Galeria miodowej polany
            </Heading>
          </TextWrapper>

          <PicturesWrapper
            className='pictures-wrapper'
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {
                opacity: 0,
                x: 60,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}>
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
