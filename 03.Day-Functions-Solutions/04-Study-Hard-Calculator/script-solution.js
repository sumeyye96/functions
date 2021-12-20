// The program will determine how far user is from their weekly study goal.
//check how many hours of study user got each day of the weekconst 
getStudyHours = day => {
  switch (day) {
    case 'Monday':
      return 8;
    case 'Tuesday':
      return 7;
    case 'Wednesday':
      return 8;
    case 'Thursday':
      return 6;
    case 'Friday':
      return 7;
    case 'Saturday':
      return 10;
    case 'Sunday':
      return 8;
  }
}

//get total study hours that user actually studied for whole week
const getActualStudyHours = () => {
  return getStudyHours('Monday') +
    getStudyHours('Tuesday') +
    getStudyHours('Wednesday') +
    getStudyHours('Thursday') +
    getStudyHours('Friday') +
    getStudyHours('Saturday') +
    getStudyHours('Sunday');
}

//get ideal study hours per day that user prefers, multiplying them by 7 to get total hours per week
const getIdealStudyHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}

// calculating study debt
const calculateStudyDebt = () => {
  const actualStudyHours = getActualStudyHours();
  const idealStudyHours = getIdealStudyHours();

  //output the result to the user by comparing actualStudyHours and idealStudyHours
  if (actualStudyHours === idealStudyHours) {
    console.log('You got the perfect amount of study.');
  } else if (actualStudyHours > idealStudyHours) {
    console.log('You got ' + (actualStudyHours - idealStudyHours) + ' hour(s) more study than you planned.');
  } else if (actualStudyHours < idealStudyHours) {
    console.log('You got ' + (idealStudyHours - actualStudyHours) + ' hour(s) less study than you needed. Create some time!');
  } else {
    console.log('Error!');
  }
}

// starting the program
calculateStudyDebt();
