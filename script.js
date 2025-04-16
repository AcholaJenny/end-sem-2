// Grade to GPA conversion scale
const gradeScale = {
  A: 4,
  B: 3,
  C: 2,
  D: 1,
  F: 0,
};

// Function to calculate GPA
document.getElementById('calculate-gpa').addEventListener('click', function () {
  const rows = document.querySelectorAll('.row');
  let totalPoints = 0;
  let courseCount = 0;

  rows.forEach((row) => {
    const grade = row.querySelector('select').value;
    if (grade && gradeScale[grade] !== undefined) {
      totalPoints += gradeScale[grade];
      courseCount++;
    }
  });

  // Validate inputs
  if (courseCount === 0) {
    alert('Please enter grades for all courses!');
    return;
  }

  const gpa = (totalPoints / courseCount).toFixed(2);
  document.getElementById('gpa-result').textContent = gpa;
});

// Function to dynamically add more rows
document.getElementById('add-row').addEventListener('click', function () {
  const newRow = document.createElement('div');
  newRow.classList.add('row');

  newRow.innerHTML = `
    <input type="text" placeholder="Course Name" name="courseName" required>
    <select name="grade" required>
      <option value="" disabled selected>Grade</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
      <option value="F">F</option>
    </select>
  `;

  document.getElementById('gpa-form').insertBefore(newRow, document.getElementById('add-row'));
});
