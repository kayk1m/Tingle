import React, { useCallback, useState } from 'react';
import { Alert, View } from 'react-native';
import { Button, Input } from 'react-native-elements';

import updateUserData from '@lib/user/updateUserData';

interface Props {
  next: () => void;
  mutate?: (newBirthYear: number) => Promise<void> | void;
}

export default function BirthYear({ next, mutate }: Props) {
  const [birthYear, setBirthYear] = useState<string>('');

  const handleSubmit = useCallback(
    async (birthYear: string) => {
      try {
        await updateUserData({ birthYear });
        if (mutate) {
          await mutate(Number(birthYear));
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
        placeholder="YYYY"
        maxLength={4}
        value={birthYear ? String(birthYear) : ''}
        onChangeText={(val) => {
          // TODO: type check!!! (number)
          try {
            if (birthYear) {
              Number(birthYear);
            }
            setBirthYear(val);
          } catch {
            Alert.alert('숫자만 입력해주세요!');
          }
        }}
      />
      <Button
        title="다음"
        disabled={birthYear.length !== 4}
        onPress={() => {
          if (!birthYear) {
            return;
          }
          handleSubmit(birthYear);
        }}
      />
    </View>
  );
}
