import { ChangeEvent, ReactElement } from 'react';

import { mergeTheme } from '../../../utils';
import {
  Container,
  Label,
  Input,
  InputTheme,
  ErrorText,
  defaultTheme,
} from './styles';

export interface Props {
  id: string;
  name: string;
  value: string | number;
  label?: string;
  type?: 'input' | 'textarea';
  placeholder?: string;
  theme?: InputTheme;
  meta?: unknown;
  onBlur: () => void;
  onFocus: () => void;
  onChange: (event: ChangeEvent) => void;
}

function InputUI({
  id,
  type,
  name,
  label,
  theme,
  placeholder,
  value,
  meta,
  onBlur,
  onFocus,
  onChange,
}: Props): ReactElement<Props> {
  const inputType = type ?? 'input';
  const { error, touched } = meta as { error?: string; touched?: boolean };
  const canShowError = Boolean(error && touched);

  return (
    <Container {...mergeTheme('container', { theme, defaultTheme })}>
      {label && (
        <Label
          as="label"
          htmlFor={id}
          {...mergeTheme('label', { theme, defaultTheme })}
        >
          {label}
        </Label>
      )}
      <Input
        data-testid={id}
        as={inputType}
        error={canShowError}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        {...mergeTheme(inputType, { theme, defaultTheme })}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
      />
      {canShowError && <ErrorText>{error}</ErrorText>}
    </Container>
  );
}

InputUI.defaultProps = {
  type: undefined,
  meta: {},
  label: '',
  placeholder: '',
  theme: defaultTheme,
};

export default InputUI;
