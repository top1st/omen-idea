import React from 'react'
import styled from 'styled-components'
import logo from './idea-markets-logo-mark.svg'

const Wrapper = styled.svg`
  .logo {
    fill: ${props => props.theme.colors.textColorDarker};
  }

  .text {
    fill: ${props => props.theme.colors.textColorDark};
  }

  &:hover {
    .logo,
    .text {
      fill: ${props => props.theme.colors.primary};
    }
  }
`

export const OmenLogo = () => {
  return <img alt="logo" height="30px" src={logo} />
  // <Wrapper fill="none" height="28" viewBox="0 0 83 28" width="83" xmlns="http://www.w3.org/2000/svg">
  //   <path
  //     className="logo"
  //     d="M49.5947 13.9463C49.5947 14.9912 49.4141 15.9092 49.0527 16.7002C48.6914 17.4863 48.1738 18.0918 47.5 18.5166C46.8311 18.9365 46.0596 19.1465 45.1855 19.1465C44.3213 19.1465 43.5498 18.9365 42.8711 18.5166C42.1973 18.0918 41.6748 17.4888 41.3037 16.7075C40.9375 15.9263 40.752 15.0254 40.7471 14.0049V13.4043C40.7471 12.3643 40.9302 11.4463 41.2964 10.6504C41.6675 9.85449 42.1875 9.24658 42.8564 8.82666C43.5303 8.40186 44.3018 8.18945 45.1709 8.18945C46.04 8.18945 46.8091 8.39941 47.478 8.81934C48.1519 9.23438 48.6719 9.83496 49.0381 10.6211C49.4043 11.4023 49.5898 12.313 49.5947 13.353V13.9463ZM47.7417 13.3896C47.7417 12.208 47.5171 11.3022 47.0679 10.6724C46.6235 10.0425 45.9912 9.72754 45.1709 9.72754C44.3701 9.72754 43.7427 10.0425 43.2886 10.6724C42.8394 11.2974 42.6099 12.1836 42.6001 13.3311V13.9463C42.6001 15.1182 42.8271 16.0239 43.2812 16.6636C43.7402 17.3032 44.375 17.623 45.1855 17.623C46.0059 17.623 46.6357 17.3105 47.0752 16.6855C47.5195 16.0605 47.7417 15.1475 47.7417 13.9463V13.3896ZM53.9419 11.0752L53.9932 11.9028C54.5498 11.2534 55.3115 10.9287 56.2783 10.9287C57.3379 10.9287 58.063 11.334 58.4536 12.1445C59.0298 11.334 59.8403 10.9287 60.8853 10.9287C61.7593 10.9287 62.4087 11.1704 62.8335 11.6538C63.2632 12.1372 63.4829 12.8501 63.4927 13.7925V19H61.7129V13.8438C61.7129 13.3408 61.603 12.9722 61.3833 12.7378C61.1636 12.5034 60.7998 12.3862 60.292 12.3862C59.8867 12.3862 59.5547 12.4961 59.2959 12.7158C59.042 12.9307 58.8638 13.2139 58.7612 13.5654L58.7686 19H56.9888V13.7852C56.9644 12.8525 56.4883 12.3862 55.5605 12.3862C54.8477 12.3862 54.3423 12.6768 54.0444 13.2578V19H52.2646V11.0752H53.9419ZM69.8101 19.1465C68.6821 19.1465 67.7666 18.7925 67.0635 18.0845C66.3652 17.3716 66.0161 16.4243 66.0161 15.2427V15.0229C66.0161 14.2319 66.1675 13.5264 66.4702 12.9062C66.7778 12.2812 67.2075 11.7954 67.7593 11.4487C68.311 11.1021 68.9263 10.9287 69.605 10.9287C70.6841 10.9287 71.5166 11.2729 72.1025 11.9614C72.6934 12.6499 72.9888 13.624 72.9888 14.8838V15.6016H67.8105C67.8643 16.2559 68.0815 16.7734 68.4624 17.1543C68.8481 17.5352 69.3315 17.7256 69.9126 17.7256C70.728 17.7256 71.3921 17.396 71.9048 16.7368L72.8643 17.6523C72.5469 18.126 72.1221 18.4946 71.5898 18.7583C71.0625 19.0171 70.4692 19.1465 69.8101 19.1465ZM69.5977 12.3569C69.1094 12.3569 68.7139 12.5278 68.4111 12.8696C68.1133 13.2114 67.9229 13.6875 67.8398 14.2979H71.231V14.166C71.1919 13.5703 71.0332 13.1211 70.7549 12.8184C70.4766 12.5107 70.0908 12.3569 69.5977 12.3569ZM77.0283 11.0752L77.0796 11.9907C77.6655 11.2827 78.4346 10.9287 79.3867 10.9287C81.0371 10.9287 81.877 11.8735 81.9062 13.7632V19H80.1265V13.8657C80.1265 13.3628 80.0166 12.9917 79.7969 12.7524C79.582 12.5083 79.228 12.3862 78.7349 12.3862C78.0171 12.3862 77.4824 12.7109 77.1309 13.3604V19H75.3511V11.0752H77.0283Z"
  //     fill="#333333"
  //   />
  //   <path
  //     className="text"
  //     clipRule="evenodd"
  //     d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14ZM26.25 14C26.25 20.7655 20.7655 26.25 14 26.25C7.23451 26.25 1.75 20.7655 1.75 14C1.75 7.23451 7.23451 1.75 14 1.75C20.7655 1.75 26.25 7.23451 26.25 14ZM11.7867 16.2133C10.5566 14.9831 10.5566 12.9886 11.7867 11.7585C13.2716 10.2736 18.8401 8.6649 19.0876 8.91238C19.1495 8.97426 19.0953 9.36869 18.9561 9.94874C18.5385 11.6889 17.3552 15.0996 16.2415 16.2133C16.166 16.2888 16.0876 16.3597 16.0066 16.4259C15.4401 16.8897 14.7498 17.1262 14.057 17.1356C13.2366 17.1467 12.4127 16.8392 11.7867 16.2133ZM21.3521 21.4965C21.667 21.1876 21.2615 20.718 20.8547 20.8885C19.6071 21.4112 18.2373 21.7 16.8 21.7C11.001 21.7 6.3 16.999 6.3 11.2C6.3 9.76271 6.58879 8.39287 7.1115 7.14533C7.28196 6.73851 6.81241 6.33302 6.50354 6.64791C4.64568 8.54203 3.5 11.1372 3.5 14C3.5 19.799 8.20101 24.5 14 24.5C16.8628 24.5 19.458 23.3543 21.3521 21.4965Z"
  //     fillRule="evenodd"
  //   />
  // </Wrapper>
}
