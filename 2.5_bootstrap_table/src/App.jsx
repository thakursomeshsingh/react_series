import React from 'react'
import './App.css'

// example 2  <table></table> to <Table></Table> then it will work 
// now bcz it has converted into components
import Table from 'react-bootstrap/Table';

function App() {
 
  // example 1,2
  const tableData = [
    {id:1, name:"somesh", age:24, location:"aligarh"},
    {id:2, name:"shubahm", age:22, location:"aligarh"},
    {id:3, name:"ashu", age:23, location:"kashganj"},
  ]
  return (
   <div className='App'>

    {/* example 1  table without bootsrap */}
    {/* example 2 Table with bootstrap in this we will change "<table></table> to <Table></Table>"" */}
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          <th>location</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data)=>
        data.age===23 ? (      // condition
        <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.location}</td>
          </tr>
        ) : null )}
      </tbody>
    </Table>
   </div>
  );
}

export default App
