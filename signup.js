const form=document.getElementById("form");
let userData=JSON.parse(localStorage.getItem("usersignin"))



form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const name=document.querySelector("#username");
  
    const email=document.getElementById("email");
 
    const password=document.getElementById("password");
 
    const obj={
        "username":name.value,
        "email":email.value,
        "password":password.value
    }
    
    if(userData==null){
        userData=[];
        userData.push(obj);
        console.log(userData);
        localStorage.setItem("usersignin",JSON.stringify(userData));
    }else{
        console.log(obj);
        console.log("userrdata",userData);
        userData.push(obj);
        localStorage.setItem("usersignin",JSON.stringify(userData));

        
    }
   

})
const arra=[1,2,3,4];
arra.push(6)


console.log(arra);