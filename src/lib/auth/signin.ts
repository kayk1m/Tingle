import auth from '@react-native-firebase/auth';

export interface SigninProps {
  email: string;
  password: string;
}

export default async function signin({
  email,
  password,
}: SigninProps): Promise<string> {
  try {
    return (await auth().createUserWithEmailAndPassword(email, password)).user
      .uid;
  } catch (err) {
    switch (err.code) {
      case 'auth/invalid-email':
        throw new Error('이메일 주소가 올바르지 않습니다.');
      case 'auth/email-already-in-use': {
        try {
          return (await auth().signInWithEmailAndPassword(email, password)).user
            .uid;
        } catch (err2) {
          switch (err2.code) {
            case 'auth/user-disabled':
              throw new Error('비활성화된 유저입니다.');
            case 'auth/wrong-password':
              throw new Error('비밀번호가 틀립니다.');
          }
        }
      }
    }

    throw new Error(err.message);
  }
}
