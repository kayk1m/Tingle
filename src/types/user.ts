import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export const GENDER_VARIANTS = ['male', 'female', 'other'] as const;
export type Gender = typeof GENDER_VARIANTS[number];

export interface UserData {
  displayName: string;
  phoneNum: string;
  gender: Gender | null;
  birthYear: number | null;
  profileUrl: string | null;
  statusText: string;
  created: FirebaseFirestoreTypes.Timestamp;
  lastUpdated: FirebaseFirestoreTypes.Timestamp | null;
}

export type UserDataInput = Omit<
  UserData,
  'phoneNum' | 'created' | 'lastUpdated'
>;

export const initialUserDataInput: UserDataInput = {
  displayName: '',
  gender: null,
  birthYear: null,
  profileUrl: null,
  statusText: '',
};

export type RegisteredUserData = UserData & {
  gender: Gender;
  birthYear: number;
  lastUpdated: FirebaseFirestoreTypes.Timestamp;
};

export {};
