"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLogIn = true;
  const [providers, setProviders] = useState(null);
  const { data: session } = useSession();
  useEffect(() => {
    const setUpProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setUpProviders();
  }, []);

  return (
    <nav>
      <Link href="/">Home</Link>
      {session?.user ? (
        <div>
          <Link href="/create-prompt">Create Post</Link>{" "}
          <button href="/sign-out" onClick={signOut}>
            Sign Out
          </button>
          <Link href="/profile">Profile</Link>
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <button type="button" key={provider.name} onClick={() => signIn(provider.id)}>
                Sign In
              </button>
            ))}
        </>
      )}
    </nav>
  );
};

export default Nav;
