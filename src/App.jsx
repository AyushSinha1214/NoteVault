import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export default function App() {
  return (
    <header>
      <SignedOut>
        {/* Button to sign in */}
        <SignInButton />
      </SignedOut>

      <SignedIn>
        {/* Button showing the signed-in user's avatar */}
        <UserButton />
      </SignedIn>
    </header>
  );
}
