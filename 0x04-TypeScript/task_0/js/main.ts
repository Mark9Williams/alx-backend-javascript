// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two student objects
  const student1: Student = {
    firstName: 'Guillaume',
    lastName: 'Smith',
    age: 23,
    location: 'San Francisco'
  };
  
  const student2: Student = {
    firstName: 'James',
    lastName: 'Brown',
    age: 26,
    location: 'Columbia'
  };
  
  // Create an array containing the two students
  const studentsList: Student[] = [student1, student2];
  
  // Create a table element
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const tableBody = document.createElement('tbody');
  
  // Create table headers
  const headerRow = document.createElement('tr');
  const firstNameHeader = document.createElement('th');
  firstNameHeader.textContent = 'First Name';
  const locationHeader = document.createElement('th');
  locationHeader.textContent = 'Location';
  
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  tableHead.appendChild(headerRow);
  table.appendChild(tableHead);
  
  // Iterate through the student array and create rows for each student
  studentsList.forEach((student) => {
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
  
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
  
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
  });
  
  table.appendChild(tableBody);
  document.body.appendChild(table);
  