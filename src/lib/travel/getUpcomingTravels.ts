import firestore, {
  // types
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import getDateString from 'lib/time/getDateString';

// types
import { Travel } from 'types/travel';

export default async function getUpcomingTravels() {
  const today = new Date();

  return (await firestore()
    .collection('travel')
    .where('publicity', '==', 'public')
    .where('departure.date.dateString', '>=', getDateString(today))
    .orderBy('departure.date.dateString', 'desc')
    .orderBy('created', 'desc')
    .limit(20)
    .get()) as FirebaseFirestoreTypes.QuerySnapshot<Travel>;
}
