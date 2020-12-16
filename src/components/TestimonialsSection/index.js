import { useEffect, useRef } from 'react';

import Carousel from 'react-elastic-carousel';

import {
  TestimonialsContainer,
  TestimonialsWrapper,
  TextWrapper,
  TopLine,
  Heading,
  TestimonialsElementsWrapper,
  TestimonialWrap,
  QuoteIconWrap,
  QuoteIcon,
  QuoteTextWrapper,
  QuoteText,
  QuoteAuthor,
  QuotePictureWrap,
  QuotePictureImg,
} from './TestimonialsSectionElements';

import { testimonials } from './Data';

import './Carousel.css';

import {
  titleAnimation,
  titleAnimation2,
  infoTextTransition,
} from '../animations/index';

const TestimonialsSection = () => {
  const carouselRef = useRef(null);
  const totalPages = Math.ceil(testimonials.length);
  let resetTimeout;

  useEffect(() => {
    return () => {
      let id = window.setTimeout(function () {}, 0);

      while (id--) {
        window.clearTimeout(id);
      }
    };
  }, []);

  return (
    <>
      <TestimonialsContainer id='testimonials'>
        <TestimonialsWrapper>
          <TextWrapper>
            <TopLine
              initial='hidden'
              animate='visible'
              variants={titleAnimation}
              transition={infoTextTransition}>
              Opinie
            </TopLine>
            <Heading
              initial='hidden'
              animate='visible'
              variants={titleAnimation2}
              transition={infoTextTransition}>
              Co nasi klieni o nas myślą
            </Heading>
          </TextWrapper>
          <TestimonialsElementsWrapper>
            <Carousel
              ref={carouselRef}
              transitionMs={800}
              pagination={false}
              enableAutoPlay={true}
              autoPlaySpeed={6000}
              itemsToShow={1}
              onNextEnd={({ index }) => {
                clearTimeout(resetTimeout);
                if (index + 1 === totalPages) {
                  resetTimeout = setTimeout(() => {
                    carouselRef.current.goTo(0);
                  }, 6000);
                }
              }}>
              {testimonials.map((item) => (
                <TestimonialWrap key={item.id}>
                  <QuoteIconWrap>
                    <QuoteIcon />
                  </QuoteIconWrap>

                  <QuoteTextWrapper>
                    <QuoteText>{item.text}</QuoteText>
                    <QuoteAuthor>{item.author}</QuoteAuthor>
                    <QuotePictureWrap>
                      <QuotePictureImg src={item.image} />
                    </QuotePictureWrap>
                  </QuoteTextWrapper>
                </TestimonialWrap>
              ))}
            </Carousel>
          </TestimonialsElementsWrapper>
        </TestimonialsWrapper>
      </TestimonialsContainer>
    </>
  );
};

export default TestimonialsSection;
