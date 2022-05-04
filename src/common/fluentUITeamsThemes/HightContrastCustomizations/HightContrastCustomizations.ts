import { IPalette, ISemanticColors } from 'office-ui-fabric-react/lib/Styling';

export namespace HightContrastBaseColors {
  export const YELLOW = "#ffff00";
  export const BLUE = "#1aebff";
  export const GREEN = "#3ff23f";
  export const WHITE = "#ffffff";
  export const BLACK = "#000000";
}

export const HightContrastPalette: Partial<IPalette> = {
  themeDarker: HightContrastBaseColors.YELLOW,
  themeDark: HightContrastBaseColors.YELLOW,
  themeDarkAlt: HightContrastBaseColors.YELLOW,
  themePrimary: HightContrastBaseColors.BLUE,
  themeSecondary: HightContrastBaseColors.YELLOW,
  themeTertiary: HightContrastBaseColors.GREEN,
  themeLight: HightContrastBaseColors.BLUE,
  themeLighter: HightContrastBaseColors.BLUE,
  themeLighterAlt: HightContrastBaseColors.BLUE,
  neutralDark: HightContrastBaseColors.BLACK,
  neutralPrimary: HightContrastBaseColors.WHITE,
  neutralPrimaryAlt: HightContrastBaseColors.WHITE,
  neutralSecondary: HightContrastBaseColors.WHITE,
  neutralSecondaryAlt: HightContrastBaseColors.WHITE,
  neutralTertiary: HightContrastBaseColors.WHITE,
  neutralTertiaryAlt: HightContrastBaseColors.WHITE,
  neutralQuaternary: HightContrastBaseColors.WHITE,
  neutralQuaternaryAlt: HightContrastBaseColors.WHITE,
  neutralLight: HightContrastBaseColors.BLACK,
  neutralLighter: HightContrastBaseColors.BLACK,
  neutralLighterAlt: HightContrastBaseColors.BLACK,
  black: HightContrastBaseColors.WHITE,
  white: HightContrastBaseColors.BLACK,
};

export const HightContrastSemanticColors: Partial<ISemanticColors> = {
  accentButtonBackground: HightContrastBaseColors.BLUE,
  accentButtonText: HightContrastBaseColors.BLACK,
  actionLink: HightContrastBaseColors.YELLOW,
  actionLinkHovered: HightContrastBaseColors.YELLOW,
  blockingBackground: HightContrastBaseColors.BLACK,
  blockingIcon: HightContrastBaseColors.WHITE,
  bodyBackground: HightContrastBaseColors.BLACK,
  bodyBackgroundChecked: HightContrastBaseColors.BLUE,
  bodyBackgroundHovered: HightContrastBaseColors.YELLOW,
  bodyDivider: HightContrastBaseColors.WHITE,
  bodyFrameBackground: HightContrastBaseColors.BLACK,
  bodyFrameDivider: HightContrastBaseColors.WHITE,
  bodyStandoutBackground: HightContrastBaseColors.BLACK,
  bodySubtext: HightContrastBaseColors.WHITE,
  bodyText: HightContrastBaseColors.WHITE,
  bodyTextChecked: HightContrastBaseColors.BLACK,
  buttonBackground: HightContrastBaseColors.BLACK,
  buttonBackgroundDisabled: HightContrastBaseColors.GREEN,
  buttonBorder: HightContrastBaseColors.WHITE,
  buttonBorderDisabled: HightContrastBaseColors.WHITE,
  buttonTextChecked: HightContrastBaseColors.BLACK,
  buttonTextDisabled: HightContrastBaseColors.BLACK,
  buttonText: HightContrastBaseColors.WHITE,
  buttonTextPressed: HightContrastBaseColors.BLACK,
  buttonTextHovered: HightContrastBaseColors.BLACK,
  buttonTextCheckedHovered: HightContrastBaseColors.BLACK,
  buttonBackgroundPressed: HightContrastBaseColors.BLUE,
  buttonBackgroundHovered: HightContrastBaseColors.YELLOW,
  buttonBackgroundChecked: HightContrastBaseColors.BLUE,
  buttonBackgroundCheckedHovered: HightContrastBaseColors.YELLOW,
  cardStandoutBackground: HightContrastBaseColors.BLACK,
  defaultStateBackground: HightContrastBaseColors.BLACK,
  disabledBodySubtext: HightContrastBaseColors.GREEN,
  disabledBodyText: HightContrastBaseColors.GREEN,
  disabledBorder: HightContrastBaseColors.GREEN,
  disabledSubtext: HightContrastBaseColors.GREEN,
  disabledBackground: HightContrastBaseColors.BLACK,
  disabledText: HightContrastBaseColors.GREEN,
  errorBackground: HightContrastBaseColors.BLACK,
  errorIcon: HightContrastBaseColors.WHITE,
  errorText: HightContrastBaseColors.WHITE,
  infoBackground: HightContrastBaseColors.BLACK,
  infoIcon: HightContrastBaseColors.WHITE,
  inputBackground: HightContrastBaseColors.BLACK,
  inputBackgroundCheckedHovered: HightContrastBaseColors.YELLOW,
  inputBackgroundChecked: HightContrastBaseColors.BLUE,
  inputBorder: HightContrastBaseColors.WHITE,
  inputBorderHovered: HightContrastBaseColors.YELLOW,
  inputFocusBorderAlt: HightContrastBaseColors.BLUE,
  inputForegroundChecked: HightContrastBaseColors.BLACK,
  inputIcon: HightContrastBaseColors.WHITE,
  inputIconDisabled: HightContrastBaseColors.GREEN,
  inputIconHovered: HightContrastBaseColors.BLACK,
  inputPlaceholderBackgroundChecked: HightContrastBaseColors.WHITE,
  inputPlaceholderText: HightContrastBaseColors.WHITE,
  inputText: HightContrastBaseColors.WHITE,
  inputTextHovered: HightContrastBaseColors.WHITE,
  link: HightContrastBaseColors.YELLOW,
  linkHovered: HightContrastBaseColors.YELLOW,
  listBackground: HightContrastBaseColors.BLACK,
  listHeaderBackgroundHovered: HightContrastBaseColors.YELLOW,
  listHeaderBackgroundPressed: HightContrastBaseColors.YELLOW,
  listItemBackgroundChecked: HightContrastBaseColors.BLUE,
  listItemBackgroundCheckedHovered: HightContrastBaseColors.YELLOW,
  listItemBackgroundHovered: HightContrastBaseColors.YELLOW,
  listText: HightContrastBaseColors.BLACK,
  menuBackground: HightContrastBaseColors.BLACK,
  menuItemBackgroundHovered: HightContrastBaseColors.YELLOW,
  menuItemBackgroundPressed: HightContrastBaseColors.YELLOW,
  menuDivider: HightContrastBaseColors.WHITE,
  menuIcon: HightContrastBaseColors.WHITE,
  menuHeader: HightContrastBaseColors.WHITE,
  menuItemText: HightContrastBaseColors.WHITE,
  menuItemTextHovered: HightContrastBaseColors.BLACK,
  messageLink: HightContrastBaseColors.YELLOW,
  messageLinkHovered: HightContrastBaseColors.YELLOW,
  messageText: HightContrastBaseColors.BLACK,
  primaryButtonBackground: HightContrastBaseColors.BLUE,
  primaryButtonBackgroundDisabled: HightContrastBaseColors.GREEN,
  primaryButtonBackgroundHovered: HightContrastBaseColors.YELLOW,
  primaryButtonBackgroundPressed: HightContrastBaseColors.BLUE,
  primaryButtonBorder: HightContrastBaseColors.BLACK,
  primaryButtonText: HightContrastBaseColors.BLACK,
  primaryButtonTextDisabled: HightContrastBaseColors.BLACK,
  primaryButtonTextHovered: HightContrastBaseColors.BLACK,
  primaryButtonTextPressed: HightContrastBaseColors.BLACK,
  severeWarningBackground: HightContrastBaseColors.YELLOW,
  severeWarningIcon: HightContrastBaseColors.BLACK,
  smallInputBorder: HightContrastBaseColors.WHITE,
  successBackground: HightContrastBaseColors.BLUE,
  successIcon: HightContrastBaseColors.BLACK,
  variantBorder: HightContrastBaseColors.WHITE,
  variantBorderHovered: HightContrastBaseColors.WHITE,
  warningBackground: HightContrastBaseColors.YELLOW,
  warningIcon: HightContrastBaseColors.BLACK
};
