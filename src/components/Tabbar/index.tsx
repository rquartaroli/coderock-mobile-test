import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import iconPosts from '../../assets/iconPosts.png';
import iconContact from '../../assets/iconContact.png';

import * as S from './styles';
import { ModalContact } from '../ModalContact';
import { Input } from '../Input';
import { ButtonIcon } from '../ButtonIcon';

export function Tabbar() {
  const [iconPostActive, setIconPostActive] = useState(true);
  const [iconContactActive, setIconContactActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');


  function handleActiveButtons() {
    setIconPostActive(!iconPostActive)
    setIconContactActive(!iconContactActive)
    if(iconContactActive) {
      console.log('volta para os Posts')
    }
    if(iconPostActive) {
      setModalOpen(true)
      StatusBar.setBackgroundColor('white')
    }
  }

  function handleCloseModal() {
    setIconPostActive(!iconPostActive)
    setIconContactActive(!iconContactActive)
    setModalOpen(!modalOpen)
    StatusBar.setBackgroundColor('transparent')
  }

  return (
    <S.Container>
      <S.ButtonTab isActive={iconPostActive} onPress={handleActiveButtons}>
        <S.ImageIcon 
          source={iconPosts} 
          isActive={iconPostActive} 
        />
      </S.ButtonTab>
      <S.ButtonTab isActive={iconContactActive} onPress={handleActiveButtons}>
        <S.ImageIcon 
          source={iconContact} 
          isActive={iconContactActive} 
        />
      </S.ButtonTab>

      <ModalContact
        visible={modalOpen}
        onClose={handleCloseModal}
      >
        <Input 
          title="Name"
          placeholder="Fill your name"
          onChangeText={setName}
          value={name}
        />
        <Input 
          title="E-mail"
          placeholder="Fill a valid e-mail"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />
        <Input 
          title="Phone"
          placeholder="Fill your phone"
          keyboardType="numeric"
          onChangeText={setPhone}
          value={phone}
        />
        <Input 
          title="Message"
          placeholder="Hello..."
          multiline={true}
          numberOfLines={8}
          onChangeText={setMessage}
          value={message}
          style={{ textAlignVertical: 'top' }}
        />

        <S.WrapperButtonModal>
          <ButtonIcon title="Submit" typeIcon="send" onPress={() => console.log('Vai enviar o form')} />
        </S.WrapperButtonModal>
      </ModalContact>
    </S.Container>
  );
}