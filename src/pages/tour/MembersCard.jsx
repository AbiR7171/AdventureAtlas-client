/* eslint-disable react/prop-types */

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const MembersCard = ({ member, tourId, members, totalInitail }) => {
  console.log(member);
  console.log(tourId);

  const { membersInfo, initial } = member;
  const [perHeadCost, setPerHeadCost] = useState();
  const [tourExpense, setTourExpense] = useState();
  const [myWill, setmyWill] = useState();

  const { data, isLoading } = useQuery({
    queryKey: ["total-expense"],
    queryFn: async () => {
      const res = await axios.get(
        `https://adventure-atlas-server.vercel.app/api/v1/tour/expense-list/${tourId}`
      );
      return res;
    },
  });

  console.log(data);
  console.log(perHeadCost);
  console.log(tourId);

  const membersTotalCost = data?.data?.data?.find(
    (u) => u._id === membersInfo?._id
  );

  console.log(myWill);

  useEffect(() => {

    if (membersTotalCost?.totalCost) {
      setmyWill(membersTotalCost?.totalCost);
    } else {
      setmyWill(0);
    }


    let total = 0;
    data?.data?.data?.forEach((d) => {
      total += d?.totalCost;
     
    });

    const totalTour = total + totalInitail
    console.log(total);
    setTourExpense(totalTour);
    const divideTotal = totalTour / members.length;
    const fixTotal = divideTotal.toFixed(2);
    setPerHeadCost(fixTotal);
    console.log(fixTotal);



   
  }, [data, tourExpense, perHeadCost, myWill]);

  const myCost = myWill + parseInt(initial)

  console.log(myCost);



  console.log(myCost);

  return (
    <div>
       {
         isLoading ? <p>Loading</p> : <div className="main-font md:w-[300px] mx-auto space-y-8  my-20 relative p-8 bg-gray-100 shadow-xl  rounded-md">
      {/* top part  */}
      <div></div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-sky-300">
          {membersInfo?.userName}
        </h3>
        <h3 className="text-xl font-bold text-black">
          {" "}
          Initial Amount : {initial}
        </h3>
        <h3 className="text-xl font-bold text-black">
          {" "}
          Expense :{" "}
          {membersTotalCost?.totalCost ? membersTotalCost?.totalCost : 0}
        </h3>
        <h3 className="text-xl font-bold text-black">
          {" "}
          { myCost >= perHeadCost ? (
            <span> will Gate: { (myCost - perHeadCost).toFixed(2)}</span>
          ) : (
            <span className="text-red-500">will give {Math.abs(( myCost -perHeadCost).toFixed(2))}</span>
          )}
        </h3>
      </div>
    </div>
       }
    </div>
  );
};

export default MembersCard;
