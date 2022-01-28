import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
  justify-content: center;
  align-items: center;
`;
