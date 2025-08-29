// import { SignIn } from '../lib/auth-action'
import { signIn, signOut, auth } from '../../auth';
import { useSession } from "next-auth/react";
// import { signIn, signOut, useSession } from "next-auth/react";

export async function AuthButton() {
  const session = await auth()

  if (session) {
    return (
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button
          className="rounded bg-blue-900 py-1 px-2 cursor-pointer"
          type="submit"
        >
          Sign Out
        </button>
      </form>
    );
  }

  return (
    <form
      action={async () => {
        "use server"
        await signIn("microsoft-entra-id")
      }}
    >
      <button 
        className="rounded bg-blue-900 py-1 px-2 cursor-pointer"
        type="submit"
      >
        Sign in
      </button>
    </form>
  )
} 