import { css } from '@emotion/react';

const layout = () => {
  let str = '';
  for (let i = 1; i <= 10; i++) {
    str += `
      .flex-${i} {
        flex: ${i} !important;
      }
      .gap-${i * 5} {
        gap: ${i * 5}px !important;
      }
      .m-${i * 5} {
        margin: ${5 * i}px !important;
      }
      .mt-${i * 5} {
        margin-top: ${5 * i}px !important;
      }
      .mr-${i * 5} {
        margin-right: ${5 * i}px !important;
      }
      .mb-${i * 5} {
        margin-bottom: ${5 * i}px !important;
      }
      .ml-${i * 5} {
        margin-left: ${5 * i}px !important;
      }
      .p-${i * 5} {
        padding: ${5 * i}px !important;
      }
      .pt-${i * 5} {
        padding-top: ${5 * i}px !important;
      }
      .pr-${i * 5} {
        padding-right: ${5 * i}px !important;
      }
      .pb-${i * 5} {
        padding-bottom: ${5 * i}px !important;
      }
      .pl-${i * 5} {
        padding-left: ${5 * i}px !important;
      }
      .w-${i * 10}p {
        width: ${10 * i}% !important;
      }
      .w-${i * 10} {
        width: ${10 * i}px !important;
      }
      .bdrs-${i} {
        border-radius: ${i}px !important;
      }
    `;
  }
  return css`
    ${str}
  `;
};

export default layout;
