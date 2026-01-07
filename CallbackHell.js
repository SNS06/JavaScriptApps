const studentdet = () => {
  console.log("StudentInfo");
  setTimeout(() => {
    let rollNos = [1, 2, 3, 4];
    console.log(rollNos);
    setTimeout(
      () => {
        let rollno = 10;
        const data = { name: "Najiya", Qualify: "B.tech" };
        console.log(
          `Name is ${data.name} and qualification is ${data.Qualify} roll number ${rollno}`
        );
      },
      2000,
      rollNos[1]
    );
  }, 2000);
};

studentdet();
