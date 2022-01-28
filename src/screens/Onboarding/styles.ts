import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
  justify-content: center;
  align-items: center;
`;

export const ButtonsWrapper = styled.View`
  align-items: center
  width: 100%;
  position: absolute;
  bottom: 40px;
`;

export const ImageContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TextContainer = styled.View`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Image = styled.Image`
  height: 391px;
  width: 520px;
`;

export const Title = styled.Text`
  height: 68px;
  width: 335px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 34px;
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 34px;
  margin-top: 30px;
`;

export const Contents = styled.Text`
  height: 96px;
  width: 335px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  letter-spacing: -0.5px;
  line-height: 34px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const dotStyle = {
  width: 10,
  height: 10,
  borderRadius: 5,
  marginHorizontal: 8,
  marginBottom: 70,
  backgroundColor: 'green',
};

export const containerStyle = {
  backgroundColor: 'white',
};
