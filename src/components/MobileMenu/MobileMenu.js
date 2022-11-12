/* eslint-disable no-unused-vars */
import React from 'react';
import styled, {keyframes} from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <SubLink href="/terms">Terms and Conditions</SubLink>
          <SubLink href="/privacy">Privacy Policy</SubLink>
          <SubLink href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const backdropFade = keyframes`
  from {
    background-color: transparent;
  }
  to {
    background-color: var(--color-backdrop);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const swingIn = keyframes`
  from {
    transform: perspective(800px) rotateY(-90deg);
  }
  to {
    transform: perspective(800px) rotateY(0deg);
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${backdropFade} 1000ms;
  }
`;

const Content = styled(DialogContent)`
  background: white;
  width: 316px;
  margin-right: -16px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  transform-origin: right;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${swingIn} 500ms cubic-bezier(.24,.41,.17,1.19);
    will-change: transform;
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
  padding-right: 32px;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeIn} 1000ms;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }

  @media (prefers-reduced-motion: no-preference) {

    &:nth-of-type(1) {
      animation: ${fadeIn} 1000ms;
    }
    &:nth-of-type(2) {
      animation: ${fadeIn} 1300ms;
    }
    &:nth-of-type(3) {
      animation: ${fadeIn} 1600ms;
    }
    &:nth-of-type(4) {
      animation: ${fadeIn} 1900ms;
    }
    &:nth-of-type(5) {
      animation: ${fadeIn} 2200ms;
    }
    &:nth-of-type(6) {
      animation: ${fadeIn} 2500ms;
    }
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeIn} 1000ms;
  }
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
