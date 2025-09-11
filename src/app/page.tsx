import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode='modal' >
          <Button>
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
     
      <Button variant={"secondary"}>Click me</Button>
    </div>
  );
}
