import getUserData from './getUserData';

export default async function checkUserData(): Promise<boolean> {
  try {
    const userData = await getUserData();
    if (!userData) {
      return false;
    }
    if (!userData.displayName) {
      return false;
    }
    if (!userData.gender) {
      return false;
    }
    if (!userData.birthYear) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}
