import { createGlobalStyle } from "styled-components";

import BarriecitoWoff from "../fonts/Barriecito-Regular.woff";
import BarriecitoWoff2 from "../fonts/Barriecito-Regular.woff2";
import BasicWoff from "../fonts/Basic-Regular.woff";
import BasicWoff2 from "../fonts/Basic-Regular.woff2";
import GafataWoff from "../fonts/Gafata-Regular.woff";
import GafataWoff2 from "../fonts/Gafata-Regular.woff2";
import RobotoWoff from "../fonts/RobotoFlex-Regular.woff";
import RobotoWoff2 from "../fonts/RobotoFlex-Regular.woff2";


export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Barriecito';
        src: 
            local('Manrope'), 
            url(${BarriecitoWoff}) format('woff'),
            url(${BarriecitoWoff2}), format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Basic';
        src: 
            local('Manrope'), 
            url(${BasicWoff}) format('woff'),
            url(${BasicWoff2}), format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gafata';
        src: 
            local('Manrope'), 
            url(${GafataWoff}) format('woff'),
            url(${GafataWoff2}), format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'RobotoFlex';
        src: 
            local('Manrope'), 
            url(${RobotoWoff}) format('woff'),
            url(${RobotoWoff2}), format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
`