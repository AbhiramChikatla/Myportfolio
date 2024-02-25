 let send_btn=send_form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    let username=document.getElementById("Name")
    let email=document.getElementById("Email")
    let message=document.getElementById("Query")
   //  console.log(username.value,email.value,message.value)
    data={
      name:username.value,
      mail:email.value,
      msg:message.value
    }
    send_form.reset()
    let res=await fetch("http://localhost:4000/",{
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    let r= await res.text();
    console.log(r,res);
   
 }) 



 


