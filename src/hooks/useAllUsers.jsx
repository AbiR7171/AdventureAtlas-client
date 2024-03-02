import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllUsers = () => {
  const adminId = localStorage.getItem("adventure-atlas");

  const { data } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axios.get(
        `https://adventure-atlas-server.vercel.app/api/v1/user/get-all-user`
      );
      return res?.data?.data;
    },
  });

  const allUsers = data?.filter((u) => u?._id !== adminId);

  return [allUsers];
};

export default useAllUsers;
