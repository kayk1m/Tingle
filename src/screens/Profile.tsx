import React, { useCallback, useEffect, useState } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';

// libraries
import { getTokens, renewToken } from '@lib/token';
import { signout } from '@lib/auth/signout';

// styles
import { flex, layout } from '@styles/index';

// types
import { Tokens } from 'types/auth';

const ProfileScreen: NavigationFunctionComponent = () => {
  const [tokens, setTokens] = useState<Tokens | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(() => {
    getTokens()
      .then(tok => setTokens(tok))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renewAccessToken = useCallback(
    async (accessToken: string, refreshToken: string) => {
      setLoading(true);
      await renewToken(accessToken, refreshToken);
      fetchData();
    },
    [fetchData],
  );

  return (
    <SafeAreaView style={[flex.flex1, flex.justifyCenter]}>
      <View style={[layout.px(48)]}>
        {tokens === null ? (
          <View>
            <Text>loading...</Text>
          </View>
        ) : (
          <View style={[flex.itemsCenter]}>
            <Text>accessToken: {tokens.accessToken}</Text>
            <Text style={[layout.mt(8)]}>
              refreshToken: {tokens.refreshToken}
            </Text>
            <Button title="signout" onPress={signout} />
            <Button
              title="refresh"
              onPress={() => {
                renewAccessToken(tokens.accessToken, tokens.refreshToken);
              }}
              disabled={loading}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
