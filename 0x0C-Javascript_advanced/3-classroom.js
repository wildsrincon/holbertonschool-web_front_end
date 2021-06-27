function createClassRoom(numbersOfStudents) {

  const studentSeat = (seat) => function() {
    return seat;
  };

  let students = [];
  let index = 1;

  while (index <= numbersOfStudents) {
    students.push(studentSeat(index));
    index++;
  }

  return students;
}

let classRoom = createClassRoom(10);
