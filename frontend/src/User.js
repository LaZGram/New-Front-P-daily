import React from "react";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { signOut,redirectToAuth } from "supertokens-auth-react/recipe/thirdpartyemailpassword";

export default function User() {
  const signout = async () => {
    await signOut();
    redirectToAuth();
  }

  let userId = useSessionContext().userId;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Your userId is {userId}
        </p>
        <a
          className="App-link"
          onClick={signout}
        >
          Sign out
        </a>
      </header>
    </div>
  )
}