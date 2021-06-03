import styled from 'styled-components';

import { Box, BoxProps } from '../Primitives';

export const Container = styled(Box)``;

export const Button = styled(Box).attrs({ as: 'button' })`
  border: none;
  height: 36px;
`;

export interface ButtonTheme {
  container?: BoxProps;
  button?: BoxProps;
}

export const defaultTheme: ButtonTheme = {
  button: {
    borderRadius: 1,
    color: 'white',
    backgroundColor: 'black',
  },
};
