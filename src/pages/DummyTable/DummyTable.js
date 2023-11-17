import React from "react";
import "../style.scss";

const DummyTable = () => (
  <div className="dummyContent">
    <h3 className="dummyContent-title">Dummy Table</h3>
    <table className="dummyTable">
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
        </tr>
        <tr>
          <td>Data 3</td>
          <td>Data 4</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default DummyTable;
