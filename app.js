let frm = document.querySelector("#frm");
let btn = document.querySelector("#btn");
let displayData = document.querySelector("#displayData");
const txteror = document.querySelectorAll(".eror");
const nameError = document.querySelector("#nameeror");
const emailError = document.querySelector("#emaileror");
const phoneError = document.querySelector("#phoneeror");
const linkedinEror = document.querySelector("#linkedineror");
const gendereror = document.querySelector("#gendereror");
const dobError = document.querySelector("#dobError");
const degreeerror = document.querySelector("#degreeeror");
const instituteeror = document.querySelector("#instituteeror");
const companyeror = document.querySelector("#companyeror");
const jobTitleeror = document.querySelector("#jobTitleeror");
const jobDescriptionError = document.querySelector("#jobDescriptionError");
const hobbiesError = document.querySelector("#hobbiesError");


let fullName = document.querySelector("#fullName");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let linkedin = document.querySelector("#linkedin");
let gender = document.querySelector("#gender");
let dob = document.querySelector("#dob");
let degree = document.querySelector("#degree");
let institute = document.querySelector("#institute");
let company = document.querySelector("#company");
let jobTitle = document.querySelector("#jobTitle");
let jobDescription = document.querySelector("#jobDescription");
let hobbies = document.querySelector("#hobbies");
//console

/*
let resumeData = {
    name_val: fullName.value,
    email_val: email.value,
    phone_val: phone.value,
    linkedin_val: linkedin.value,
    degree_val: degree.value,
    institute_val: institute.value,
    institute_name_val: institute.value,
    passingYear_val: passingYear.value,
    jobTitle_val: jobTitle.value,
    company_name_val: company.value,
    startDate_val: startDate.value,
    endDate_val: endDate.value,
    skills_val: skills.value,
    projectTitle_val: projectTitle.value,
    projectDescription_val: projectDescription.value,
    certification_val: certification.value,
    hobbies_val: hobbies.value,
}*/
btn.addEventListener("click", (event) => {
    event.preventDefault();

    if (!frm.checkValidity()) {
        // alert("Please fill out all required fields correctly.");
        frm.reportValidity(); // Show validation messages
        return; // Stop further execution
    }

    //  let resumeData = {
    let name_val = document.querySelector("#fullName").value.trim();
    let email_val = document.querySelector("#email").value.trim();
    let phone_val = document.querySelector("#phone").value.trim();
    let linkedin_val = document.querySelector("#linkedin").value.trim();
    let gender_val = document.querySelector("#gender").value.trim();
    let dob_val = document.querySelector("#dob").value.trim();
    let degree_val = document.querySelector("#degree").value.trim();
    let institute_val = document.querySelector("#institute").value.trim();
    let jobTitle_val = document.querySelector("#jobTitle").value.trim();
    let company_val = document.querySelector("#company").value.trim();
    let jobDescription_val = document.querySelector("#jobDescription").value.trim();
    let hobbies_val = document.querySelector("#hobbies").value.trim();

    /*
    startDate_val: document.querySelector("#startDate").value,
    endDate_val: document.querySelector("#endDate").value,
    skills_val: document.querySelector("#skills").value,
    projectTitle_val: document.querySelector("#projectTitle").value,
    projectDescription_val: document.querySelector("#projectDescription").value,
    certification_val: document.querySelector("#certification").value,
    hobbies_val: document.querySelector("#hobbies").value,
    */
    // };

    //resert all eror msg fields afet valiod submitting
    txteror.forEach(error => error.innerText = "");
    [fullName, email, phone, linkedin, gender, dob, degree, institute, company, jobTitle, jobDescription, hobbies].forEach(input => input.style.border = "");


    //decare valid
    let valid = true;

    displayData.innerHTML = "";
    const nameRegex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\d{10}$/;
    const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/;
    const degreesRegex = /^[a-zA-Z][a-zA-Z.\s-]{1,49}$/;
    const instituteRegex = /^[a-zA-Z][a-zA-Z.\s&-]{1,99}$/;



    if (!nameRegex.test(name_val)) {
        // console.log("Name is required and should only contain letters and spaces.");
        nameError.innerText = "Name should start with first uppercase and contain only letters.";
        fullName.style.border = "1px solid red";
        valid = false;
    }
    if (!emailRegex.test(email_val)) {
        //console.log("Email is required and should be in the correct format.");
        emailError.innerText = "Enter a valid email address.";
        email.style.border = "1px solid red";
        valid = false;
    }
    if (!phoneRegex.test(phone_val)) {
        // console.log("only numbers are allow.");
        phoneError.innerText = "Phone number must be exactly 10 digits.";
        phone.style.border = "1px solid red";
        valid = false;
    }
    if (!urlRegex.test(linkedin_val)) {
        // console.log("only numbers are allow.");
        linkedinEror.innerText = "Enter a valid LinkedIn URL.";
        linkedin.style.border = "1px solid red";
        valid = false;
    }
    if (gender_val == "") {
        // console.log("only numbers are allow.");
        gendereror.innerText = "Please select a gender";
        gender.style.border = "1px solid red";
        valid = false;
    }
    if (dob_val == "") {
        dobError.innerText = "Please enter yor brith date";
        dob.style.border = "1px solid red";
        valid = false;
    }
    if (degree_val == "") {
        degreeerror.innerText = "Please enter a degree";
        degree.style.border = "1px solid red";
        valid = false;
    }
    if (institute_val == "") {
        instituteerror.innerText = "Please enter a institute name";
        institute.style.border = "1px solid red";
        valid = false;
    }
    if (company_val == "") {
        companyeror.innerText = "Please enter a company name";
        company.style.border = "1px solid red";
        valid = false;
    }
    if (jobTitle_val == "") {
        jobTitleeror.innerText = "Please enter a job title";
        jobTitle.style.border = "1px solid red";
        valid = false;
    }
    if (jobDescription_val == "" && jobDescription_val.length < 20) {
        jobDescriptioneror.innerText = "Please provide a detailed job description (at least 20 characters).";
        jobDescription.style.border = "1px solid red";
        valid = false;
    }


    if (valid) {
        displayData.innerHTML = `name is : ${name_val} <br>
                email is : ${email_val} <br>
                phone number is : ${phone_val} <br>
                linkedin url : ${linkedin_val} <br>
                gender : ${gender_val} <br>
                DOB is : ${dob_val} <br>
                degree : ${degree_val} <br>
                institute name : ${institute_val} <br>
                company name : ${company_val} <br>
                jobtitle : ${jobTitle_val} <br>
                jobDescription : ${jobDescription_val} <br>
                `;
        if (hobbies_val) {
            displayData.innerHTML += `hobbies : ${hobbies_val} <br>`;
        }

        frm.reset();
    }

});