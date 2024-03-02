/* eslint-disable react/prop-types */



const MembersCard = ({member,perHeadCost}) => {

    console.log(member);

    const {membersInfo, initial } = member;
    

    const will = (initial - perHeadCost).toFixed(2);
    const convertValue = Math.abs(will).toFixed(2)
    console.log(will);

    return (
        <div className="main-font md:w-[300px] mx-auto space-y-8  my-20 relative p-8 bg-gray-100 shadow-xl  rounded-md">
        {/* top part  */}
        <div>
           
           
        </div>
        <div className="space-y-4">
        <h3 className="text-2xl font-bold text-sky-300">{membersInfo?.userName}</h3>
        <h3 className="text-xl font-bold text-black"> Initial Amount : {initial}</h3>
        <h3 className="text-xl font-bold text-black">{ will > 0 ? <span>Will Get :{will}</span> :  <span className="text-red-600"> Will Give :{convertValue}</span> }</h3>

          
      </div>
    </div>
    );
};

export default MembersCard;