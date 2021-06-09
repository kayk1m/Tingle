import firestore, {
  // types
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

import getAuthUser from '@lib/user/getAuthUser';

// types
import { Travel } from 'types/travel';

export default async function getTravelById(travelId: string) {
  getAuthUser();
  const travel = await firestore().collection('travel').doc(travelId).get();

  if (!travel.exists) {
    throw new Error('해당 여행을 찾을 수 없습니다.');
  }

  return travel as unknown as FirebaseFirestoreTypes.DocumentSnapshot<Travel>;
}
