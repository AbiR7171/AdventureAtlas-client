import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTour = () => {
  const id = localStorage.getItem("adventure-atlas");

  const { data: userAllTour, refetch } = useQuery({
    queryKey: ["user-tour", id],
    queryFn: async () => {
      const res = await axios.get(
        `https://adventure-atlas-server.vercel.app/api/v1/tour/user-all-tour?userId=${id}`
      );
      return res.data.data;
    },
  });

  return [userAllTour, refetch];
};

export default useTour;
