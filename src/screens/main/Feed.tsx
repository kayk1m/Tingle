import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { Avatar, Button, ListItem } from 'react-native-elements';
import { NavigationFunctionComponent } from 'react-native-navigation';

import useUser from '@lib/hooks/useUser';
import getUpcomingTravels from '@lib/travel/getUpcomingTravels';

// styles
import { bgColor, flex, font, layout, text, textColor } from '@styles/index';

import { Travel } from '~/types/travel';
import { WithId } from '~/types';

const FeedScreen: NavigationFunctionComponent = () => {
  const [feedTravels, setFeedTravels] = useState<WithId<Travel>[] | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  const fetchData = useCallback(() => {
    setLoading(true);
    getUpcomingTravels()
      .then((snapshot) =>
        setFeedTravels(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        ),
      )
      .catch((err) => {
        Alert.alert(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <SafeAreaView style={[flex.flex1]}>
      <View
        style={[
          layout.height(200),
          bgColor.GRAY[50],
          layout.px(16),
          layout.py(12),
        ]}>
        <Text style={[text.lg, textColor.GRAY[700]]}>새 여행</Text>
        <View
          style={[
            flex.flex1,
            bgColor.GRAY[100],
            flex.row,
            flex.justifyAround,
            flex.itemsCenter,
          ]}>
          <Avatar
            size="large"
            rounded
            title={user?.displayName[0]}
            source={{ uri: user?.profileUrl ?? undefined }}
            containerStyle={[bgColor.GRAY[300]]}
          />
          <Button
            title="새 여행 추가"
            containerStyle={[layout.rounded(6)]}
            buttonStyle={[layout.px(16), layout.py(8)]}
            titleStyle={[text.base, font.medium]}
          />
        </View>
      </View>
      {!feedTravels ? (
        <View style={[flex.flex1, flex.justifyCenter, flex.itemsCenter]}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          style={[flex.flex1]}
          keyExtractor={(item) => item.id}
          data={feedTravels}
          renderItem={({ item: { title, departure, arrival, caption } }) => (
            <ListItem>
              <ListItem.Content>
                <ListItem.Title>{title}</ListItem.Title>
                <View>
                  <Text>날짜: {departure.date.dateString}</Text>
                  <Text>출발: {departure.area.value}</Text>
                  <Text>도착: {arrival.area.value}</Text>
                  <Text>{caption}</Text>
                  {/* TODO: firestore reference user check */}
                </View>
              </ListItem.Content>
            </ListItem>
          )}
          onRefresh={fetchData}
          refreshing={loading}
        />
      )}
    </SafeAreaView>
  );
};

FeedScreen.options = {
  topBar: {
    title: {
      text: '동행찾기',
    },
  },
};

export default FeedScreen;
