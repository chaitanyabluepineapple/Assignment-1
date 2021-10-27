import React from "react";
import { useHistory } from "react-router-dom";
import Rows from "./rows";
import "../src/style.css";

function Table() {
  let history = useHistory();

  const columns = [
    {
      id: 1,
      name: "Jay Kapoor",
      address: "Pune",
      number: "8888888888",
    },
    {
      id: 2,
      name: "Gaurav Chaudhari",
      address: "Mumbai",
      number: "7894561230",
    },
    {
      id: 3,
      name: "Carry Minathi",
      address: "Hariyana",
      number: "9876543210",
    },
    {
      id: 4,
      name: "Bhuvan Bham",
      address: "Delhi",
      number: "7894563210",
    },
    {
      id: 5,
      name: "Ashish Chachalani",
      address: "Mumbai",
      number: "6549873210",
    },
    {
      id: 6,
      name: "Viraj Ghayani",
      address: "Gujrat",
      number: "9874563210",
    },
    {
      id: 7,
      name: "Nikhil Sharma",
      address: "Pawai",
      number: "9988776655",
    },
    {
      id: 8,
      name: "Be You Nick",
      address: "Dombivali",
      number: "8765432190",
    },
    {
      id: 9,
      name: "Neel Things",
      address: "Thane",
      number: "8877996644",
    },
    {
      id: 10,
      name: "Ranjit",
      address: "Hydrabad",
      number: "7896541555",
    },
  ];

  // const tableRows = [];
  // for (let column of columns) {
  //   const row = (
  //     <tr key={column.id}>
  //       <td key={1}>{column.id}</td>
  //       <td key={2}>{column.name}</td>
  //       <td key={3}>{column.address}</td>
  //       <td key={4}>{column.number}</td>
  //       <button
  //             onClick={() => {
  //               history.push("/profile");
  //             }}
  //             className="btn"
  //           >
  //             View Details
  //           </button>
  //     </tr>
  //   );
  //   tableRows.push(row);
  // }

  return (
    <div>
      <h1>Table View is Here</h1>

      <div className="table">
        <table border="10">
          <thead>
            <tr>
              {/* <th>ID</th>
              <th>Name</th>
              <th>Contact Number</th>
              <th>Address</th>
              <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {/* <Rows text={tableRows} /> */}

            {columns.map((data) => {
              return (
                <tr>
                  <td>
                    <Rows
                      id={data.id}
                      name={data.name}
                      address={data.address}
                      number={data.number}
                    />
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          history.push("/profile");
                        }}
                        className="btn"
                      >
                        View Details
                      </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div></div>
      </div>
    </div>
  );
}

export default Table;
