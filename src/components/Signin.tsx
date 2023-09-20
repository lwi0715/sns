"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import Button from "./ui/Button";

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};
export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <li key={provider.name} className="list-none p-4">
          <Button
            text={`Sign In with ${provider.name}`}
            onClick={() => signIn(provider.id, { callbackUrl: callbackUrl })}
            bgColor="bg-sky-400 dark:bg-sky-800"
            size="large"
          ></Button>
        </li>
      ))}
    </>
  );
}
