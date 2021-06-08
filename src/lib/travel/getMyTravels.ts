import firestore, {
  //types
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

import getAuthUser from 'lib/user/getAuthUser';

// types
import { Travel } from 'types/travel';

export default async function getMyTravels() {
  const uid = getAuthUser().uid;

  return (await firestore()
    .collection('travel')
    .where('ownerId', '==', uid)
    .orderBy('departure.date.dateString', 'desc')
    .orderBy('created', 'desc')
    .limit(20)
    .get()) as FirebaseFirestoreTypes.QuerySnapshot<Travel>;
}
