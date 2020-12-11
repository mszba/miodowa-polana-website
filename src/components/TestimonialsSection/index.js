import { useRef } from 'react';

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

const TestimonialsSection = () => {
  const carouselRef = useRef(null);
  const totalPages = Math.ceil(testimonials.length);
  let resetTimeout;

  return (
    <>
      <TestimonialsContainer id='testimonials'>
        <TestimonialsWrapper>
          <TextWrapper>
            <TopLine>Opinie</TopLine>
            <Heading>Co nasi klieni o nas myślą</Heading>
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
                  }, 6000); // same time
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
