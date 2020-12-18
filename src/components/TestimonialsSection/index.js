import { useEffect, useState, useRef } from 'react';

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
  ElementsWrap,
} from './TestimonialsSectionElements';

import { testimonials } from './Data';

import './Carousel.css';

import {
  titleAnimation,
  titleAnimation2,
  infoTextTransition,
} from '../animations/index';

const TestimonialsSection = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const testimonialsContainer = document.getElementById('testimonials');

      if (scrollY >= testimonialsContainer.offsetTop - 500) {
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
      <TestimonialsContainer id='testimonials'>
        <TestimonialsWrapper>
          {shouldAnimate ? (
            <ElementsWrap>
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
                  Co nasi klienci o nas myślą
                </Heading>
              </TextWrapper>
              <TestimonialsElementsWrapper
                initial='hidden'
                animate='visible'
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 60,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: [0.165, 0.84, 0.44, 1],
                }}>
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
            </ElementsWrap>
          ) : null}
        </TestimonialsWrapper>
      </TestimonialsContainer>
    </>
  );
};

export default TestimonialsSection;
