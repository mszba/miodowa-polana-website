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

const ContactSection = () => {
  return (
    <>
      <ContactContainer id='contact'>
        <ContactWrapper>
          <MapWrap>
            <MapContainer
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8926.973916687608!2d22.409877428789102!3d49.3874303194117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66dea3b923def2ed!2sMiodowa%20Polana%20Na%20Bercu!5e0!3m2!1spl!2spl!4v1607536674891!5m2!1spl!2spl'
              allowfullscreen></MapContainer>
          </MapWrap>
          <TextWrap>
            <Heading>Kontakt</Heading>
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
            <SocialsWrap>
              <SocialsText>Znajdziesz nas na</SocialsText>
              <SocialLink href='https://www.facebook.com/Miodowa-Polana-Na-Bercu-162385870618739/'>
                <FacebookIcon />
              </SocialLink>
            </SocialsWrap>
          </TextWrap>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
