import { useEffect, useState } from 'react';

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
  imageHexagonAnimation,
} from '../animations/index';

const GallerySection = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const galleryContainer = document.getElementById('gallery');

      if (scrollY >= galleryContainer.offsetTop - 500) {
        setShouldAnimate(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <GalleryContainer id='gallery'>
        {shouldAnimate ? (
          <ButtonWrapper
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
              delay: 0.8,
            }}>
            <ButtonRouter to='/gallery' primary={1} dark={1} big={1}>
              Zobacz więcej
            </ButtonRouter>
          </ButtonWrapper>
        ) : null}

        <GalleryWrapper>
          {shouldAnimate ? (
            <div>
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

              <PicturesWrapper className='pictures-wrapper'>
                <PicutreElementWrap
                  initial='hidden'
                  animate='visible'
                  variants={imageHexagonAnimation}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className='picture-element-wrap'>
                  <PictureElement
                    className='picture-element'
                    src={picture1}
                    alt='widok z balkonu'
                  />
                </PicutreElementWrap>
                <PicutreElementWrap
                  initial='hidden'
                  animate='visible'
                  variants={imageHexagonAnimation}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className='picture-element-wrap'>
                  <PictureElement
                    className='picture-element'
                    src={picture2}
                    alt='ule pszczele'
                  />
                </PicutreElementWrap>
                <PicutreElementWrap
                  initial='hidden'
                  animate='visible'
                  variants={imageHexagonAnimation}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className='picture-element-wrap'>
                  <PictureElement
                    className='picture-element'
                    src={picture3}
                    alt='hotel'
                  />
                </PicutreElementWrap>
                <PicutreElementWrap
                  initial='hidden'
                  animate='visible'
                  variants={imageHexagonAnimation}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className='picture-element-wrap'>
                  <PictureElement
                    className='picture-element'
                    src={picture4}
                    alt='panorama'
                  />
                </PicutreElementWrap>
              </PicturesWrapper>
            </div>
          ) : null}
        </GalleryWrapper>
      </GalleryContainer>
    </>
  );
};

export default GallerySection;
