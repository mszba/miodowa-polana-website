import {
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

const Aside = () => {
  return (
    <AsideContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <AsideWrapper>
        <AsideMenu>
          <AsideMenuItem>
            {' '}
            <AsideLink to='attractions'>Atrakcje</AsideLink>
          </AsideMenuItem>
          <AsideMenuItem>
            {' '}
            <AsideLink to='offer'>Oferta</AsideLink>
          </AsideMenuItem>
          <AsideMenuItem>
            {' '}
            <AsideLink to='gallery'>Galeria</AsideLink>
          </AsideMenuItem>
          <AsideMenuItem>
            {' '}
            <AsideLink to='opinions'>Opinie</AsideLink>
          </AsideMenuItem>
          <AsideMenuItem>
            <AsideLink to='contact'>Kontakt</AsideLink>
          </AsideMenuItem>
        </AsideMenu>

        <AsidePhoneWrap>
          <AsidePhoneLink href='tel:555428940'>555 428 940</AsidePhoneLink>
        </AsidePhoneWrap>
      </AsideWrapper>
    </AsideContainer>
  );
};

export default Aside;
