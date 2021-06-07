import firestore from '@react-native-firebase/firestore';

import getAuthUser from 'lib/user/getAuthUser';

export default async function deleteTravelById(travelId: string) {
  getAuthUser();

  return await firestore().collection('travel').doc(travelId).update({
    deleted: new Date(),
  });
}
