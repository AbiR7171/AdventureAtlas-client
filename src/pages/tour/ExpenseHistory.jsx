import { useLoaderData } from "react-router-dom";
import SectionTitels from "../../components/SectionTitels";

const ExpenseHistory = () => {
    const {data} = useLoaderData()
    console.log(data);
    return (
        <div className="container mx-auto px-10  main-font">

            <SectionTitels titel="Expense History"/>


            <div className="overflow-x-auto ">
    <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
        <thead>
            <tr className="bg-[#333333] text-white">
                <th className="py-3 px-6 text-left border-b">Spender</th>
                <th className="py-3 px-6 text-left border-b">Cost</th>
                <th className="py-3 px-6 text-left border-b">Date</th>
                <th className="py-3 px-6  border-b text-end">Details</th>
            </tr>
        </thead>
        <tbody>
         {
          data?.expense?.map((e, index) =>{
            return    <tr key={index} className="hover:bg-gray-50 transition duration-300">
            <td className="py-4 px-6 border-b">{e?.spender?.userName} </td>
            <td className="py-4 px-6 border-b">{e?.cost}</td>
            <td className="py-4 px-6 border-b">{e?.date}</td>
            <td className="py-4 px-6 border-b text-end truncate">{e?.description}</td>
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


