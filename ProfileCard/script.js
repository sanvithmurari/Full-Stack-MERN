function follow(){
    let folbtn=document.getElementById("follow");
    if(folbtn.innerText=="Following"){
        folbtn.innerText="Follow"
    }
    else{
        folbtn.innerText="Following"
    }
}

function contact(){
    let mailid=document.createElement("p");
    mailid.innerText="Email: user@example.com";
    document.body.appendChild(mailid);
    let phno=document.createElement("p");
    phno.innerText="Phone: +91 1234567890";
    document.body.appendChild(phno);
}
