function calculateGrade(score) {
  let grade;

  switch (true) {
    case (score >= 90 && score <= 100):
      grade = "A";
      break;
    case (score >= 80 && score < 90):
      grade = "B";
      break;
    case (score >= 70 && score < 80):
      grade = "C";
      break;
    case (score >= 60 && score < 70):
      grade = "D";
      break;
    case (score >= 0 && score < 60):
      grade = "F";
      break;
    default:
      grade = "Invalid Score";
      break;
  }

  return grade;
}


console.log(calculateGrade(95));  // Output: A
console.log(calculateGrade(82));  // Output: B
console.log(calculateGrade(76));  // Output: C
console.log(calculateGrade(65));  // Output: D
console.log(calculateGrade(45));  // Output: F
console.log(calculateGrade(110)); // Output: Invalid Score
