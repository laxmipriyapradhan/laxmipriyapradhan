import React, { useState } from 'react'; 

import StudentForm from './table.js';

import jsonData from './data.json'; 

  

function TableData() { 

  const [studentData, setStudentData] = useState(jsonData); 

  

  const tableRows = studentData.map((info) => { 

    return ( 

      <tr> 

        <td>{info.id}</td> 

        <td>{info.name}</td> 

        <td>{info.city}</td> 

      </tr> 

    ); 

  }); 

  

  const addRows = (data) => { 

    const totalStudents = studentData.length; 

    data.id = totalStudents + 1; 

    const updatedStudentData = [...studentData]; 

    updatedStudentData.push(data); 

    setStudentData(updatedStudentData); 

  }; 

  

  return ( 

    <div align="center"> 

      <table className="table table-stripped"> 

        <thead> 

          <tr> 

            <th>Sr.NO</th> 

            <th>Name</th> 

            <th>City</th> 

          </tr> 

        </thead> 

        <tbody>{tableRows}</tbody> 

      </table> 

      <StudentForm func={addRows} /> 

    </div> 

  ); 
} 

  export default TableData;
// //import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <form class="needs-validation" novalidate>
//   <div class="form-row">
//     <div class="col-md-4 mb-3">
//       <label for="validationCustom01">First name</label>
//       <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="" required/>
      
//     </div>
//     <div class="col-md-4 mb-3">
//       <label for="validationCustom02">Last name</label>
//       <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="" required/>
      
//     </div>
//     <div class="col-md-4 mb-3">
//       <label for="validationCustomUsername">Username</label>
//       <div class="input-group">
//         <div class="input-group-prepend">
//           <span class="input-group-text" id="inputGroupPrepend">@</span>
//         </div>
//         <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required/>
//         <div class="invalid-feedback">
//           Please choose a username.
//         </div>
//       </div>
//     </div>
//   </div>
//   <div class="form-row">
//     <div class="col-md-6 mb-3">
//       <label for="validationCustom03">City</label>
//       <input type="text" class="form-control" id="validationCustom03" placeholder="City" required/>
//       <div class="invalid-feedback">
//         Please provide a valid city.
//       </div>
//     </div>
//     <div class="col-md-3 mb-3">
//       <label for="validationCustom04">State</label>
//       <input type="text" class="form-control" id="validationCustom04" placeholder="State" required/>
//       <div class="invalid-feedback">
//         Please provide a valid state.
//       </div>
//     </div>
//     <div class="col-md-3 mb-3">
//       <label for="validationCustom05">Zip</label>
//       <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required/>
//       <div class="invalid-feedback">
//         Please provide a valid zip.
//       </div>
//     </div>
//   </div>
//   <div class="form-group">
//     <div class="form-check">
//       <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
//       <label class="form-check-label" for="invalidCheck">
//         Agree to terms and conditions
//       </label>
//       <div class="invalid-feedback">
//         You must agree before submitting.
//       </div>
//     </div>
//   </div>
//   <button class="btn btn-primary" type="submit">Submit form</button>
// </form>
// );
// }

// export default App;