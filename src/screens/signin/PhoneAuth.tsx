import React, { useCallback, useState } from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { setRoot } from 'react-native-navigation-hooks';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

// routes
import { mainRoot, registrationRoot } from '../../routes';

// libraries
import getUserData from '@lib/user/getUserData';
import createUserData from '@lib/user/createUserData';
import checkUserData from '@lib/user/checkUserData';

// styles
import { bgColor, flex, layout } from '@styles/index';

const PhoneAuthScreen: NavigationFunctionComponent = () => {
  const [phoneNum, setPhoneNum] = useState('');
  const [confirmCode, setConfirmCode] = useState('');
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

  const signInWithPhoneNumber = useCallback(async (phoneNum: string) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNum);
      setConfirm(confirmation);
    } catch (err) {
      let msg: string;
      switch (err.code) {
        case 'auth/invalid-phone-number':
          msg = '올바르지 않은 번호 형식입니다.';
          break;
        default:
          msg = err.message;
          break;
      }
      Alert.alert(msg);
    }
  }, []);

  const handleConfirm = useCallback(
    async (code: string) => {
      if (!confirm) {
        return;
      }
      try {
        const credential = await confirm.confirm(code);

        if (!credential) {
          return console.error('confirmation failed.');
        }

        const userData = await getUserData(credential.user.uid);

        if (userData) {
          if (await checkUserData()) {
            setRoot(mainRoot);
          } else {
            setRoot(registrationRoot);
          }
        } else {
          if (credential.user.phoneNumber === null) {
            throw new Error('Missing phoneNum.');
          }
          await createUserData(credential.user.phoneNumber);
          setRoot(registrationRoot);
        }
      } catch (err) {
        Alert.alert(err.message);
      }
    },
    [confirm],
  );

  return (
    <SafeAreaView style={[flex.flex1, flex.justifyCenter, bgColor.white]}>
      {confirm === null ? (
        <View style={[layout.px(16)]}>
          <Input
            placeholder="휴대전화번호"
            value={phoneNum}
            onChangeText={(val) => setPhoneNum(val)}
          />
          <Button
            title="인증코드 전송"
            disabled={!phoneNum}
            onPress={() => signInWithPhoneNumber(phoneNum)}
          />
        </View>
      ) : (
        <View style={[layout.px(16)]}>
          <Input
            placeholder="인증코드"
            value={confirmCode}
            onChangeText={(val) => setConfirmCode(val)}
          />
          <Button
            title="인증코드 전송"
            disabled={!confirmCode}
            onPress={() => handleConfirm(confirmCode)}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default PhoneAuthScreen;
