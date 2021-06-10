import React, { useMemo } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { NavigationFunctionComponent } from 'react-native-navigation';

import LoadingScreen from '@components/core/Loading';

import useUser from '@lib/hooks/useUser';
import editProfilePhoto from '@lib/storage/editProfilePhoto';

// styles
import {
  bgColor,
  flex,
  font,
  layout,
  text,
  textColor,
  borderColor,
} from '@styles/index';

import { GENDER } from '~/helper';
import signout from '~/lib/auth/signout';

const menuList = [
  {
    title: '지난 여행 보기',
    screenName: 'PreviousTravel',
  },
  {
    title: 'About Tingle',
    screenName: 'AboutTingle',
  },
  {
    title: '의견 보내기',
    screenName: 'SendFeedback',
  },
] as const;

const MenuScreen: NavigationFunctionComponent = () => {
  const { user } = useUser();

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  if (!user) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={[flex.flex1]}>
      {/**
       * Profile Edit Section
       */}
      <View style={[layout.px(16), layout.py(8), bgColor.GRAY[50]]}>
        <Text style={[text.lg, textColor.GRAY[700], font.medium]}>
          내 프로필 수정
        </Text>
        <View style={[flex.itemsCenter, layout.mt(20)]}>
          <Avatar
            size="large"
            title={user.displayName[0]}
            source={{ uri: user.profileUrl ?? undefined }}
            rounded
            containerStyle={[
              bgColor.GRAY[100],
              layout.border(1),
              borderColor.GRAY[200],
            ]}
            titleStyle={[textColor.GRAY[500]]}>
            <Avatar.Accessory
              size={20}
              onPress={() => {
                editProfilePhoto({
                  onStart: () => console.log('start'),
                  onEnd: () => {
                    console.log('end');
                    // refresh();
                  },
                });
              }}
            />
          </Avatar>
        </View>
        <Text style={[text.center, layout.mt(8), textColor.GRAY[700], text.lg]}>
          {user.displayName}
        </Text>
        <Text style={[text.center, layout.mt(4), layout.mb(16)]}>
          {currentYear - user.birthYear + 1}세 {GENDER[user.gender]}
        </Text>
      </View>
      <ScrollView style={[flex.flex1]}>
        {menuList.map((list) => (
          <ListItem
            key={list.title}
            bottomDivider
            onPress={() => {
              console.log(list.screenName);
              // TODO: push `screenName` screen.
            }}>
            <ListItem.Content>
              <ListItem.Title>{list.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
        <ListItem
          bottomDivider
          onPress={() => {
            signout();
          }}>
          <ListItem.Content>
            <ListItem.Title>로그아웃</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </ScrollView>
    </SafeAreaView>
  );
};

MenuScreen.options = {
  topBar: {
    title: {
      text: '메뉴',
    },
  },
};

export default MenuScreen;
