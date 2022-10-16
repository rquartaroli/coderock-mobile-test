import React, { ReactNode } from 'react';
import { Keyboard, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native';
import { Header } from '../Header';

import * as S from './styles';

type ModalContactProps = ModalProps & {
  onClose: () => void
  children: ReactNode
}

export function ModalContact({ onClose, children, ...rest }: ModalContactProps) {
  return (
    <Modal
      animationType="fade"
      transparent
      {...rest}
    >
      <Header 
        title="Contact"
        variant="withCloseScreen"
        actionButton={onClose}
        backGroundColor="white"
        inModal={true}
      />
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.Content 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ paddingBottom: 16 }}
        >
          { children }
        </S.Content>
      </S.Container>
    </TouchableWithoutFeedback>
    </Modal>
  );
}