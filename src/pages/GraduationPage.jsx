import { useEffect, useState, useContext } from 'react';
import GradData from "../assets/Graduation.js"
import { DepartmentContext } from "../contexts/departmentContext";

function GraduationPage() {
    const { depName } = useContext(DepartmentContext);
    const [Gdata, setGdata] = useState("");
    
    useEffect(() => {
        const GradData = getdataByDepartment(depName);
        setGdata(GradData);
    }, [depName]);

    const getdataByDepartment = (depName) =>
    GradData.find((Gdata) => Gdata.department === depName);


    return ( 
        window.location.replace(Gdata.departmentURL)
    );
}

export default GraduationPage;
