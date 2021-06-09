import { useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export default function useAuth() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((newUser) => {
      // console.log('authStateChanged. newUser:', newUser?.email ?? null);
      setUser(newUser);
      if (loading) {
        setLoading(false);
      }
    });
    return subscriber;
  }, [loading]);

  return { user: loading ? undefined : user, loading };
}
