import { keyframes } from '@emotion/react';

/* ===============================================
#  keyframes
=============================================== */
export const fadeIn = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
  }
`;

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`;
