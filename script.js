$(document).ready(function () {
  let isName = false;
  let isEmail = false;
  let isGender = false;
  let isSkills = false;
  let isqualification=false;

  // Function to validate user name
  const validateName = () => {
    let nameRef = $("#name").val();
    if (nameRef.trim() === "") {
      // console.log($("#name").val());
      $("#nameError").html("Name can't be empty");
    } else {
      // console.log($("#name").val());
      $("#nameError").html("");
      isName = true;
      getBtn();
    }
  };

  // onkeypress event handler to the name input field
  $("#name").on("keyup", () => validateName());

  // Function to validate email
  const validateEmail = () => {
    let emailRef = $("#email").val(); // Corrected selector
    let emailReg = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (emailRef.trim() === "") {
      $("#emailError").html("Email can't be empty");
    } else if (!emailReg.test(emailRef)) {
      $("#emailError").html("Email is not in the correct format");
    } else {
      $("#emailError").html("");
      isEmail = true; // Rename isName to isEmail
      getBtn();
    }
  };

  // onkeyup event handler for the email input field
  $("#email").on("keyup", () => validateEmail());

  //Function to validate radio
  const validateGender = () => {
    // Check if any radio button in the "gender" group is checked
    if (!$("input[name='gender']:checked").length > 0) {
      $("#genderError").html("Please select your gender.");
    } else {
      $("#genderError").html("");
      isGender = true;
      getBtn();
    }
  };

  $("input[name='gender']").on("click", () => {
    validateGender();
  });

  const validateSkills = () => {
    if (!($("input[name='skills']:checked").length > 0)) {
      $("#skillsError").html("Please select at least one skill.");
    } else {
      $("#skillsError").html("");
      isSkills = true;
      getBtn();
    }
  };

  $("input[name='skills']").on("click", () => {
    validateSkills();
  });


  const validateQualification=()=>{
    if ($("#qualification").val() === "0") {
        $("#qualificationError").html("Please choose your qualification");
    } else {
        $("#qualificationError").html("");
        isqualification=true;
        getBtn();
    }
  }

  $("select[name='qualification']").on("click", () => {
    validateQualification();
  });

  const getBtn = () => {
    console.log("enter");
    let submitBtnRef = $("#submitBtn");
    if (isName && isEmail && isGender && isSkills && isqualification) {
      console.log("true");
      submitBtnRef.prop('disabled', false); // Enable the button
      alert("Success!!!");
    } else {
      submitBtnRef.prop('disabled', true); // Disable the button
    }
  }

});
