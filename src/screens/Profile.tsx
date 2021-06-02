import React from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';

// libraries
import signout from '@lib/auth/signout';
import useAuth from '@lib/hooks/useAuth';

// styles
import { flex, layout } from '@styles/index';

const ProfileScreen: NavigationFunctionComponent = () => {
  const { user, loading } = useAuth({ redirect: true });

  return (
    <SafeAreaView style={[flex.flex1, flex.justifyCenter]}>
      <View style={[layout.px(48)]}>
        {loading || !user ? (
          <View>
            <Text>loading...</Text>
          </View>
        ) : (
          <View style={[flex.itemsCenter]}>
            <Text>email: {user.email}</Text>
            <Text>uid: {user.uid}</Text>
            <Button title="signout" onPress={signout} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
