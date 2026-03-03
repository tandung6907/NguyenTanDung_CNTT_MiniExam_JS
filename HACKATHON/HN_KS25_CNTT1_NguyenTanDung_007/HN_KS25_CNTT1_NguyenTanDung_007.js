let students = [
  { id: 1, name: "Dũng", math: 9, literature: 8, english: 8, average: 8.3 },
  { id: 2, name: "Minh", math: 7, literature: 6, english: 9, average: 9.3 },
  { id: 3, name: "Khánh", math: 4, literature: 5, english: 6, average: 5.3 },
];

function main() {
  let choice;
  do {
    choice = prompt(`--- MENU ---
1. Thêm sinh viên
2. Xóa sinh viên
3. Hiển thị danh sách sinh viên
4. Cập nhật thông tin sinh viên
5. Tìm sinh viên
6. Phân loại sinh viên
7. Tính điểm trung bình cả lớp
8. Sắp xếp theo điểm trung bình
9. Tìm kiếm sinh viên theo khoảng điểm
0. Thoát`);

    if (choice === null) break;

    switch (choice) {
      case "1":
        addStudents(students);
        break;
      case "2":
        deleteStudent(students);
        break;
      case "3":
        viewStudent(students);
        break;
      case "4":
        updateStudent(students);
        break;
      case "5":
        findStudent(students);
        break;
      case "6":
        studentClassification(students);
        break;
      case "7":
        students = averageOfClass();
        break;
      case "8":
        sortByAverage(students);
        break;
      case "9":
        break;
      case "0":
        alert("Đã thoát chương trình ...Hẹn gặp lại!");
        break;
      default:
        alert("Vui lòng nhập lựa chọn theo MENU từ 1 đến 9 hoặc 0 để thoát!");
        break;
    }
  } while (choice !== "0");
}
main();

function addStudents(obj) {
  let n;
  while (true) {
    n = parseInt(prompt("Nhập số lượng sinh viên muốn thêm: "));
    if (!isNaN(n) && n > 0) break;
    alert("Vui lòng nhập số lượng hợp lệ!");
  }
  let id, name, math, literature, english, average;
  for (let i = 0; i < n; i++) {
    while (true) {
      id = Number(prompt("Nhập ID của sinh viên cần thêm: "));
      let isDuplicated = obj.find((p) => p.id === id);
      if (!isDuplicated) {
        if (!isNaN(id) && id > 0) break;
        alert("Vui lòng nhập ID là 1 số nguyên dương!");
      }
      alert("ID đã tồn tại, vui lòng nhập ID khác!");
    }
    while (true) {
      name = prompt("Nhập tên sinh viên cẩn thêm: ");
      if (name !== null && name.trim() != "") break;
      alert("Không được để trống tên sinh viên!");
    }
    while (true) {
      math = Number(prompt("Nhập điểm toán: "));
      if (!isNaN(math) && math >= 0 && math <= 10) break;
      alert("Vui lòng nhập số lơn hơn 0 và nhỏ hơn 10!");
    }
    while (true) {
      literature = Number(prompt("Nhập điểm văn: "));
      if (!isNaN(literature) && literature >= 0 && literature <= 10) break;
      alert("Vui lòng nhập số lơn hơn 0 và nhỏ hơn 10!");
    }
    while (true) {
      english = Number(prompt("Nhập điểm tiếng anh: "));
      if (!isNaN(english) && english >= 0 && english <= 10) break;
      alert("Vui lòng nhập số lơn hơn 0 và nhỏ hơn 10!");
    }

    average = ((math + literature + english) / 3).toFixed(2);

    const newStudent = {
      id: id,
      name: name,
      math: math,
      literature: literature,
      english: english,
      average: average,
    };

    obj.push(newStudent);
    alert(`Đã thêm thành công sinh viên <${newStudent.name}>`);
  }
}

function deleteStudent(obj) {
  let findId;
  while (true) {
    findId = Number(prompt("Nhập ID sinh viên cần tìm: "));
    if (!isNaN(findId) && findId > 0) break;
    alert("Vui lòng nhập số nguyên dương!");
  }
  let student = obj.find((p) => p.id === findId);
  if (student) {
    let isCofirmed = window.confirm(
      ` Bạn chắn chắn xóa sinh viên ${student.name} hay không?`,
    );
    if (!isCofirmed) {
      alert("Đã hủy xóa sinh viên!");
      return;
    }
    obj.splice(student, 1);
    obj.forEach((student, index) => {
      student.id = index + 1;
    });
    alert("Đã xóa thành công sinh viên!");
    return;
  }
  alert("Sinh viên có ID cần tìm không tồn tại!");
}

function viewStudent(obj) {
  let output = "==== DANH SÁCH SINH VIÊN ====\n";
  obj.forEach((p) => {
    output += `ID: ${p.id} | Name: ${p.name} | Math: ${p.math} | Literature: ${p.literature} | English: ${p.english} | Average: ${p.average}\n`;
  });
  console.log(output);
}

function updateStudent(obj) {
  let findId;
  while (true) {
    findId = Number(prompt("Nhập ID sinh viên cần tìm: "));
    if (!isNaN(findId) && findId > 0) break;
    alert("Vui lòng nhập số nguyên dương!");
  }

  let student = obj.find((p) => p.id === findId);

  if (student) {
    let newName, newMath, newLiterature, newEnglish;

    while (true) {
      newName = prompt("Nhập tên sinh viên cần cập nhật: ");
      if (newName !== null && newName.trim() !== "") break;
      alert("Không được để trống tên sinh viên!");
    }
    while (true) {
      newMath = Number(prompt("Nhập điểm toán: "));
      if (!isNaN(newMath) && newMath >= 0 && newMath <= 10) break;
      alert("Vui lòng nhập số từ 0 đến 10!");
    }
    while (true) {
      newLiterature = Number(prompt("Nhập điểm văn: "));
      if (!isNaN(newLiterature) && newLiterature >= 0 && newLiterature <= 10)
        break;
      alert("Vui lòng nhập số từ 0 đến 10!");
    }
    while (true) {
      newEnglish = Number(prompt("Nhập điểm tiếng anh: "));
      if (!isNaN(newEnglish) && newEnglish >= 0 && newEnglish <= 10) break;
      alert("Vui lòng nhập số từ 0 đến 10!");
    }

    student.name = newName;
    student.math = newMath;
    student.literature = newLiterature;
    student.english = newEnglish;
    student.average = ((newMath + newLiterature + newEnglish) / 3).toFixed(2);

    alert(`Đã cập nhật thành công sinh viên <${student.name}>`);
    return;
  }
  alert("Sinh viên có ID cần tìm không tồn tại!");
}

function findStudent(obj) {
  let choiceForFind;
  while (true) {
    choiceForFind = prompt(
      "Nhập cách tìm kiếm a - theo tên || b - theo ID: ",
    ).toLowerCase();
    if (choiceForFind === "a" || choiceForFind === "b") break;
    alert("Chọn 1 trong 2 cách a - tìm theo tên || b - tìm theo ID!!");
  }
  let findWord;
  while (true) {
    findWord = prompt("Nhập vào từ khóa cần tìm hoặc ID cần tìm: ");
    if (findWord != null) break;
    alert("Không được để trống từ khóa tìm kiếm!");
  }
  if (choiceForFind === "a") {
    let findByName = obj.filter((p) => p.name.toLowerCase().includes(findWord));
    if (findByName.length === 0) {
      alert("Không có sinh viên nào hợp lệ!");
      return;
    }
    console.log("==== DANH SÁCH SINH VIÊN TÌM KIẾM ====\n");
    console.log(findByName);
  } else if (choiceForFind === "b") {
    let findById = Number(findWord);
    while (true) {
      if (!isNaN(findWord) && findWord > 0) break;
      alert("ID tìm kiếm không hợp lệ!");
      return;
    }
    let result = obj.find((p) => p.id === findById);
    let output = "==>\n";
    if (result !== undefined) {
      output += `ID: ${result.id} | Name: ${result.name} | Math: ${result.math} | Literature: ${result.literature} | English: ${result.english} | Average: ${result.average}\n`;
      console.log(output);
      return;
    }
    alert("Không tìm thấy sinh viên!!!");
  }
}

function studentClassification(obj) {
  let classification;
  while (true) {
    classification = prompt(
      "Nhập loại sinh viên theo phân loại (giỏi/khá/trung bình): ",
    );
    if (
      classification === "giỏi" ||
      classification === "khá" ||
      classification === "trung bình" ||
      classification != null
    )
      break;
    alert("Nhập đúng phần loại sinh viên!!!");
  }
  let result = obj.map((p) => {
    if (classification === "giỏi") {
      return p.average >= 8;
    } else if (classification === "khá") {
      return p.average >= 6.5;
    }
    return p.average > 0;
  });
  console.log(result);
}

function averageOfClass() {
  let total = students.reduce((acc, cur) => {
    return acc + Number(cur.average);
  }, 0);
  let average = (total / students.length).toFixed(2);
  console.log("Điểm trung bình của cả lớp là: " + average);
}

function sortByAverage(obj) {
  let choiceForSort;

  while (true) {
    choiceForSort = prompt("Nhập i - tăng hoặc d - giảm: ");

    if (choiceForSort === "i" || choiceForSort === "d") {
      break;
    }

    alert("Lựa chọn không hợp lệ!");
  }

  let sorted;

  if (choiceForSort === "i") {
    sorted = obj.sort((a, b) => a.average - b.average);
  } else {
    sorted = obj.sort((a, b) => b.average - a.average);
  }

  console.table(sorted);
}
