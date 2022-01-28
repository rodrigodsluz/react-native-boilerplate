import styled, { css } from 'styled-components/native';

export const StyledButton = styled.Pressable<{
  variant?: string;
  width?: string;
}>`
  ${({ theme, width, variant }) => css`
    height: 56px;
    justify-content: center;
    align-items: center;
    width: ${width || '160px'};
    background: ${theme.colors.error};
    border: ${variant === 'solid' ? 'none' : `1px solid ${theme.colors.grey}`};
    border-radius: 12px;
  `}
`;

export const Title = styled.Text<{
  variant?: string;
}>`
  color: ${({ theme, variant }) => (variant === 'solid' ? theme.colors.white : theme.colors.grey)};
  font-size: 16px;
  font-weight: 600;
`;
