import Card from "../../components/Card";
import SectionTitels from "../../components/SectionTitels";
import useTour from "../../hooks/useTour";

const TourDashboard = () => {


    const [userAllTour]=useTour();
    console.log(userAllTour);
   
    const activeTour =  userAllTour?.filter(t => t.members.length > 1);

    console.log(activeTour);

    return (
        <div> 

            <SectionTitels titel="Dasboard" icon="ic:baseline-dashboard"/>

         <div className="grid grid-cols-3 gap-2">
                  
            {
                activeTour?.map(t => <Card  key={t?._id} tour={t}/>)
            }
         </div>
            
        </div>
    );
};

export default TourDashboard;