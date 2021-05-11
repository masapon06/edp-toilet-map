import React from 'react';
import styled from 'styled-components';
import { Box, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';


const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px 32px;
  width: "100%";
  height: "-15vh";
`;

const TabButton = styled.button`
  transition: height 250ms ease-in-out 0s;
  height: 56px;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 0;
  border: 1px solid transparent;
  padding: 0px;
  margin: 0px;
  text-align: center;
  font-weight: 500;
  font-size: 0.625rem;
  line-height: 0.875rem;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
  color: rgb(255, 87, 34);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transform: translate3d(0px, 0px, 0px);
`;

export const Tab = () => {
    return (

    <FooterWrapper>
        <Box component="span" m={2.5}>
            <IconButton fontSize="large" color="secondary" aria-label="favorite">
                <FavoriteIcon />
            </IconButton>
        </Box>
        <Box component="span" m={2.5}>
            <IconButton fontSize="large" color="primary" aria-label="purpose">
                <AccessibleForwardIcon />
            </IconButton>
        </Box>
    </FooterWrapper>
    )
};