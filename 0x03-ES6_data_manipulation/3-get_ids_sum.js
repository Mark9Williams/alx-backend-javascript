export default function getStudentIdsSum(listOfStudents) {
  const intialValue = 0;
  const sum = listOfStudents.reduce(
    (accumulator, currentValue) => (accumulator + currentValue.id), intialValue,
  );
  return sum;
}
