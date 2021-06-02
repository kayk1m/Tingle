import { useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { setRoot } from 'react-native-navigation-hooks/dist';
import { signinRoot } from 'routes';

interface UseAuthOptions {
  redirect?: boolean;
}

export default function useAuth(options: UseAuthOptions = { redirect: false }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(newUser => {
      // console.log('authStateChanged. newUser:', newUser?.email ?? null);
      setUser(newUser);
      if (newUser === null && options.redirect) {
        setRoot(signinRoot);
      }
      setLoading(false);
    });
    return subscriber;
  }, [options]);

  return { user: loading ? undefined : user, loading };
}
