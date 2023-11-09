import { css } from "styled-components";

export const COLOR = {
  O: "orange",
  P: "purple",
  B: "blue",
  G: "green",
}

export const REL = {
  O: "지인",
  P: "동료",
  B: "친구",
  G: "가족",
}

export const ORANGE = css`
  --${COLOR.O}1: #FFF0D6;
  --${COLOR.O}2: #FFE2AD;
  --${COLOR.O}3: #FFC583;
  --${COLOR.O}4: #FFAE65;
  --${COLOR.O}5: #FF8832;
`

export const PURPLE = css`
  --${COLOR.P}1: #F8F0FF;
  --${COLOR.P}2: #ECD9FF;
  --${COLOR.P}3: #DCB9FF;
  --${COLOR.P}4: #C894FD;
  --${COLOR.P}5: #AB57FF;
  --${COLOR.P}6: #9935FF;
  --${COLOR.P}7: #861DEE;
  --${COLOR.P}8: #6E0AD1;
  --${COLOR.P}9: #5603A7;
`

export const BLUE = css`
  --${COLOR.B}1: #E2F5FF;
  --${COLOR.B}2: #B1E4FF;
  --${COLOR.B}3: #7CD2FF;
  --${COLOR.B}4: #34B9FF;
  --${COLOR.B}5: #00A2FE;
`

export const GREEN = css`
  --${COLOR.G}1: #E4FBDC;
  --${COLOR.G}2: #D0F5C3;
  --${COLOR.G}3: #9BE282;
  --${COLOR.G}4: #60CF37;
  --${COLOR.G}5: #2BA600;
`

export const GRAYSCALE = css`
  --Gray1: #F6F6F6;
  --Gray2: #EEEEEE;
  --Gray3: #CCCCCC;
  --Gray4: #999999;
  --Gray5: #555555;
  --Gray6: #4A4A4A;
  --Gray7: #3A3A3A;
  --Gray8: #2B2B2B;
  --Gray9: #181818;
`

export const MAIN = css`
  --White: #FFFFFF;
  --Black: #000000;
  --Error: #DC3A3A;
  --Surface: #F6F8FF;
`