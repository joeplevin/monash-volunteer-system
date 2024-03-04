import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const User = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/User");
  }
  return (
    <div>
      <div>User Server Session</div>
      <p>{session?.User?.username} </p>
    </div>
  );
};

export default User;
