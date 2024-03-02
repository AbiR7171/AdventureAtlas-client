import { useLoaderData } from "react-router-dom";
import SectionTitels from "../../components/SectionTitels";

const ExpenseHistory = () => {
    const {data} = useLoaderData()
    console.log(data);
    return (
        <div className="container mx-auto px-10 shadow-md main-font">

            <SectionTitels titel="Expense History"/>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Spender Name</th>
        <th>Cost</th>
        <th>Date</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
     
    {
                data?.expense?.map((e, index) => {
                    return   <tr key={e?._id}>
                    <th>{index + 1}</th>
                    <td>{e?.spender?.userName}</td>
                    <td>{e?.cost}</td>
                    <td>{e?.date}</td>
                    <td className="truncate">{e?.description}</td>
                  </tr>
                })
            }
    
  
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default ExpenseHistory;