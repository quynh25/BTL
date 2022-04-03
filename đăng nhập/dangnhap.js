users=[
    {
        username: "xuansky94@gmail.com",
        password: "123456",
        permission: "admin"
    },
    {
        username: "huyen2001@gmail.com",
        password: "1234",
        permission: "admin"
    },
    {
        username: "quynh02@gmail.com",
        password: "246",
        permission: "admin"
    },
]




// function login() {
//     event.preventDefault();
//     var username = myForm.username.value;
//     var password = myForm.password.value;

//     var val = check_user(username, password, users)
//     if(val != false){
//         var date = new Date();
//         exp_date = date.getTime() + 10 * 24 * 60 * 60 * 1000;
//         date.setTime(exp_date);
//         document.cookie = "username=" + val.username + ";expires=" + date;
//         document.cookie = "permission=" + val.permission + ";expires=" + date;
//         if(val.permission == "admin"){
//             location.href = "đăng nhập/index.html";
//         }
//     }
//     else{
//         alert("your username or password is incorrect")
//     }
// }

function login() {
    event.preventDefault();
    var username = myForm.username.value;
    var password = myForm.password.value;

    var val = check_user(username, password, users)
    if(val != false){
        location.href = "index.html"
    }
    else{
        alert("your username or password is incorrect")
    }
}

function check_user(username, password, users){
    for(i in users){
        var user = users[i];
        if(user.username == username && user.password == password){
            return true;
        }
    }
    return false;
}