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

    handleScroll();

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
                  Nasze zdjęcia
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
                    srcSet={`https://lh3.googleusercontent.com/AlphgSwITcYiq5jybnJvB2JqJkdNSR-gga36HdoUbeWj90hIWfktawFrher2qYtfK_UGPGwrFttg88WtqNL_2Bm306sDeKDZ5AWjcd8dzl-6DeK1stNtW7-Nex2zcyRVM1gmMzE=w2400 480w,
                    https://lh3.googleusercontent.com/dB2E06dFjX3KBHKEW4i-l4gnMne4eaj__pf4taEVdzVaS4VapkOevoYAXBuFDZ_q3uqtcB-i8eIZ2nd8wi9KkpA1suzHKhaktOQcf8f4BsEFnJWxDdtQ3_teN94p-43SbE1IszI=w2400 800w,
                    https://lh3.googleusercontent.com/WicD7WCH1ajxSWJWvUuswezTkW0TUUoIIon8-rwnQ9-EcFHLJ5YfYaxo6FpzLTKxIdq3WX4KVkCHf7LebIzUZF_iLNlS1NYXvwa96Ql6z6DQZU7FnYHypvwQod__KwqjajfVWbs=w2400 1200w
                    `}
                    src='https://lh3.googleusercontent.com/WicD7WCH1ajxSWJWvUuswezTkW0TUUoIIon8-rwnQ9-EcFHLJ5YfYaxo6FpzLTKxIdq3WX4KVkCHf7LebIzUZF_iLNlS1NYXvwa96Ql6z6DQZU7FnYHypvwQod__KwqjajfVWbs=w2400'
                    loading='lazy'
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
                    srcSet={`https://lh3.googleusercontent.com/mUMPlXdYRY5m4pfMq9IAsHAWnuBDHYSKbgXniaUBJ1dLC9f0s7FmV7Z_2KV-Hhf6JujY6mCzUN4HCAzkKt6oInpB5F_9lODst1fl3utA6lfr1FMdEsLr7DCA_MaGdUzten7Owf_f=w2400 480w,https://lh3.googleusercontent.com/-VZIfFybfyenbI2JJfDID7EjQoY_QKnyNVYL15SwXT2Igc-eXLeh5oCwSRV7nb6jrEJQCvqFkwjNUlGqJ9S0MZ9k2H9Kq1rLmDCZP-TIn4PmPYrYtHRpovqP8J3yMHWQXYGX9jdk=w2400 800w,https://lh3.googleusercontent.com/ljEj9InmrunXPIqPVuMFtBFj8hL2FdQxKKqRkeuMz8hiUYgKFRwxerZ3JOvxCYQBvGQfE5BhlcZY-nkAPuUsnKALqHrfIhEqy32KT9gzUQUVt4azseWSoXPxlae1bo0gYCtnPgLj=w2400 1200w
                    `}
                    src='https://lh3.googleusercontent.com/ljEj9InmrunXPIqPVuMFtBFj8hL2FdQxKKqRkeuMz8hiUYgKFRwxerZ3JOvxCYQBvGQfE5BhlcZY-nkAPuUsnKALqHrfIhEqy32KT9gzUQUVt4azseWSoXPxlae1bo0gYCtnPgLj=w2400'
                    loading='lazy'
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
                    srcSet={`https://lh3.googleusercontent.com/3atlG3dwIGjevURa7rzJWt-P5lknuC9ltmC4wukyFTecjzQYQOO75uhdmDrWbIdxTx9_1LoBkbv1t8JcCM4Aa3pWLapviXGOpaolhjr5EB0S17-kK-d6dCae2pXRHV2jNEasJJI=w2400 480w,

                    https://lh3.googleusercontent.com/wbQR69tJNjFy04QitRHJb1G_V6ucVOrJCrrYGbPqlHfIJ67a9Je5CAjFBQQhM7GP8gLTvyHBZ9btgdvGTrpprhYUPw-jnRoysL-0MCsEx0oLB6zjdFkbZlzES60XWcem4qSyIqs=w2400 800w,

                    https://lh3.googleusercontent.com/W0mc8MZAVMyDi9tnh1ynAbClFy-ZwY7Eeo14lnMW8ACXvpSAOMtvYf23-vigy_oqUXt4N7fQYuQR5P9_ZvhhvEmJaXnfizijCGWsIcJ7kGnikLQIFAjWtsnCuSFcIR90hNSPlhc=w2400 1200w
                    `}
                    src='https://lh3.googleusercontent.com/W0mc8MZAVMyDi9tnh1ynAbClFy-ZwY7Eeo14lnMW8ACXvpSAOMtvYf23-vigy_oqUXt4N7fQYuQR5P9_ZvhhvEmJaXnfizijCGWsIcJ7kGnikLQIFAjWtsnCuSFcIR90hNSPlhc=w2400'
                    loading='lazy'
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
                    srcSet={`https://lh3.googleusercontent.com/w5-7UtnzrK_jgzkOcNstLtQ-MIJ-7aYdTqtLk13lp58MKYo6NDVVkdxR4KVAFPiYrJkRjLyQ9oTJEZnbTxcqFl4C9t37c-8mX9TfSkGzNEILP_y7SBPQiWyHgmntUxX3olT6QjA=w2400 480w,

                    https://lh3.googleusercontent.com/JuK6aosDXOKY0uLFq1u9ar8fQLAAkga1EeQTkSipHo48RS70ztHkWvfSmQJF1ROT408Zsc45L7f3jJyqGDGmXOlfTJCFPqB_E_5kzdicUe__KvdtSLQQpiWgH-aEz0WM4NVl_pk=w2400 800w,

                    https://lh3.googleusercontent.com/2wIuzO8vY5lN2mPVu_CjMh8tg68W-cqKUmxU1jagjxmj5whfe1Sm2UV321ygapAcMZH2xlMWxOmMltkVH8aszBrnRgCc8AxrUnX7L3pE6RHQVytiMjjxz5SeChXCPH9bdQuNjFUy=w2400 1200w
                    `}
                    src='https://lh3.googleusercontent.com/2wIuzO8vY5lN2mPVu_CjMh8tg68W-cqKUmxU1jagjxmj5whfe1Sm2UV321ygapAcMZH2xlMWxOmMltkVH8aszBrnRgCc8AxrUnX7L3pE6RHQVytiMjjxz5SeChXCPH9bdQuNjFUy=w2400'
                    loading='lazy'
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
