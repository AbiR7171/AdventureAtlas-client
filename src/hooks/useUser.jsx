import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUser = () => {
  const id = localStorage.getItem("adventure-atlas");
  console.log(id);

  const { data: userData } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const res = await axios.get(
        `https://adventure-atlas-server.vercel.app/api/v1/user/get-user?id=${id}`
      );
      return res.data.data;
    },
  });

  return [userData];
};

export default useUser;
