import react , {useState} from 'react';
import React from 'react';
import FormCard from '../UI/FormCard';
import OrganizationDetails from './Forms/OrganizationDetails';
import classes from "./FormsContainer.module.css";


const FormsContainer = () => {

    const [activeTab, setActiveTab] = useState(1);


    const tabSwitchHandler = (tab) => setActiveTab(tab);
    
    return (
        <div className={classes.container}>
            
            <ul className={classes.formsHeading}>
                <li onClick={() => tabSwitchHandler(1)} >
                    <h3 >Organization Onbording</h3>
                    {activeTab === 1 && <span className={classes.active}></span>} 
                </li>
                <li onClick={() => tabSwitchHandler(2)}>
                    <h3 >Other Forms</h3>
                    {activeTab === 2 && <span className={classes.active}></span>}
                </li>
            </ul>

            {activeTab === 1 && <OrganizationDetails />}
            {activeTab === 2 && <FormCard > <h2>No Item Found</h2> </FormCard>}
        </div>
    );
};

export default FormsContainer;
