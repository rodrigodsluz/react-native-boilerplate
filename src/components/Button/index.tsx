import React from 'react';

import { IButtonProps } from './interface';
import { StyledButton, Title } from './styles';

function Button({
  title, variant, onPress, width, isEnabled = true,
}: IButtonProps) {
  return (
    <StyledButton
      onPress={onPress}
      variant={variant}
      width={width}
      disabled={!isEnabled}
    >
      <Title variant={variant}>{title}</Title>
    </StyledButton>
  );
}

export default Button;
