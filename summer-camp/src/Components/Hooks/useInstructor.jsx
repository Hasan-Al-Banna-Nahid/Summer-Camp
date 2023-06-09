/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Authorization/AuthProvider";

const useInstructor = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: isInstructor = {}, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
        return res.data;
      }
      return false;
    },
  });
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
