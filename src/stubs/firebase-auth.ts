// Stub for firebase/auth - this project doesn't use Firebase
// This file prevents build errors from @sudobility/building_blocks optional peer dependency

export const createUserWithEmailAndPassword = () => {
  throw new Error('Firebase auth not available');
};
export const signInWithEmailAndPassword = () => {
  throw new Error('Firebase auth not available');
};
export const GoogleAuthProvider = class {};
export const signInWithPopup = () => {
  throw new Error('Firebase auth not available');
};
