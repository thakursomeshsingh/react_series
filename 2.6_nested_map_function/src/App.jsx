import React from 'react';
import './App.css';
import { Table, Container, Row, Col } from 'react-bootstrap';

function App() {
  // example 1
  const countryData = [
    { id: 1, country: "India", cities: ["Aligarh", "Delhi", "Noida"] },
    { id: 2, country: "US", cities: ["Ali", "Del", "Ida"] },
    { id: 3, country: "Pak", cities: ["Lahaur", "Karahi"] }
  ];

  // example 2
  const student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
    marks: [80, 85, 70, 90]
  };

  return (
    <>
      <div>
        {countryData.map((data, dataIndex) => (
          <li key={dataIndex}>
            <b>{data.country}</b>
            <ul>
              {data.cities.map((cData, cIndex) => (
                <li key={cIndex}>{cData}</li>
              ))}
            </ul>
          </li>
        ))}

        {/* example 2 */}
        <Container>
          <Row>
            <Col>
              <Table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Roll No</th>
                    <th>Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{student.name}</td>
                    <td>{student.sclass}</td>
                    <td>{student.rollno}</td>
                    <td>
                      <ul>
                        {student.marks.map((mark, mIndex) => (
                          <li key={mIndex}>{mark}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
