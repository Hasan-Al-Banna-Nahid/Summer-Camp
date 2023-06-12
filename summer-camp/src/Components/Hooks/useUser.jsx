import { useQuery } from "@tanstack/react-query";
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { AuthContext } from "../Authorization/AuthProvider";

const useUser = () => {
  const { user } = useContext(AuthContext);
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: () =>
      fetch(`https://vedhak-iamnahid591998-gmailcom.vercel.app/classes`).then(
        (res) => res.json()
      ),
  });
  return [refetch, users];
};

export default useUser;
