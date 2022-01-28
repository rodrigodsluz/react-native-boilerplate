import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import {
  Container,
  ImageContainer,
  Image,
  TextContainer,
  Title,
  Contents,
  ButtonsWrapper,
  dotStyle,
  containerStyle,
} from './styles';

import Button from '@components/Button';
import { carouselItems, ICarouselProps } from '@utils/carouselItems';

export type RootStackParamList = {
  SignUpWithPhone: object | undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

function OnboardingScreen() {
  const [activeSlide, setActiveSlide] = useState(0);

  const SLIDER_WIDTH = Dimensions.get('window').width;

  const navigation = useNavigation<NavigationProps>();

  const handleSignUp = () => {
    navigation.navigate('SignUpWithPhone');
  };

  const renderCarouselItem = ({ item }: { item: ICarouselProps; index: number }) => (
    <View>
      <ImageContainer>
        <Image
          source={item.image}
        />
      </ImageContainer>

      <TextContainer>
        <Title>{item.title}</Title>
        <Contents>{item.contents}</Contents>
      </TextContainer>
    </View>
  );

  return (
    <Container>
      <Carousel
        data={carouselItems}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={SLIDER_WIDTH}
        renderItem={renderCarouselItem}
        onSnapToItem={(index) => setActiveSlide(index)}
      />

      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeSlide}
        containerStyle={containerStyle}
        dotStyle={dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />

      <ButtonsWrapper>
        <Button title="Sign-up" onPress={handleSignUp} variant="solid" width="85%" />
      </ButtonsWrapper>
    </Container>
  );
}

export default OnboardingScreen;
