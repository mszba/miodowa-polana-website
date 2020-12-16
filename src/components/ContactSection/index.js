import {
  ContactContainer,
  ContactWrapper,
  MapWrap,
  TextWrap,
  Heading,
  AddressWrap,
  AddressTitle,
  AddressText,
  SocialsWrap,
  FacebookIcon,
  SocialsText,
  SocialLink,
  MapContainer,
  AddressPhoneLink,
} from './ContactSectionElements';

import { PhoneIcon } from '../Aside/AsideElements';

import { motion } from 'framer-motion';
import {
  titleAnimation,
  titleAnimation2,
  infoTextTransition,
  socialAnimation,
} from '../animations/index';

const ContactSection = () => {
  return (
    <>
      <ContactContainer id='contact'>
        <ContactWrapper>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {
                opacity: 0,
                x: -30,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}>
            <MapWrap>
              <MapContainer
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8926.973916687608!2d22.409877428789102!3d49.3874303194117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66dea3b923def2ed!2sMiodowa%20Polana%20Na%20Bercu!5e0!3m2!1spl!2spl!4v1607536674891!5m2!1spl!2spl'
                allowfullscreen></MapContainer>
            </MapWrap>
          </motion.div>
          <TextWrap>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={titleAnimation}
              transition={infoTextTransition}>
              <Heading>Kontakt</Heading>
            </motion.div>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={titleAnimation2}
              transition={infoTextTransition}>
              <AddressWrap>
                <AddressTitle>Miodowa Polana Na Bercu</AddressTitle>
                <AddressText>Myczków 22B</AddressText>
                <AddressText>38-610 Myczków</AddressText>
                <AddressPhoneLink href='tel:604 208 541'>
                  <PhoneIcon />
                  &nbsp; 604 208 541
                </AddressPhoneLink>
                <AddressPhoneLink href='tel:608 483 596'>
                  <PhoneIcon />
                  &nbsp; 608 483 596
                </AddressPhoneLink>
              </AddressWrap>
            </motion.div>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={socialAnimation}
              transition={infoTextTransition}>
              <SocialsWrap>
                <SocialsText>Znajdziesz nas na</SocialsText>
                <SocialLink href='https://www.facebook.com/Miodowa-Polana-Na-Bercu-162385870618739/'>
                  <FacebookIcon />
                </SocialLink>
              </SocialsWrap>
            </motion.div>
          </TextWrap>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
