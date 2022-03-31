var list = document.querySelector("#list");
let idChanging
var listTv = [
    {
        id: 01,
        fullname: "Nguyễn Thị Huyền",
        date: "09/04/2002",
        sex: "Nữ",
        exp: "2 năm",
        project: "",
        cv: "https://www.google.com.vn/?gws_rd=ssl",
    },
    {
        id: 02,
        fullname: "Trần Thị Quỳnh",
        date: "25/05/2002",
        sex: "Nữ",
        exp: "1 năm",
        project: "",
        cv: "https://kenh14.vn/",
    },
    {
        id: 03,
        fullname: "Nguyễn Thị Xuân",
        date: "21/01/2002",
        sex: "Nữ",
        exp: "5 năm",
        project: "",
        cv: "https://www.youtube.com/",
    },
];

function render(){
    let htmls = listTv.map((tv, i) => {
        return `
        <tr>
                <td>${tv.id}</td>
                <td>${tv.fullname}</td>
                <td>${tv.date}</td>
                <td>${tv.sex}</td>
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
inputExp = document.querySelector("input[name=exp]");
inputProjec = document.querySelector("input[name=project]");
inputCv = document.querySelector("input[name=cv]");

// var formAdd = document.querySelector("#formAdd");

let add = document.getElementById("add");

function checkValue() {
    if (inputFullName.value == "") {
        return false;
    }

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
            exp: inputExp.value,
            project: inputProjec.value,
            cv: inputCv.value,
        };

        listTv.push(newTv);

       render()
    } else {
        alert("Điền đầy đủ thông tin");
    }
});
function deleteInfo(id){
    listTv = listTv.filter(tv => tv.id != id )

    render()

}

function editInfo(id){
    console.log("Dang xoa dong thu " + id)
    let sv = listTv.filter(tv => tv.id == id)[0]
 
    idChanging = id
    inputFullName.value = sv.fullname
    inputDate.value = sv.date
    inputSex.value = sv.sex
    inputExp.value = sv.exp 
    inputProjec.value = sv.project 
    inputCv.value = sv.cv
    isToggle = true;
    if (isToggle) {
        formAdd.classList.remove("none");
        formAdd.classList.add("block");
    } 
    
}
render();


