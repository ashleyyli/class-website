import { signIn, signOut, auth } from '../../auth';

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