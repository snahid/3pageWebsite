//cart number or not check//
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 &&
        (charCode < 48 || charCode > 57))
        return false;

    return true;
}
//cart number or not check//

// General Vallidation 

function generalValidation() {
    let name = document.myform.name;
    let email = document.myform.email;
    let a = document.myform.agree_terms;




    if (name.value == "") {
        document.getElementById('state').innerHTML = "Please enter your name...";
        return false;
    }
    if (email.value == "") {
        document.getElementById('state').innerHTML = "Please enter your email address...";
        return false;
    }

    if (a.checked == true) {
        document.getElementById('state').innerHTML = "";
        return true;
    } else {
        document.getElementById('state').innerHTML = "Please agree terms & conditions...";
        return false;
    }
}


// General Vallidation 


// Gender Vallidation 
function genderValidation() {
    let a = document.mygenderform.agree_terms;
    let gender = document.mygenderform.gender;

    if (a.checked == false) {
        document.getElementById('gender_state').innerHTML = "Please agree terms & conditions...";
        return false;
    }


    if (gender) {
        for (var i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                return true;
            }
        }
        document.getElementById('gender_state').innerHTML = "Please select your gender...";
        return false;
    }






}

// Gender Validation

// Children Validation 
function childrenValidation() {
    let a = document.mychildrenform.agree_terms;
    let children = document.mychildrenform.children;

    if (a.checked == false) {
        document.getElementById('children_state').innerHTML = "Please agree terms & conditions...";
        return false;
    }

    if (children) {
        for (var i = 0; i < children.length; i++) {
            if (children[i].checked) {
                return true;
            }
        }
        document.getElementById('children_state').innerHTML = "Please select your children...";
        return false;
    }
}



// Children Validation 