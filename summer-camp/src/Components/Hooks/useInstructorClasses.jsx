// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Authorization/AuthProvider";

const useInstructorClasses = () => {
  const { user, isLoading } = useContext(AuthContext);
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["instructorsClasses", user?.email],
    enabled: !isLoading,
    queryFn: async () => {
      const res = await axiosSecure(`/instructorsClasses?email=${user?.email}`);
      //   console.log("res from axios", res);
      return res.data;
    },
  });
  console.log(classes);
  return [classes, refetch];
};

export default useInstructorClasses;
