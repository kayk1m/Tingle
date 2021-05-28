import React, { useCallback, useState } from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { setRoot } from 'react-native-navigation-hooks';

// routes
import { mainRoot } from 'routes';

// libraries
import { signin, SigninProps } from '@lib/auth/signin';

// styles
import { flex, layout, text } from '@styles/index';

const SigninScreen: NavigationFunctionComponent = () => {
  const [userInputs, setUserInputs] = useState<SigninProps>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (user: SigninProps) => {
    setLoading(true);
    try {
      await signin(user);

      setRoot(mainRoot);
    } catch (err) {
      Alert.alert(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <SafeAreaView style={[flex.flex1, flex.justifyCenter]}>
      <View style={[layout.px(48)]}>
        <Text style={[text.center]}>Signin</Text>
        <TextInput
          style={[layout.mt(8)]}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="email"
          value={userInputs.email}
          onChangeText={val => setUserInputs(prev => ({ ...prev, email: val }))}
        />
        <TextInput
          style={[layout.mt(8)]}
          secureTextEntry
          placeholder="password"
          value={userInputs.password}
          onChangeText={val =>
            setUserInputs(prev => ({ ...prev, password: val }))
          }
        />
        <View style={flex.selfEnd}>
          <Button
            title="Submit"
            onPress={() => handleSubmit(userInputs)}
            disabled={loading}
          />
        </View>
        {loading && <Text>loading...</Text>}
      </View>
    </SafeAreaView>
  );
};

export default SigninScreen;
