import { getServerSession } from "next-auth";
import Link from "next/link";
import { options } from "../api/auth/[...nextauth]/options";

const Nav = async () => {
  const session = await getServerSession(options);
  return (
    <header className="bg-gray-600 text-gray-100">
      <nav className="container mx-auto flex items-center justify-between px-10 py-4 w-full">
        <div>My Site</div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/User">User</Link>
          <Link href="/Member">Member</Link>
          <Link href="/CreateUser">Create User</Link>
          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
          ) : (
            <Link href="/api/auth/signin?callbackUrl=/">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
