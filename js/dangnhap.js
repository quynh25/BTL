users=[
    {
        username: "xuansky94@gmail.com",
        password: "123456",
        
    },
    {
        username: "huyen2001@gmail.com",
        password: "1234",
        
    },
    {
        username: "quynh02@gmail.com",
        password: "246",
        
    },
]


function login() {
    event.preventDefault();
    var username = myForm.username.value;
    var password = myForm.password.value;

    var val = check_user(username, password, users)
    if(val != false){
        location.href = "quantri.html"
    }
    else{
        alert("username or password không đúng")
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