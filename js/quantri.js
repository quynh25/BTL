var list = document.querySelector("#list");

var listTv = [
    {
        id: 01,
        fullname: "Nguyễn Thị Huyền",
        date: "09/04/2002",
        sex: "Nữ",
        email: "nguyenthihuyen09042001@gmail.com",
        exp: "2 năm",
        project: "",
        cv: "huyen.html",
    },
    {
        id: 02,
        fullname: "Trần Thị Quỳnh",
        date: "25/05/2002",
        sex: "Nữ",
        email: "ttquynh25052002@gmail.com",
        exp: "1 năm",
        project: "",
        cv: "quynh.html",
    },
    {
        id: 03,
        fullname: "Nguyễn Thị Xuân",
        date: "21/01/2002",
        sex: "Nữ",
        email: "xuansky94@gmail.com",
        exp: "5 năm",
        project: "",
        cv: "xuan.html",
    },
];

function render() {
    let htmls = listTv.map((tv, i) => {
        return `
        <tr>
                <td>${tv.id}</td>
                <td>${tv.fullname}</td>
                <td>${tv.date}</td>
                <td>${tv.sex}</td>
                <td>${tv.email}</td>
                <td>${tv.exp}</td>
                <td>${tv.project}</td>
                <td><a target="_blank" href="${tv.cv}">link</a></td>
                <td>
                    <p class="icon" >
                        
                        <a href="#" onclick="editInfo(this.id)" id="${tv.id}"> <i  class="fas fa-pencil-alt"></i></a>
                        <a onclick="deleteInfo(this.id)" id="${tv.id}" href="#"><i class="fas fa-trash-alt"></i></a>
                    </p>
    
                </td>
            </tr>
        `;
    });

    list.innerHTML = htmls.join("");
}

//
var formAdd = document.querySelector("#formAdd");
var toggle = document.querySelector("#toggle");
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
inputEmail = document.querySelector("input[name=email]");
inputExp = document.querySelector("input[name=exp]");
inputProjec = document.querySelector("input[name=project]");
inputCv = document.querySelector("input[name=cv]");

let add = document.getElementById("add");
// đk của name
let nameOfUser = document.getElementById("name");
let nameOfUserRegex =  /^\d+$/; //số

let statusOfName = document.getElementById("statusOfName");

nameOfUser.addEventListener("focus", function () {
    this.style.border = "1px solid";
});
nameOfUser.addEventListener("focusout", removeTextName);
function removeTextName() {
    if (nameOfUserRegex.test(nameOfUser.value)) {
        statusOfName.textContent = "Tên không hợp lệ";
        statusOfName.style.color = "red";
        statusOfName.style.fontSize = "15px";
       
    } else {
        statusOfName.textContent = "Tên hợp lệ";
        statusOfName.style.color = "blue";
        statusOfName.style.fontSize = "15px";
    }
}
// đk của email
let mailOfUser = document.getElementById("mail");
let mailOfUserRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

let statusOfEmail= document.getElementById("statusOfEmail");

mailOfUser.addEventListener("focus", function () {
    this.style.border = "1px solid";
});
mailOfUser.addEventListener("focusout", removeTextEmail);
function removeTextEmail() {
    if (mailOfUserRegex.test(mailOfUser.value)) {
        statusOfEmail.textContent = "Email hợp lệ";
        statusOfEmail.style.color = "blue";
        statusOfEmail.style.fontSize = "15px";
    } else {
        statusOfEmail.textContent = "Email không hợp lệ";
        statusOfEmail.style.color = "red";
        statusOfEmail.style.fontSize = "15px";
    }
}
function checkValue() {

    if (nameOfUserRegex.test(nameOfUser.value)) {
        alert("tên nhập sai")
        return false;
    }
    if (inputFullName.value =="") {
        
        return false;
    }
    // mail
    if (!mailOfUserRegex.test(mailOfUser.value)) {
        alert("email nhập sai")
        return false;
    }
    
    if (inputEmail.value=="") {
        
        return false
    }
    // 
    if (inputDate.value == "") {
        return false;
    }

    if (inputCv.value == "") {
        return false;
    }
    
    if (inputSex.value == "") {
        return false;
    }

    return true;
}

add.addEventListener("click", (e) => {
    e.preventDefault();
    if (checkValue()) {
        let newTv = {
            id: listTv.length + 1,
            fullname: inputFullName.value,
            date: inputDate.value,
            sex: inputSex.value,
            email: inputEmail.value,
            exp: inputExp.value,
            project: inputProjec.value,
            cv: inputCv.value,
        };

        listTv.push(newTv);

        render();
    } else {
        alert("Điền đầy đủ thông tin");
    }
});

// xóa
function deleteInfo(id) {
    listTv = listTv.filter((tv) => tv.id != id);

    render();
}
// sửa

function editInfo(id) {
    let sv = listTv.filter((tv) => tv.id == id)[0];

    idChanging = id;
    inputFullName.value = sv.fullname;
    inputDate.value = sv.date;
    inputSex.value = sv.sex;
    inputEmail.value = sv.email;
    inputExp.value = sv.exp;
    inputProjec.value = sv.project;
    inputCv.value = sv.cv;
    isToggle = true;
    if (isToggle) {
        formAdd.classList.remove("none");
        formAdd.classList.add("block");
    }
    const editBtn = document.getElementById("edit");
    editBtn.disabled = false;
}
//changing() button của sửa
let idChanging;
function changing() {
    if (checkValue()) {
        let newTv = {
            id: idChanging,
            fullname: inputFullName.value,
            date: inputDate.value,
            sex: inputSex.value,
            email: inputEmail.value,
            exp: inputExp.value,
            project: inputProjec.value,
            cv: inputCv.value,
        };
        for (let i = 0; i < listTv.length; i++) {
            if (listTv[i].id == idChanging) {
                listTv[i] = newTv;
            }
        }
        render();
    } else {
        alert("Điền đầy đủ thông tin");
    }
    

   
}

render();