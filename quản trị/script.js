var list = document.querySelector("#list");
var toggle = document.querySelector("#toggle");
var formAdd = document.querySelector("#formAdd");

var listTv = [
  {
    id: 01,
    fullname: "Nguyễn Thị Huyền",
    date: "09/04/2002",
    sex: "Nữ",
    exp: "2 năm",
    project: "",
    cv: "link",
  },
  {
    id: 02,
    fullname: "Nguyễn Thị Xuân",
    date: "21/01/2002",
    sex: "Nữ",
    exp: "5 năm",
    project: "",
    cv: "link",
  },
  {
    id: 03,
    fullname: "Trần Thị Quỳnh",
    date: "25/05/2002",
    sex: "Nữ",
    exp: "1 năm",
    project: "",
    cv: "link",
  },
];

let htmls = listTv.map((tv, i) => {
  return `
    <tr>
            <td>${tv.id}</td>
            <td>${tv.fullname}</td>
            <td>${tv.date}</td>
            <td>${tv.sex}</td>
            <td>${tv.exp}</td>
            <td>${tv.project}</td>
            <td><a href="">${tv.cv}</a></td>
            <td>
                <p class="icon" >
                    
                    <a href=""> <i class="fas fa-pencil-alt"></i></a>
                    <a  id="gar" href="#"><i class="fas fa-trash-alt"></i></a>
                </p>

            </td>
        </tr>
    `;
});
//
list.innerHTML = htmls.join("");

var isToggle = false;
toggle.addEventListener("click", () => {
  isToggle = !isToggle;
  if (isToggle) {
    formAdd.classList.remove("none");
    formAdd.classList.add("block");
  } else {
    formAdd.classList.remove("block");
    formAdd.classList.add("none");
  }
});
//thêm
inputFullName = document.querySelector("input[name=fullname]");
inputDate = document.querySelector("input[name=date]");
inputSex = document.querySelector("input[name=sex]");
inputExp = document.querySelector("input[name=exp]");
inputProjec = document.querySelector("input[name=project]");
inputCv = document.querySelector("input[name=cv]");

add = document.getElementById("add");

add.addEventListener("click", (e) => {
  e.preventDefault();

  let newTv = {
    id: listTv.length + 1,
    fullname: inputFullName.value,
    date: inputDate.value,
    sex: inputSex.value,
    exp: inputExp.value,
    project: inputProjec.value,
    cv: inputCv.value,
  };

  listTv.push(newTv);

  let htmls = listTv.map((tv, i) => {
    return `
          <tr>
                  <td>${tv.id}</td>
                  <td>${tv.fullname}</td>
                  <td>${tv.date}</td>
                  <td>${tv.sex}</td>
                  <td>${tv.exp}</td>
                  <td>${tv.project}</td>
                  <td><a href="">${tv.cv}</a></td>
                  <td>
                      <p class="icon">
                          
                          <a href=""> <i class="fas fa-pencil-alt"></i></a>
                          <a href="#"><i class="fas fa-trash-alt"></i></a>
                      </p>
      
                  </td>
              </tr>
          `;
  });
  //
  list.innerHTML = htmls.join("");
});

// xóa
// var gar = document.getElementById("gar");

// gar.addEventListener("click", (e) => {
//   e.preventDefault();
//   gar.onclick = function () {
//     confirm("Bạn có chắc chắn muốn xóa nó không!");
//   };
// });
