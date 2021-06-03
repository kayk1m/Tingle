import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationFunctionComponent } from 'react-native-navigation';
import auth from '@react-native-firebase/auth';
import { setRoot } from 'react-native-navigation-hooks/dist';

import { mainRoot, signinRoot } from 'routes';

import { BirthYear, DisplayName, Gender } from '@components/registration';

import signout from '@lib/auth/signout';
import useAuth from '@lib/hooks/useAuth';
import getUserData from '@lib/user/getUserData';

// styles
import { flex, layout, text } from '@styles/index';

// types
import { UserData } from 'types/user';

const STEPS = {
  displayName: 0,
  birthYear: 1,
  gender: 2,
} as const;

function calcStep(data: UserData) {
  const { displayName, birthYear, gender } = data;
  if (!displayName) {
    return STEPS.displayName;
  }
  if (!birthYear) {
    return STEPS.birthYear;
  }
  if (!gender) {
    return STEPS.gender;
  }

  return setRoot(mainRoot) as never;
}

const UserDataRegistrationScreen: NavigationFunctionComponent = () => {
  const { user: authUser } = useAuth();
  const [initializing, setInitializing] = useState(true);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [curStep, setCurStep] = useState<typeof STEPS[keyof typeof STEPS]>();

  useEffect(() => {
    if (authUser) {
      getUserData(authUser.uid)
        .then(userData => {
          setUserData(userData);
          setCurStep(calcStep(userData));
        })
        .catch(err => {
          console.error(err);
        })
        .finally(() => {
          setInitializing(false);
        });
    }
  }, [authUser]);

  if (initializing) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[flex.flex1, flex.justifyCenter]}>
      <View style={[layout.px(16)]}>
        <Text style={text['2xl']}>UserDataRegistrationScreen</Text>
        <Text>displayName: {auth().currentUser?.displayName ?? 'null'}</Text>
        <Text>email: {auth().currentUser?.email ?? 'null'}</Text>
        <Text>phoneNum: {auth().currentUser?.phoneNumber ?? 'null'}</Text>
        <Text>{JSON.stringify(userData)}</Text>
        <View style={layout.mt(16)}>
          <Button
            title="로그아웃"
            onPress={() => signout().then(() => setRoot(signinRoot))}
          />
        </View>
      </View>
      <View style={[layout.mt(20), layout.px(16)]}>
        {curStep !== undefined &&
          userData !== null &&
          (() => {
            switch (curStep) {
              case STEPS.displayName:
                return (
                  <DisplayName
                    next={() => setCurStep(STEPS.birthYear)}
                    mutate={newName => {
                      setUserData({
                        ...userData,
                        displayName: newName,
                      });
                    }}
                  />
                );
              case STEPS.birthYear:
                return (
                  <BirthYear
                    next={() => setCurStep(STEPS.gender)}
                    mutate={birthYear => {
                      setUserData({
                        ...userData,
                        birthYear,
                      });
                    }}
                  />
                );
              case STEPS.gender:
                return (
                  <Gender
                    next={() => setRoot(mainRoot)}
                    mutate={gender => {
                      setUserData({
                        ...userData,
                        gender,
                      });
                    }}
                  />
                );
            }
          })()}
      </View>
    </KeyboardAvoidingView>
  );
};

export default UserDataRegistrationScreen;
