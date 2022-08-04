import { createContext, useState } from "react";


export const DEPARTMENTS = ["Οικονομικών Επιστημών", "Βαλκανικών, Σλαβικών & Ανατολικών Σπουδών",
  "Εφαρμοσμένης Πληροφορικής", "Οργάνωσης & Διοίκησης Επιχειρήσεων", "Λογιστικής και Χρηματοοικονομικής", "Διεθνών & Ευρωπαϊκών Σπουδών",
  "Εκπαιδευτικής & Κοινωνικής Πολιτικής", "Μουσικής Επιστήμης & Τέχνης"].sort()

export const DepartmentContext = createContext({
  depName: "",
});

export const DepartmentProvider = ({ children }) => {
  const [depName, setDepName] = useState(DEPARTMENTS[0]);

  function changeDepartmentName(departmentToBeSet) {
    setDepName(departmentToBeSet);
  }

  const value = { depName, changeDepartmentName };
  return (
    <DepartmentContext.Provider value={value}>
      {children}
    </DepartmentContext.Provider>
  );
};
