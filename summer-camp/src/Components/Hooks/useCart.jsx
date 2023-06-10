import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Authorization/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user, isLoading } = useContext(AuthContext);
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !isLoading,
    queryFn: async () => {
      const res = await axiosSecure(`/classes?email=${user?.email}`);
      //   console.log("res from axios", res);
      return res.data;
    },
  });
  console.log(classes);
  return [classes, refetch];
};
export default useCart;
