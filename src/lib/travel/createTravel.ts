import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

import getAuthUser from '@lib/user/getAuthUser';

// types
import { NamedArea, Publicity, TingleDate, Travel } from '~/types/travel';

export interface TravelInput {
  title: string;
  caption: string;
  publicity: Publicity;
  departureArea: NamedArea | null;
  departureDate: TingleDate;
  arrivalArea: string;
}

export const initialTravelInput: TravelInput = {
  title: '',
  caption: '',
  publicity: 'public',
  departureArea: null,
  departureDate: {
    dateString: '',
    withTime: false,
    time: null,
  },
  arrivalArea: '',
};

export default async function createTravel({
  title,
  caption,
  publicity,
  departureArea,
  departureDate,
  arrivalArea,
}: TravelInput) {
  const uid = getAuthUser().uid;

  // TODO: do the validation 🤔🤔

  return (await firestore()
    .collection('travel')
    .add({
      ownerId: uid,
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
      created: new Date(),
      lastUpdated: null,
      deleted: null,
    })) as unknown as FirebaseFirestoreTypes.DocumentReference<Travel>;
}
