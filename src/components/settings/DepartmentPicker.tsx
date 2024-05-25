import { Select } from "@chakra-ui/react";
import React from "react";
import { useDepName, useDepartments } from "../../hooks";
import i18n from "../../i18n";

interface DepartmentPickerProps {
  onClose: () => void;
}

const DepartmentPicker: React.FC<DepartmentPickerProps> = ({ onClose }) => {
  const departments = useDepartments();
  const { depName, setDepCode } = useDepName();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    let selectedDepartment = e.target.value;
    console.log("Selecting: " + selectedDepartment);
    setDepCode(selectedDepartment);
    onClose();
  };

  return (
    <>
      <Select
        fontWeight="bold"
        placeholder={i18n.t("choose_department")||""}
        onChange={handleChange}
      >
        {departments.map(({ code, name }) => (
          <option value={code} key={name}>
            {name}
          </option>
        ))}
      </Select>
      <br />
      {depName && (
        <p>
          {i18n.t("current_department")}: {i18n.t(depName)}
        </p>
      )}
    </>
  );
};

export default DepartmentPicker;
