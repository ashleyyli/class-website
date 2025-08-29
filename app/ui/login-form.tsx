'use client';
import { signIn, useSession, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <button onClick={() => signIn("azure-ad")}>
        Sign in with Microsoft
      </button>
    );
  }

  return (
    <div>
      <span>Signed in as {session.user?.email}</span>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
