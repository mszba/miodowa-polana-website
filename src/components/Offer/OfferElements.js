import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FaParking, FaWifi } from 'react-icons/fa';

import { IoIosPeople } from 'react-icons/io';

export const PageContentElement = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const PageContentText = styled.p`
  margin-bottom: 15px;
  display: block;
  font-size: 18px;
  line-height: 24px;
  color: #240d00;
`;

export const PageContentMainOffers = styled(motion.div)`
  margin-bottom: 3vw;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const PageContentOffersWrap = styled.ul`
  display: flex;

  list-style-type: none;
`;

export const PageContentOfferElement = styled.li`
  display: flex;
  align-items: center;
  color: #240d00;
  font-size: 13px;
`;

export const ParkingIcon = styled(FaParking)`
  margin: 0 5px;
  color: #ffca00;
  font-size: 18px;
`;
export const WifiIcon = styled(FaWifi)`
  margin: 0 5px;
  color: #ffca00;
  font-size: 18px;
`;
export const FamilyIcon = styled(IoIosPeople)`
  margin: 0 5px;
  color: #ffca00;
  font-size: 18px;
`;
