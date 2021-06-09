import React, { useCallback, useState } from 'react';
import { Alert, View } from 'react-native';
import { Button } from 'react-native-elements';

import updateUserData from '@lib/user/updateUserData';
import saveUserData from '@lib/user/saveUserData';

// styles
import { bgColor, flex, textColor } from '@styles/index';

// types
import { Gender, GENDER_VARIANTS } from '~/types/user';

const GENDER_DISPLAY = {
  male: '남성',
  female: '여성',
  other: '그 외',
} as const;

interface Props {
  next: () => void;
  mutate?: (newGender: Gender) => Promise<void> | void;
}

export default function GenderSelect({ next, mutate }: Props) {
  const [gender, setGender] = useState<Gender | null>(null);

  const handleSubmit = useCallback(
    async (gender: Gender) => {
      try {
        await updateUserData({ gender });
        if (mutate) {
          await mutate(gender);
        }

        await saveUserData();

        next();
      } catch (err) {
        Alert.alert(err.message);
      }
    },
    [next, mutate],
  );

  return (
    <View>
      <View style={[flex.row]}>
        {GENDER_VARIANTS.map((val) => (
          <View key={val} style={[flex.flex1]}>
            <Button
              type="outline"
              title={GENDER_DISPLAY[val]}
              style={val === gender ? bgColor.BLUE[400] : bgColor.white}
              titleStyle={
                val === gender ? textColor.white : textColor.BLUE[400]
              }
              onPress={() => {
                setGender(val);
              }}
            />
          </View>
        ))}
      </View>
      <Button
        title="다음"
        disabled={!gender}
        onPress={() => {
          if (!gender) {
            return;
          }
          handleSubmit(gender);
        }}
      />
    </View>
  );
}
