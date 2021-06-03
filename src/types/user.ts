export const GENDER_VARIANTS = ['male', 'female', 'other'] as const;
export type Gender = typeof GENDER_VARIANTS[number];

export interface UserData {
  displayName: string;
  phoneNum: string;
  gender: Gender | null;
  birthYear: number;
  profileUrl: string | null;
  statusText: string;
  created: Date;
  lastUpdated: Date | null;
}

export interface UserDataInput
  extends Omit<UserData, 'phoneNum' | 'birthYear' | 'created' | 'lastUpdated'> {
  birthYear: string;
}

export const initialUserDataInput: UserDataInput = {
  displayName: '',
  gender: null,
  birthYear: '',
  profileUrl: null,
  statusText: '',
};

export {};
