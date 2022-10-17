import React, { useRef, useState } from 'react';
import { StatusBar, Linking } from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import qs from 'qs';

import iconPosts from '../../assets/iconPosts.png';
import iconContact from '../../assets/iconContact.png';

import * as S from './styles';
import { ModalContact } from '../ModalContact';
import { FormData, Input } from '../Input';
import { ButtonIcon } from '../ButtonIcon';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

const schema = Yup.object().shape({
  name: Yup.string().matches(/(\w.+\s).+/, 'Enter at least 2 names').required('Full name is required'),
  email: Yup.string().email("Please enter valid email").required('E-mail is required'),
  phone: Yup.string().min(11, "min 11 numbers and only numbers").required('Phone is required'),
  message: Yup.string().required('Message is required'),

})

export function Tabbar() {
  const [iconPostActive, setIconPostActive] = useState(true);
  const [iconContactActive, setIconContactActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const navigation = useNavigation();

  const { 
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({ 
    resolver: yupResolver(schema) 
  })

  const refEmail = useRef<any>();
  const refPhone = useRef<any>();
  const refMessage = useRef<any>();

  async function handleSendEmailContact(form: FormData) {

    let url = `mailto:addressee@gmail.com`;

    let bodyMsg = 'Name: '+form.name+ `\n`
                  +'E-mail: '+form.email+ `\n`
                  +'Phone: '+form.phone+ `\n`
                  +'Message: '+form.message

    const query = qs.stringify({
        subject: 'Sending contact by test coderock',
        body: bodyMsg,
        cc: 'copyaddressee@gmail.com',
    });

    if (query.length) {
        url += `?${query}`;
    }

    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
        throw new Error('Provided URL can not be handled');
    }
    reset();

    return Linking.openURL(url);
  }

  function handleGoPosts() {
    setIconPostActive(true)
    setIconContactActive(false)
    navigation.reset({
      index: 0,
      routes: [{ name: 'Posts' }]
    })
  }

  function handleOpenModal() {
    setIconPostActive(false)
    setIconContactActive(true)
    setModalOpen(true)
    StatusBar.setBackgroundColor('white')
  }

  function handleCloseModal() {
    reset();
    setIconPostActive(true)
    setIconContactActive(false)
    setModalOpen(false)
    StatusBar.setBackgroundColor('transparent')
  }

  return (
    <S.Container>
      <S.ButtonTab isActive={iconPostActive} onPress={handleGoPosts}>
        <S.ImageIcon 
          source={iconPosts} 
          isActive={iconPostActive} 
        />
      </S.ButtonTab>
      <S.ButtonTab isActive={iconContactActive} onPress={handleOpenModal}>
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
          name="name"
          title="Name"
          placeholder="Fill your name"
          control={control}
          returnKeyType="next"
          onSubmitEditing={() => refEmail.current.focus()}
          error={errors.name && errors.name.message}
        />
        <Input 
          name="email"
          title="E-mail"
          placeholder="Fill a valid e-mail"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          control={control}
          returnKeyType="next"
          onSubmitEditing={() => refPhone.current.focus()}
          isRef={refEmail}
          error={errors.email && errors.email.message}
        />
        <Input 
          name="phone"
          title="Phone"
          placeholder="Fill your phone"
          keyboardType="numeric"
          maxLength={11}
          control={control}
          returnKeyType="next"
          onSubmitEditing={() => refMessage.current.focus()}
          isRef={refPhone}
          error={errors.phone && errors.phone.message}
        />
        <Input 
          name="message"
          title="Message"
          placeholder="Hello..."
          multiline={true}
          numberOfLines={8}
          control={control}
          isRef={refMessage}
          style={{ textAlignVertical: 'top' }}
          error={errors.message && errors.message.message}
        />

        <S.WrapperButtonModal>
          <ButtonIcon title="Submit" typeIcon="send" onPress={handleSubmit(handleSendEmailContact)} />
        </S.WrapperButtonModal>
      </ModalContact>
    </S.Container>
  );
}