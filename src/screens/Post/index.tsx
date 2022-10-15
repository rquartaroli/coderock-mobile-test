import React from 'react';
import { Header } from '../../components/Header';
import { Stars } from '../../components/Stars';
import { Tabbar } from '../../components/Tabbar';
import { CarouselSlides } from '../../components/CarouselSlides';

import * as S from './styles';

const img = [
  {
    id: '1',
    img: 'https://source.unsplash.com/640x640/?trees',
  },
  {
    id: '2',
    img: 'https://source.unsplash.com/640x640/?games',
  },
  {
    id: '3',
    img: 'https://source.unsplash.com/640x640/?food',
  },
  {
    id: '4',
    img: 'https://source.unsplash.com/640x640/?women',
  },
]

export function Post() {

  return (
    <S.Container>
      <Header 
        title="Post" 
        variant="withGoBack" 
        actionButton={() => console.log('vai voltar a página anterior')} 
      />
      <S.ScrollViewContainer>
        <CarouselSlides imgSlides={img} />
        <S.Content>

          <S.Title>
            Bora terminar isso aqui
          </S.Title>
          
          <S.WrapperAuthor>
            <S.InfoAuthor>
              Posted by: <S.Author>Rafael Quartaroli</S.Author>
            </S.InfoAuthor>
          </S.WrapperAuthor>

          <Stars />

          <S.Article>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </S.Article>
        </S.Content>
      </S.ScrollViewContainer>

      <Tabbar />
    </S.Container>
  );
}