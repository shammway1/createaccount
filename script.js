const form1 = document.getElementById("form1");
const button = document.getElementById("button");
const password = document.getElementById("password");
const username = document.getElementById("name");

const form2 = document.getElementById("form2");
const button2 = document.getElementsByClassName("button2")[0];
const password2 = document.getElementById("password2");
const username2 = document.getElementById("name2");
const form1text = document.getElementById("form1text1");




try{

   
        const fun2 =() =>{
            const user2 = username2.value;
            const  ps2 = password2.value;
            localStorage.setItem("user",user2);
            localStorage.setItem("password",ps2);
            if (user2 == ''|| ps2 == ''){
               console.log("error");
            }
            else{
                window.location = "login.html"
              
            }
            
            
            
        
            
        }




 


   
    
    
    
    
    
    
    button2.addEventListener("click",fun2);


}catch(error){
   const fun1 =() => {
  
        const user1 = username.value;
        const  ps1 = password.value;
        const user3 = localStorage.getItem("user");
        const password3 = localStorage.getItem("password");
        if(user1 == user3 && ps1 == password3){
            window.location.href = 'next.html'
    
        }
        else{
            console.log("error");
        }
    }
        button.addEventListener("click",fun1);
       
        
      
        
      
        
        
      
    

}








  
  
  







