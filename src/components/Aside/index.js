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
            <AsidePhoneLink href='tel:555428940'>555 428 940</AsidePhoneLink>
          </AsidePhoneWrap>
        </AsideWrapper>
      </AsideContainer>
    </>
  );
};

export default Aside;
