import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { UserData } from '~/types/user';
import getAuthUser from './getAuthUser';

export default function getUserRef() {
  const { uid } = getAuthUser();

  return firestore()
    .collection('user')
    .doc(uid) as unknown as FirebaseFirestoreTypes.DocumentReference<UserData>;
}
