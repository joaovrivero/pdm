import { createUserWithEmailAndPassword, 
  updateProfile, 
  signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

export async function signIn(email: string, password: string) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

export async function signUp(email: string, password: string, displayName?: string) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  if (displayName) {
    // Opcional: Atualiza o displayName do usuário
    await updateProfile(userCredential.user, { displayName });
  }
  return userCredential.user;
}