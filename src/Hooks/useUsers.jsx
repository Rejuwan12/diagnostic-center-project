import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";




const useUsers = () => {
    
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: singleUser = [], isLoading, refetch } = useQuery({
        queryKey: ["singleUser", user?.email],
        queryFn: async () => {
          const res = await axiosPublic.get(`/users?email=${user?.email}`);
          const data = await res.data;
          return data;
        },
      });
      return [singleUser, isLoading, refetch ]
      
};

export default useUsers;