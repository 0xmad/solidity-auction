import { ReactElement } from 'react';

import { mergeTheme } from '../../../utils';
import { Container, Button, ButtonTheme, defaultTheme } from './styles';

export interface Props {
  children: string;
  theme?: ButtonTheme;
  onClick: () => void;
}

function ButtonUI({ children, theme, onClick }: Props): ReactElement<Props> {
  return (
    <Container {...mergeTheme('container', { theme, defaultTheme })}>
      <Button
        {...mergeTheme('button', { theme, defaultTheme })}
        onClick={onClick}
      >
        {children}
      </Button>
    </Container>
  );
}

export default ButtonUI;
