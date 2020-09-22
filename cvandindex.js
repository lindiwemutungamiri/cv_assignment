

//retrieving  values from the form
const theform = document.getElementById('formid'); //declaring a constant called theform
function submitData() {
    var firstname = theform.elements['firstname'].value;
    var middlename = theform.elements['middlename'].value;
    var lastname = theform.elements['lastname'].value;
    var gender = theform.elements['gender'].value;
    var phonenumber = theform.elements['phonenumber'].value;
    var email = theform.elements['email'].value;
    var address = theform.elements['address'].value;

    //storing into local storage 
    localStorage.setItem("input1", firstname);
    localStorage.setItem("input2", middlename);
    localStorage.setItem("input3", lastname);
    localStorage.setItem("input4", gender)
    localStorage.setItem("input5", phonenumber);
    localStorage.setItem("input6", email);
    localStorage.setItem("input7", address);
   
}


//retrieving from local storage and sending to cv.html's ids shown by tekvalues 
    document.getElementById("tek1").innerHTML=localStorage.getItem("input1");
    document.getElementById("tek2").innerHTML=localStorage.getItem("input2");
    document.getElementById("tek3").innerHTML=localStorage.getItem("input3");
    document.getElementById("tek4").innerHTML=localStorage.getItem("input4");
    document.getElementById("tek5").innerHTML=localStorage.getItem("input5");
    document.getElementById("tek6").innerHTML=localStorage.getItem("input6");
    document.getElementById("tek7").innerHTML=localStorage.getItem("input7");



    
function ValidateForm() {
    

    fnem = document.thisform.firstname;  //getting the first name and declaring it into variable firstnem
    var txtregx = /^[a-zA-Z]+$/i;  //declaring a text regular expression

  
    mnem = document.thisform.middlename;
    lnem = document.thisform.lastname;
    
    //getting email and id
    em = document.thisform.email;
    ad = document.thisform.address;
    

    if(fnem.value == ""){ //checking if the first name field is blank
        alert("firstname should not be blank"); //returns an alert showing that the first name is blank
        fnem.focus(); //returns the cursor into the box on the same page
        return  false;
    }
    if(!txtregx.test(fnem.value)){ //validating that the value in the first name field is a text
        alert("Please enter the correct format for First Name");
        fnem.focus();
        return false;
    }
    if(mnem.value == ""){
        alert("Please Enter your middle name");
        mnem.focus();
        return  false;
    }
   
    if(!txtregx.test(mnem.value)){
        alert("Please enter the correct format for Middle Name");
        mnem.focus();
        return false;
    }
   
    if(lnem.value == ""){
        alert("Last Name should not be blank");
        lnem.focus();
        return  false;
    }
    if(!txtregx.test(lnem.value)){
        alert("Please enter the correct format for your last name");
        lnem.focus();
        return false;
    }
   
    if(document.thisform.phonenumber.value==""){
        alert("Please enter your phone number");
        document.thisform.phonenumber.focus();
        return false; 
    }

    if(isNaN(document.thisform.phonenumber.value)){
        alert("Please enter the correct format for phone number");
        document.thisform.phonenumber.focus();
        return false;
    }

    
    
    if(em.value == ""){
        alert("Email should not be blank");
        em.focus();
        return  false;
    }
    if(ad.value == ""){
        alert("Please Enter Your Address");
        ad.focus();
        return  false;
    }
else{
    alert("Your CV Information has been Submitted Successfuly!") //informing the user that their form has been submitted successfully
}



}
