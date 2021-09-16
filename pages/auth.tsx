import { useEffect, useState } from "react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import {
  AmplifyAuthContainer,
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignOut,
} from "@aws-amplify/ui-react";
import type { NextPage } from "next";

const SignIn: NextPage = () => {
  const [authState, setAuthState] = useState<AuthState>();
  const [user, setUser] = useState<Record<string, unknown> | undefined>();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      const user = authData as Record<string, unknown> | undefined;
      setAuthState(nextAuthState);
      setUser(user);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <AmplifySignOut />
    </div>
  ) : (
    <AmplifyAuthContainer>
      <AmplifyAuthenticator>
        <AmplifySignIn slot="sign-in" hideSignUp={true} />
      </AmplifyAuthenticator>
    </AmplifyAuthContainer>
  );
};

export default SignIn;
