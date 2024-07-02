import React, { useState } from "react";
import Spreadsheet from "react-spreadsheet";

const App = () => {
  const columnLabels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
  let rowLabels = [];
  for (let i = 1; i <= 100; i++) {
    rowLabels.push(i);
  }

  const [data, setData] = useState(
    rowLabels.map(() => columnLabels.map(() => ({ value: "" })))
  );

  const handleChange = (newData) => {
    // Find the changed cell
    for (let row = 0; row < newData.length; row++) {
      for (let column = 0; column < newData[row].length; column++) {
        if (newData[row][column].value !== data[row][column].value) {
          console.log({
            rowName: rowLabels[row],
            columnName: columnLabels[column],
            value: newData[row][column].value
          });
        }
      }
    }
    setData(newData);
  };

  return (
    <Spreadsheet
      data={data}
      columnLabels={columnLabels}
      rowLabels={rowLabels}
      onChange={handleChange}
    />
  );
};

export default App;
