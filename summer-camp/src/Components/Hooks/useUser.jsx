import { useQuery } from "@tanstack/react-query";
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { AuthContext } from "../Authorization/AuthProvider";

const useUser = () => {
  const { user } = useContext(AuthContext);
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: () =>
      fetch(`http://localhost:5000/classes`).then((res) => res.json()),
  });
  return [refetch, users];
};

export default useUser;
