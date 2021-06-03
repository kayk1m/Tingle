import auth from '@react-native-firebase/auth';
// import { API_URL } from '@defines/index';
// import { fetcher } from '@lib/fetcher';
// import { saveToken } from '@lib/token';
// import { Tokens } from 'types/auth';

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

// export async function signin({ email, password }: SigninProps): Promise<void> {
//   try {
//     // TODO: Needs more validations for email and password? 🤔
//     if (!email) {
//       throw new Error('Missing email address.');
//     }
//     if (!password) {
//       throw new Error('Missing password.');
//     }

//     const { accessToken, refreshToken } = await fetcher<Tokens>(
//       `${API_URL}/auth`,
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       },
//     );

//     await saveToken(accessToken, refreshToken);
//   } catch (err) {
//     if (process.env.NODE_ENV === 'development') {
//       console.log('[signin.ts]', err);
//     }

//     if (err.code) {
//       throw new Error(err.message);
//     }

//     throw new Error(`Signin failed. error: ${err.message}`);
//   }
// }
