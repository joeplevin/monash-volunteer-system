"use client";

import { useSession } from "next-auth/react";

const Member = async () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      return {
        redirect: {
          destination: "/api/auth/signin?callbackUrl=/Member",
          permanent: false,
        },
      };
    },
  });
  return <div>Member</div>;
};

export default Member;
