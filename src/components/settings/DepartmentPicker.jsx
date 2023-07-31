import { Select } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { DepartmentContext } from '../../contexts/departmentContext'
import { DEPARTMENTS } from '../../assets/DepNames'
import i18n from '../../i18n'
function DepartmentPicker({ onClose }) {
    const { depName, changeDepartmentName } = useContext(DepartmentContext);
    console.log("Current Department: " + depName);
    const handleChange = (e) => {
        e.preventDefault();
        let selectedDepartment = e.target.selectedOptions[0].label;
        changeDepartmentName(selectedDepartment);
        onClose();
    };
    return (
        <>
            <Select
                fontWeight={"bold"}
                placeholder={i18n.t("choose_department")}
                onChange={handleChange}
            >
                {DEPARTMENTS.filter((department) => department !== depName).map(
                    (department) => (
                        <option value={department} key={department}>
                            {department}
                        </option>
                    )
                )}
            </Select>
            <br></br>
            {depName && i18n.t("current_department") + i18n.t(depName)}

        </>
    )
}

export default DepartmentPicker