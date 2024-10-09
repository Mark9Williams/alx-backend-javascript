interface Teacher {
    readonly firstName: string;    // Read-only after initialization
    readonly lastName: string;     // Read-only after initialization
    fullTimeEmployee: boolean;     // Always defined
    yearsOfExperience?: number;    // Optional attribute
    location: string;              // Always defined
    [key: string]: any;            // Allows additional properties like contract
  }
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }

interface printTeacherFunction{
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `{${firstName.charAt(0)}. ${lastName}`;
}