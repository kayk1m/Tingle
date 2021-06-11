import firestore, {
  //types
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

import getAuthUser from '@lib/user/getAuthUser';

// types
import { Travel } from '~/types/travel';

export default async function getMyTravels() {
  const { uid } = getAuthUser();
  const owner = firestore().collection('user').doc(uid);

  return (await firestore()
    .collection('travel')
    .where('deleted', '==', null)
    .where('owner', '==', owner)
    .orderBy('departure.date.dateString', 'desc')
    .orderBy('created', 'desc')
    .limit(20)
    .get()) as FirebaseFirestoreTypes.QuerySnapshot<Travel>;
}
