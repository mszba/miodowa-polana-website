import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Lightbox from 'react-spring-lightbox';

import { ButtonAnchor } from '../ButtonElements';
import { Heading, TopLine } from '../InfoSection/InfoSectionElements';
import {
  PageContainer,
  PageWrapper,
  TextWrapper,
  PageContent,
  BtnWrap,
  ArrowBackward,
  ArrowLeft,
} from '../PageElements';
import {
  PicturesWrapper,
  PicutreElementWrap,
  PictureElement,
} from './GalleryElements';
import {
  titleAnimation,
  titleAnimation2,
  infoTextAnimation,
  infoTextTransition,
} from '../animations/index';

import { pictures } from './Data';

import './Gallery.css';

const Gallery = () => {
  const [hover, setHover] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  let history = useHistory();

  const onHover = () => setHover(!hover);

  const handleClick = () => {
    history.push('/');
  };

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentImageIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < pictures.length &&
    setCurrentImageIndex(currentImageIndex + 1);

  return (
    <>
      <PageContainer lightBg={0}>
        <Lightbox
          images={pictures}
          isOpen={isOpen}
          currentIndex={currentImageIndex}
          onPrev={gotoPrevious}
          onNext={gotoNext}
          onClose={() => setIsOpen(false)}
          pageTransitionConfig={{
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: { mass: 1, tension: 320, friction: 32 },
          }}
          style={{ backgroundColor: 'rgba(0,0,0,.85)' }}
        />
        <PageWrapper style={{ maxWidth: '2000px' }}>
          <TextWrapper style={{ marginTop: '6%' }}>
            <TopLine
              initial='hidden'
              animate='visible'
              variants={titleAnimation}
              transition={infoTextTransition}>
              Galeria
            </TopLine>
            <Heading
              style={{ textAlign: 'center' }}
              lightText={1}
              initial='hidden'
              animate='visible'
              variants={titleAnimation2}
              transition={infoTextTransition}>
              Obiekt i okolica
            </Heading>
          </TextWrapper>
          <PageContent>
            <PicturesWrapper className='gallery-pictures-wrapper'>
              {pictures.map((picture, index) => (
                <PicutreElementWrap
                  key={picture.id}
                  className='gallery-picture-element-wrap'
                  initial='hidden'
                  animate='visible'
                  variants={{
                    hidden: {
                      opacity: 0,
                    },
                    visible: {
                      opacity: 1,
                      transition: {
                        delay: index * 0.1,
                      },
                    },
                  }}>
                  <PictureElement
                    className='gallery-picture-element'
                    src={picture.thumbnail}
                    alt={picture.alt}
                    data-key={picture.id}
                    onClick={(e) => {
                      setIsOpen(true);
                      setCurrentImageIndex(
                        e.target.getAttribute('data-key') - 1
                      );
                    }}
                  />
                </PicutreElementWrap>
              ))}
            </PicturesWrapper>

            <BtnWrap
              style={{ margin: '6% 0' }}
              initial='hidden'
              animate='visible'
              variants={infoTextAnimation}
              transition={{
                duration: 0.8,
                delay: 3,
                ease: [0.165, 0.84, 0.44, 1],
              }}>
              <ButtonAnchor
                style={{ marginLeft: '6%' }}
                primary={1}
                dark={1}
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                onClick={handleClick}>
                {hover ? <ArrowBackward /> : <ArrowLeft />} Wróć
              </ButtonAnchor>
            </BtnWrap>
          </PageContent>
        </PageWrapper>
      </PageContainer>
    </>
  );
};

export default Gallery;
