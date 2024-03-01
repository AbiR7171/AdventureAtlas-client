import SectionTitels from "../../components/SectionTitels";
import DynamicInput from "./DynamicInput";



const AddTourMembers = () => {
    return (
        <div>
            <SectionTitels titel="Add Members" icon="fluent:people-add-16-filled"/>
            <DynamicInput/>
        </div>
    );
};

export default AddTourMembers;