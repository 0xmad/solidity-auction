import styled from 'styled-components';
import {
  color,
  space,
  width,
  height,
  flexbox,
  fontSize,
  textAlign,
  border,
  SpaceProps,
  WidthProps,
  HeightProps,
  FlexboxProps,
  TextAlignProps,
  FontSizeProps,
  BorderProps,
  ColorProps,
} from 'styled-system';

export type BoxProps = SpaceProps &
  WidthProps &
  HeightProps &
  BorderProps &
  ColorProps &
  FontSizeProps;

export type FlexProps = BoxProps & FlexboxProps;

export type TextProps = ColorProps &
  TextAlignProps &
  SpaceProps &
  FontSizeProps;

export const Box = styled.div`
  ${color};
  ${border};
  ${fontSize};
  ${space};
  ${height};
  ${width};
`;

export const Flex = styled(Box)`
  display: flex;

  ${flexbox};
`;

export const Text = styled.span`
  ${color};
  ${textAlign};
  ${fontSize};
  ${space};
`;
