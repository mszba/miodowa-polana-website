import {
  CircleLayer,
  AsideContainer,
  Icon,
  CloseIcon,
  AsideWrapper,
  AsideMenu,
  AsideMenuItem,
  AsideLink,
  AsidePhoneWrap,
  PhoneIcon,
  AsidePhoneLink,
} from './AsideElements';

const Aside = ({ isOpen, toggle }) => {
  return (
    <>
      <CircleLayer isOpen={isOpen} />
      <AsideContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <AsideWrapper>
          <AsideMenu>
            <AsideMenuItem>
              <AsideLink to='attractions' onClick={toggle}>
                Atrakcje
              </AsideLink>
            </AsideMenuItem>
            <AsideMenuItem>
              <AsideLink to='offer' onClick={toggle}>
                Oferta
              </AsideLink>
            </AsideMenuItem>
            <AsideMenuItem>
              <AsideLink to='gallery' onClick={toggle}>
                Galeria
              </AsideLink>
            </AsideMenuItem>
            <AsideMenuItem>
              <AsideLink to='opinions' onClick={toggle}>
                Opinie
              </AsideLink>
            </AsideMenuItem>
            <AsideMenuItem>
              <AsideLink to='contact' onClick={toggle}>
                Kontakt
              </AsideLink>
            </AsideMenuItem>
          </AsideMenu>

          <AsidePhoneWrap>
            <AsidePhoneLink href='tel:604 208 541'>
              <PhoneIcon />
              &nbsp; 604 208 541
            </AsidePhoneLink>
            <AsidePhoneLink href='tel:608 483 596'>
              <PhoneIcon />
              &nbsp; 608 483 596
            </AsidePhoneLink>
          </AsidePhoneWrap>
        </AsideWrapper>
      </AsideContainer>
    </>
  );
};

export default Aside;
