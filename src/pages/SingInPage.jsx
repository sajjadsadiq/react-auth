import React, { useState } from "react";
import app from "../firebaseConfig";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const SingInPage = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState({});
  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleGoogleSingOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log("error");
      });
  };
  return (
    <div>
      {user.email ? (
        <button onClick={handleGoogleSingOut}>
          Sing Out ({user.displayName})
        </button>
      ) : (
        <button onClick={handleGoogleSingIn}>Google Sing In</button>
      )}

      <div>
        <img src={user.photoURL} alt="" />
        <h2>{user.displayName}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default SingInPage;
