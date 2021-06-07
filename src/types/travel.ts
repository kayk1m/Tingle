import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export const NAMED_AREAS = ['서울', '부산', '제주'] as const;
export type NamedArea = typeof NAMED_AREAS[number];

export const TRAVEL_PUBLICITY = ['public', 'private', 'archived'] as const;
export type Publicity = typeof TRAVEL_PUBLICITY[number];
// export const TRAVEL_STATUS = ['open', 'planned', 'closed'] as const;

export interface TingleNamedArea {
  type: 'named';
  value: NamedArea;
}

export interface TingleStringArea {
  type: 'string';
  value: string;
}

/**
 * @property {string} dateString - ex. 20210101
 * @property {boolean} withTime
 * @property {string | null} time - string when withTime is true, null otherwise. ex. 2330
 */
export type TingleDate = {
  dateString: string;
} & (
  | {
      withTime: true;
      time: string;
    }
  | {
      withTime: false;
      time: null;
    }
);

export interface Travel {
  ownerId: string;
  title: string;
  caption: string;
  publicity: Publicity;
  // status: typeof TRAVEL_STATUS[number];
  departure: {
    area: TingleNamedArea;
    date: TingleDate;
  };
  arrival: {
    area: TingleStringArea;
  };
  created: FirebaseFirestoreTypes.Timestamp;
  lastUpdated: FirebaseFirestoreTypes.Timestamp | null;
  deleted: FirebaseFirestoreTypes.Timestamp | null;
}

export {};
