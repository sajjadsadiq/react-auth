import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import app from "../firebaseConfig";

const GithubSingInAuth = () => {
  const auth = getAuth(app);
  const provider = new GithubAuthProvider();

  const [user, setUser] = useState({});

  const handleGithubSingIn = () => {
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

  const handleGithubSingOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      });
  };
  return (
    <div>
      <div>
        {user.email ? (
          <>
            <button onClick={handleGithubSingOut}>
              Sing Out ({user.displayName})
            </button>
            <div className="card">
              <img src={user.photoURL} alt="" />
              <h2>{user.displayName}</h2>
              <p>{user.email}</p>
            </div>
          </>
        ) : (
          <>
            <button onClick={handleGithubSingIn}>Github Sing In</button>
          </>
        )}
      </div>
    </div>
  );
};

export default GithubSingInAuth;
