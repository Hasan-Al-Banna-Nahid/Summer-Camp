// eslint-disable-next-line no-unused-vars
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Authorization/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const usePayment = () => {
  const { user, isLoading } = useContext(AuthContext);
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !isLoading,
    queryFn: async () => {
      const res = await axiosSecure(`/payments?email=${user?.email}`);
      //   console.log("res from axios", res);
      return res.data;
    },
  });
  return [payments, refetch];
};

export default usePayment;
