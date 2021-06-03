import React, { useCallback, useState } from 'react';
import { Alert, View } from 'react-native';
import { Button, Input } from 'react-native-elements';

import updateUserData from '@lib/user/updateUserData';

interface Props {
  next: () => void;
  mutate?: (newName: string) => Promise<void> | void;
}

export default function DisplayName({ next, mutate }: Props) {
  const [name, setName] = useState('');

  const handleSubmit = useCallback(
    async (name: string) => {
      try {
        await updateUserData({ displayName: name });
        if (mutate) {
          await mutate(name);
        }

        next();
      } catch (err) {
        Alert.alert(err.message);
      }
    },
    [next, mutate],
  );

  return (
    <View>
      <Input
        placeholder="홍길동"
        maxLength={10}
        value={name}
        onChangeText={val => setName(val)}
      />
      <Button
        title="다음"
        disabled={!name}
        onPress={() => handleSubmit(name)}
      />
    </View>
  );
}
