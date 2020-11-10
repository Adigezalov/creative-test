import {DISPLAY_L, DISPLAY_M, DISPLAY_S, DISPLAY_XL, DISPLAY_XS} from "../constants/displaySize.constants";

export const displaySizeHelper = (width) => {
  if (width >= 1200) {
    return DISPLAY_XL
  }
  if (width >= 992 && width < 1200) {
    return DISPLAY_L
  }
  if (width >= 768 && width < 992) {
    return DISPLAY_M
  }
  if (width >= 576 && width < 768) {
    return DISPLAY_S
  }
  if (width < 576) {
    return DISPLAY_XS
  }
}
