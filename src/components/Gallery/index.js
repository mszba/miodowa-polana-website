import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ButtonAnchor } from '../ButtonElements';
import { Heading, TopLine } from '../InfoSection/InfoSectionElements';
import Lightbox from 'react-image-lightbox';

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

import { pictures } from './Data';

import './Gallery.css';
import 'react-image-lightbox/style.css';

const Gallery = () => {
  const [hover, setHover] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  let history = useHistory();

  const onHover = () => setHover(!hover);

  const handleClick = () => {
    history.push('/');
  };

  return (
    <>
      <PageContainer lightBg={0}>
        {isOpen && (
          <Lightbox
            mainSrc={pictures[photoIndex].image}
            nextSrc={pictures[(photoIndex + 1) % pictures.length].image}
            prevSrc={
              pictures[(photoIndex + pictures.length - 1) % pictures.length]
                .image
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(
                (photoIndex + pictures.length - 1) % pictures.length
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % pictures.length)
            }
          />
        )}
        <PageWrapper style={{ maxWidth: '2000px' }}>
          <TextWrapper style={{ marginTop: '10%' }}>
            <TopLine>Galeria</TopLine>
            <Heading style={{ textAlign: 'center' }} lightText={1}>
              Więcej zdjęć
            </Heading>
          </TextWrapper>
          <PageContent>
            <PicturesWrapper className='gallery-pictures-wrapper'>
              {pictures.map((picture) => (
                <PicutreElementWrap
                  key={picture.id}
                  className='gallery-picture-element-wrap'>
                  <PictureElement
                    className='gallery-picture-element'
                    src={picture.image}
                    data-key={picture.id}
                    onClick={(e) => {
                      setIsOpen(true);
                      setPhotoIndex(e.target.getAttribute('data-key') - 1);
                    }}
                  />
                </PicutreElementWrap>
              ))}
            </PicturesWrapper>

            <BtnWrap style={{ margin: '6% 0' }}>
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
