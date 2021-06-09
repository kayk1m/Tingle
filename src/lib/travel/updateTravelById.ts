import firestore from '@react-native-firebase/firestore';

import getAuthUser from '@lib/user/getAuthUser';

// types
import { TravelInput } from './createTravel';

export default async function updateTravelById(
  travelId: string,
  {
    title,
    caption,
    publicity,
    departureArea,
    departureDate,
    arrivalArea,
  }: TravelInput,
) {
  getAuthUser();

  // TODO: do the validation 🤔🤔

  return await firestore()
    .collection('travel')
    .doc(travelId)
    .update({
      title,
      caption,
      publicity,
      departure: {
        area: {
          type: 'named',
          value: departureArea,
        },
        date: departureDate,
      },
      arrival: {
        area: {
          type: 'string',
          value: arrivalArea,
        },
      },
      lastUpdated: new Date(),
    });
}
