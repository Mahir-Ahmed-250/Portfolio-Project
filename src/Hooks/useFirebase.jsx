import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import initializeFirebase from "../Firebase/firebase.init";
import { toast } from "react-toastify";
import swal from "sweetalert";
export const auth = getAuth(initializeFirebase());
export const db = getFirestore(initializeFirebase());
export const storage = getStorage(initializeFirebase());

const useFirebase = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  // Login User By Email
  const loginUser = (email, password) => {
    setLoading(true);
    signOut(auth);
    console.log(user);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential.user) {
          swal(
            "Welcome!",
            "Welcome to Your Portfolio Website Admin Panel",
            "success"
          );
        }
      })
      .catch((error) => {
        toast.error("Sorry");
      })
      .finally(() => setLoading(false));
  };

  // Observer
  useEffect(() => {
    const authSubscription = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return authSubscription;
  }, [auth]);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return {
    user,
    loading,
    loginUser,
    logOut,
    db,
  };
};

export default useFirebase;
