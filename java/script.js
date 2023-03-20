let courseList = [{code:"1420", name: "Intro to Systems Admin."}, {code:"1310", name:"Technical math for IT."}, {code:"1630",name:"Database Systems."}];


let usernumber;
do {
  usernumber = prompt("Please enter a 4-digit number:");
} while (isNaN(usernumber) || usernumber.length !== 4);


for (let course of courseList) {
  if (course.code.includes(usernumber)) {
    alert("Yes I am taking the course: " + course.code + ' ' + course.name);
    break;
  }
  if (course.code != usernumber) {
    newcouresname = prompt('What is the course called?: ')
    const newCourse = { code: usernumber, name: newcouresname };
    courseList.push(newCourse);
    alert('Added new course: ' + newCourse.code + ' ' + newCourse.name);
  }
  break;
}

