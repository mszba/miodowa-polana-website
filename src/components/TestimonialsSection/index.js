import { useState } from 'react';

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

import './Carousel.css';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState({
    items: [
      {
        id: 1,
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, fugit magnam porro amet iste vero quas dolor blanditiis atque suscipit excepturi sapiente dolorem minima harum molestiae illo eaque rerum numquam! #1',
        author: 'Jan Kowalski 1',
      },
      {
        id: 2,
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, fugit magnam porro amet iste vero quas dolor blanditiis atque suscipit excepturi sapiente dolorem minima harum molestiae illo eaque rerum numquam! #2',
        author: 'Jan Kowalski 2',
      },
      {
        id: 3,
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, fugit magnam porro amet iste vero quas dolor blanditiis atque suscipit excepturi sapiente dolorem minima harum molestiae illo eaque rerum numquam! #3',
        author: 'Jan Kowalski 3',
      },
      {
        id: 4,
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, fugit magnam porro amet iste vero quas dolor blanditiis atque suscipit excepturi sapiente dolorem minima harum molestiae illo eaque rerum numquam! #4',
        author: 'Jan Kowalski 4',
      },
      {
        id: 5,
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, fugit magnam porro amet iste vero quas dolor blanditiis atque suscipit excepturi sapiente dolorem minima harum molestiae illo eaque rerum numquam! #5',
        author: 'Jan Kowalski 5',
      },
      {
        id: 6,
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, fugit magnam porro amet iste vero quas dolor blanditiis atque suscipit excepturi sapiente dolorem minima harum molestiae illo eaque rerum numquam! #6',
        author: 'Jan Kowalski 6',
      },
    ],
  });

  const { items } = testimonials;

  return (
    <>
      <TestimonialsContainer>
        <TestimonialsWrapper>
          <TextWrapper>
            <TopLine>Opinie</TopLine>
            <Heading>Co nasi klieni o nas myślą</Heading>
          </TextWrapper>
          <TestimonialsElementsWrapper>
            <Carousel
              transitionMs={800}
              pagination={false}
              enableAutoPlay={true}
              autoPlaySpeed={7000}
              breakPoints={[
                { width: 480, itemsToShow: 1 },
                { width: 481, itemsToShow: 2 },
              ]}>
              {items.map((item) => (
                <TestimonialWrap key={item.id}>
                  <QuoteIconWrap>
                    <QuoteIcon />
                  </QuoteIconWrap>

                  <QuoteTextWrapper>
                    <QuoteText>{item.text}</QuoteText>
                    <QuoteAuthor>{item.author}</QuoteAuthor>
                    <QuotePictureWrap>
                      <QuotePictureImg />
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
