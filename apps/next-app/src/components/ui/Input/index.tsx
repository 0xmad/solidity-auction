import { ChangeEvent, ReactElement } from 'react';

import { mergeTheme } from '../../../utils';
import { Container, Label, Input, InputTheme, defaultTheme } from './styles';

export interface Props {
  id: string;
  name: string;
  value: string | number;
  label?: string;
  type?: 'input' | 'textarea';
  placeholder?: string;
  theme?: InputTheme;
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
  onBlur,
  onFocus,
  onChange,
}: Props): ReactElement<Props> {
  const inputType = type ?? 'input';

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
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        {...mergeTheme(inputType, { theme, defaultTheme })}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
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
