import { ReactElement } from 'react';

import { BoxProps, FlexProps, TextProps } from '../Primitives';
import { Container, Label, Input } from './styles';

interface InputTheme {
  container?: FlexProps;
  label?: TextProps;
  input?: BoxProps;
  textarea?: BoxProps;
}

export interface Props {
  id: string;
  name: string;
  label?: string;
  type?: 'input' | 'textarea';
  placeholder?: string;
  theme?: {
    container?: FlexProps;
    label?: TextProps;
    input?: BoxProps;
    textarea?: BoxProps;
  };
}

const inputTheme = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'doveGray',
  borderRadius: 1,
  px: 3,
  fontSize: 1,
};

const defaultTheme = {
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

const mergeTheme = (
  key: keyof InputTheme,
  theme?: InputTheme,
): Record<string, unknown> => ({
  ...defaultTheme[key],
  ...(theme?.[key] ?? {}),
});

function InputUI({
  id,
  type,
  name,
  label,
  theme,
  placeholder,
}: Props): ReactElement<Props> {
  const inputType = type ?? 'input';

  return (
    <Container {...mergeTheme('container', theme)}>
      {label && (
        <Label as="label" htmlFor={id} {...mergeTheme('label', theme)}>
          {label}
        </Label>
      )}
      <Input
        as={inputType}
        id={id}
        name={name}
        placeholder={placeholder}
        {...mergeTheme(inputType, theme)}
      />
    </Container>
  );
}

InputUI.defaultProps = {
  type: undefined,
  label: '',
  placeholder: '',
  theme: defaultTheme,
};

export default InputUI;
