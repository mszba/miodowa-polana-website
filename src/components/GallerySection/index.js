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
                    src='https://lh3.googleusercontent.com/9v-J1NkNE_0V9XuyKdSh8ahjzN0KL51YWsAlDVoZ2yUoPOTU8GIXsJdhDyea0ZEGo6tkOT_cPTLSa7xhn2vcEStqi3N94YyuMb7RFxmOzAUEEornEwSoKdgQYNFdfU6ftD4Keoz5e_0gkStf-eSH59F1hg5o-4WFDfroG3hE-q8P_uKUE94IddGcG5-X_sqlRytf8zq-tf7nqnNqZVHLnKCbepOk-CIsea9rZkhpg2ZesfT-YGv4e97leeDflpnVTJQ_5sdQHMmfc00sXdGexsrZ5hFWHQ_k0YhpRyMGa9UzuTIMUQ1U2yuEh-E7l9V5Sigdj8R_M9mvq9JN0ySz44pguVP-v1oW0Mw4B8nAnHzD9QmOB44GzRqzgblCGFiCgbxm37FllkxGqYVgCxrbLgmc3bcAeCDinywfXqOaCmPy9vxkuMT6KUcbu7zdKlC3IK4xqi91_KkPJ50tomznuFAF0QDL8LgYZTUvodgTwT7iN_ZVvG93W4qptn8Tr3w6xBHJ0nz1psOIMtPDidp0v_J3r1apFNIYeFYWOdcygd4djeWKDe1FnBW-XGsUBxoZGnxDtsUi5Vr0NGQOkL77myE3gf0PcVYx7sD7WAZUHCwHq0tdqdEbGAFLt-IPVRcesMOWgCcVoAgYCdYWnhLLJFJQsXJHBzY8xp6Cx8XzGhiXSYH9nGlDVJUzVb1vYqVLONQ22oRmfAkOppA0=w1346-h757-no?authuser=0'
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
                    src='https://lh3.googleusercontent.com/Z7sHIfG-BtABvcf9IQ0Hwi7gElWYXGU58swsa4Fw6VcDA3tLhZDG9MTYDl3sh3UO9EENtpEPhPcBi9zRh4LsufG6W0pZKpd34oS8wbBXxVASapQdrVsS7PjI3hTRR9p8rjeUvdH9PcMWWJbX88vmA1VZg-wWwQt6LO6qoIVdOZM-ZUIa-jV8l1GdVuQlAQ9n7KrzG0hYQwtWtOcsAT59AZtLUQhkTRw7YSsF0lGUldKk4FV2c6tRfVwnd5dxVMYPjnqFA4iAKcy-9KOWLDdyjiReaQ7upq3zXzXXYbJH6Ftw4rYC0XvoPXgUHLNJEk3OF0M7kqPOv0S80jEEGPxV8GaCfhiDm9kT1h-G2wMHUKgsjUfpPx92KEAgv3guN6F6kubIFFketSV4SFLLJFY3kUcphnV65QHCdbPJF-fo9aRxNq3T8k2rBBIJOfkK4XNQjqOB5GskUNmGsvgcunKuaYgXahyCScyfZFlO1aSIkUGO3DinR1fxwnGIKWRGLGPRsZYqJCjyVK31DrMQN3iQWIWR_-GHyO84T3EL6sOGGYy8rV0A5ZBQZgB431dpUDOJwM2pqi9DSVVzGoxHG5mxXEt33XWOpsaJHX6QjpDCkchl-fJ0LPLSmY_j49NXJVYgWejg6KUsVTqfN_wOqH27y528WBMbpe6FQiTwAwaLgM5J_5XkP9bni9dt_OKdw6vum_2duPq-jMD5rhFm=w1347-h757-no?authuser=0'
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
                    src='https://lh3.googleusercontent.com/-E2xboPsv5l7XTij4JoEtwLth9mbJOKmCbx-YgWOrZ-WKpTGMCwUKNwf-vh71RBTGsqtWAMf2lb30zfBVo6sC5ezwgCRU970zViFtGIgaxG6cNkKd2AqN2Xwu-FAi82YxPG7d47Z5XSzGg4cSveahVL6N1lYyoLJnXGEyNdRENG0tLy17PzaXu9kbS7FGcY-yVQKmwTi7-Xvaoxovcuryy9iTf-iaNIoWTD_3uI_KcoOxeK8FPn9RDs6y3c7yBIU1xsgtb2bKPx92EY3Ce392NxJw5OlfztwwiYv_Xwtj3cuG749IX9w4KIXL09coDG7JRtjHLU-t1-aSA05h3wKt6kgKXuafNraDiM1MQ3P49z_b8oUNmAu3GkcaEGjY4Cpey1_UgYPcWed_qRufh1RiFUmDNMU973nixjCUz4089qQXBsdJ1wl1_-YbMVwlGJ6-L009cX_LRw_5x_luaskD-LAO4LqXculvjtsEF1KInnCeubnrloLNjsY1N-MVyA7Q5X3KyQpTAxFG9tcTd4wFe6ZZMoCqO9625OFqUXK5cOpKDcJiwwqYqgvr4JLTQSbTWFonpiq3oXsgrUB73Mvfl87a_Ih1cDg7RF2qpIoon8ocpYSSYSA5LZUO5VWpxAprwzmHScnvlw5j9uxqGSh9Wa7I5dHE-kaiz_Av_UWmss5LEzhb1YSjYivlabOlFBO6ZgmwJ9gf39-FQll=w1346-h757-no?authuser=0'
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
                    src='https://lh3.googleusercontent.com/j5C7nZOkpr83xuo9S4borvqsqR9tAVflan1gwKUCc8elmzz8QsYTOEParwdiQ87VJrtdAGXvi3duM18FF3GrsAT4RnELm9h9JVbDZJuHR8Ag7u4ws7FVmm_eydw8CBBx9aDsPldb5dZJsoNWsdNA1sjycfVOX_IP8spS9FqtuwBK1WXNQ5qbTBRJXlgmnHqju4lW2nOxD5v7RLqNpWqnw6l7Mphg0-0w8GAbTTy2IN_jsX-F5ImNQOPPVqT0GicYGwZkbmz8CDhZUVUypOXs3uzZb4qZEistux0tnIs4TrfW16H6nw4wujl_RzGNrJuyjuhTjmvwC_DDgPA1kawgheVccWVeu8ZuJ-DXctB9Xr-6JO4AGitlKDqh7XCarOazaLVmZGrOXqgiTrqBzTbwMxh1KRwCSswJ3BEsZMTKAoqd0f9xFxsHyjgJRRX9KVQ-SYhXLpL91CGpiwMRZVe4Jj8t-q5BvfcGemVao-OEXnhWs0k5-ExDpBgqsG_mKdY81WxJ-qatqelHCERZ3v_7pZhKJa32QIBhTgfKaeJBWq6mfXgb9DsRjDNcvYl-NdyeWQTCzk3ouU0FnOaAb7b795gtgT5SekqVS0OKfNLcQxi1VxSXFzLU7i2h8otvcckThZcG_9Y5Z4fTOO-rKJxGc0t95apzlM7PTDCKFkISf_MReghiVjnsA-X4qQmyr-IJ4N5GX7bsPbya6942=w1346-h757-no?authuser=0'
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
