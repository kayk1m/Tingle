import storage from '@react-native-firebase/storage';
import { launchImageLibrary } from 'react-native-image-picker';

import getAuthUser from '@lib/user/getAuthUser';
import updateUserData from '@lib/user/updateUserData';
import saveUserData from '../user/saveUserData';

interface EditProfilePhotoOptions {
  onStart?: () => void;
  onEnd?: () => void;
}
export default async function editProfilePhoto(
  options?: EditProfilePhotoOptions,
) {
  const { uid } = getAuthUser();

  launchImageLibrary(
    {
      mediaType: 'photo',
      maxWidth: 1000,
      maxHeight: 1000,
      quality: 0.4,
    },
    async ({ didCancel, errorCode, assets }) => {
      if (didCancel) {
        console.log('canceled!');
      }
      if (errorCode) {
        console.log(`error: ${errorCode}`);
      }
      if (assets && assets[0].uri) {
        if (options?.onStart) {
          options?.onStart();
        }
        const task = storage().ref(`profile/${uid}`).putFile(assets[0].uri);

        task.on('state_changed', (snapshot) => {
          console.log(
            `${snapshot.bytesTransferred} transferred out of ${snapshot.totalBytes}`,
          );
        });

        task.then(() => {
          task.snapshot?.ref.getDownloadURL().then((url) => {
            console.log(`Image uploaded to '${url}'`);

            updateUserData({ profileUrl: url }).then(() => {
              if (options?.onEnd) {
                options?.onEnd();
              }

              saveUserData().then(() => {
                console.log('UserData successfully updated.');
              });
            });
          });
        });

        // console.log(await storage().ref(`profile/${uid}`).getDownloadURL());
      }
    },
  );
}
