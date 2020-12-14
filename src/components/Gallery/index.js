import { useState } from 'react';
import { useHistory } from 'react-router-dom';

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

import { pictures } from './Data';

import GalleryModal from './index';

import './Gallery.css';

const Gallery = () => {
  const [hover, setHover] = useState(false);
  let history = useHistory();

  const onHover = () => setHover(!hover);

  const handleClick = () => {
    history.push('/');
  };

  const handleSlider = (e) => {
    console.log(e.target);
  };
  return (
    <>
      <PageContainer lightBg={0}>
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
                    onClick={handleSlider}
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
