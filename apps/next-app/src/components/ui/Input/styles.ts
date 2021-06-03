import styled from 'styled-components';

import { Box, Flex, Text, BoxProps, FlexProps, TextProps } from '../Primitives';

export const Container = styled(Flex)``;

export const Label = styled(Text)``;

export const Input = styled(Box)``;

export interface InputTheme {
  container?: FlexProps;
  label?: TextProps;
  input?: BoxProps;
  textarea?: BoxProps;
}

const inputTheme = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'doveGray',
  borderRadius: 1,
  px: 3,
  fontSize: 1,
};

export const defaultTheme: InputTheme = {
  container: {
    flexDirection: 'column',
    mb: 3,
  },
  label: {
    fontSize: 2,
    mb: 2,
  },
  input: {
    ...inputTheme,
    height: 36,
  },
  textarea: {
    ...inputTheme,
    height: 72,
    py: 2,
  },
};
