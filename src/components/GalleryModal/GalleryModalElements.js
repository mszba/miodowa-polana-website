import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  padding: 2vw 2vw;
  width: 100%;
  height: 100%;
`;

export const ModalPictureWrap = styled.div`
  padding: 2vw 2vw;
  width: 100%;
  height: 100%;
`;

export const ModalPictureElement = styled.img`
  padding: 2vw 2vw;
  width: 100%;
  height: 100%;
`;

export const ModalButtonLeft = styled.button``;

export const ModalButtonRight = styled.button``;
