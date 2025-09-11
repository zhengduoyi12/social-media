import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ModeToggle"
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
      <ModeToggle/>
      <Button variant={"secondary"}>Click me</Button>
    </div>
  );
}
