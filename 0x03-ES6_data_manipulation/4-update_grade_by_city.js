export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  return listOfStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const newStudent = student;
      const grade = newGrades.filter((newGrade) => newGrade.studentId === newStudent.id);
      if (grade[0]) newStudent.grade = grade[0].grade;
      else newStudent.grade = 'N/A';
      return newStudent;
    });
}
