import React, { useState } from 'react';
import { Dimensions, NativeScrollEvent, ScrollView } from 'react-native';

const WIDTH = Dimensions.get('window').width;

import * as S from './styles';

type Slides = {
  id: string,
  img: string,
}

type CarouselSlidesProps = {
  imgSlides: Slides[]
}

export function CarouselSlides({ imgSlides }: CarouselSlidesProps) {
  const [imgActive, setImgActive] = useState(0);

  function handleOnChange(nativeEvent: NativeScrollEvent) {
    if(nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if(slide != imgActive) {
        setImgActive(slide);
      }
    }
  }

  return (
    <>
      <ScrollView
        onScroll={({nativeEvent}) => handleOnChange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={{ width: WIDTH, height: 200 }}
      >
        {
          imgSlides.map((slide) => 
            <S.ImageSlide
              key={slide.id}
              style={{ width: WIDTH }}
              source={{ uri: slide.img }}
            />
          )
        }
      </ScrollView>
      <S.WrapperContainerDot>
        <S.WrapperDot>
          {
            imgSlides.map((slide, index) => 
              <S.Dot
                key={slide.id}
                isActive={imgActive == index ? true : false}
              >
                ●
              </S.Dot>
            )
          }
        </S.WrapperDot>
      </S.WrapperContainerDot>
    </>
  );
}