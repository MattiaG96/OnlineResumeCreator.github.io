$(document).ready(function () {

})

var basicInfo = []
var workExperience = []

function getBasicInfo() {

    var basicInfo = []

    var name = document.getElementById("nameInput").value.trim();
    var surname = document.getElementById("surnameInput").value.trim();
    var birthdate = document.getElementById("birthdateInput").value.trim();
    var telNum = document.getElementById("telInput").value.trim();
    var email = document.getElementById("emailInput").value.trim();

    /*
    Checks name
    */
    if (name === '') {
        document.getElementById("nameContainer").innerHTML = '<span class="badge bg-danger" style="margin: 5px;">Required</span>' +
            '<input class="form-control" type="text" id="nameInput" placeholder="Name" style="border: red 1px solid">';
        return;
    } else {
        document.getElementById("nameContainer").innerHTML = '<input class="form-control" type="text" id="nameInput" placeholder="Name" value="' + name + '">';
    }
    /*
    Checks surname
    */
    if (surname === '') {
        document.getElementById("surnameContainer").innerHTML = '<span class="badge bg-danger" style="margin: 5px;">Required</span>' +
            '<input class="form-control" type="text" id="surnameInput" placeholder="Surname" style="border: red 1px solid">';
        return;
    } else {
        document.getElementById("surnameContainer").innerHTML = '<input class="form-control" type="text" id="surnameInput" placeholder="Surname" value="' + surname + '">';
    }
    /*
    Checks birthdate
    */
    if (birthdate === '') {
        document.getElementById("birthdateContainer").innerHTML = '<span class="badge bg-danger" style="margin: 5px;">Required</span>' +
            '<input class="form-control" type="text" id="birthdateInput" placeholder="Birthdate" style="border: red 1px solid">';
        return;
    } else {
        document.getElementById("birthdateContainer").innerHTML = '<input class="form-control" type="text" id="birthdateInput" placeholder="Birthdate" value="' + birthdate + '">';
    }
    /*
    Checks telephone
    */
    if (telNum === '') {
        document.getElementById("telContainer").innerHTML = '<span class="badge bg-danger" style="margin: 5px;">Required</span>' +
            '<input class="form-control" type="text" id="telInput" placeholder="Telephone number" style="border: red 1px solid">';
        return;
    } else {
        document.getElementById("telContainer").innerHTML = '<input class="form-control" type="text" id="telInput" placeholder="Telephone number" value="' + telNum + '">';
    }
    /*
    Checks e-mail
    */
    if (email === '') {
        document.getElementById("emailContainer").innerHTML = '<span class="badge bg-danger" style="margin: 5px;">Required</span>' +
            '<input class="form-control" type="text" id="emailInput" placeholder="E-mail" style="border: red 1px solid">';
        return;
    } else {
        document.getElementById("emailContainer").innerHTML = '<input class="form-control" type="text" id="emailInput" placeholder="E-mail" value="' + email + '">';
    }

    basicInfo.push({
        name: name,
        surname: surname,
        birthdate: birthdate,
        telNum: telNum,
        email: email
    })

    document.getElementById("nameLabel").innerHTML = '<b>Name: </b>' + name;
    document.getElementById("surnameLabel").innerHTML = '<b>Surname: </b>' + surname;
    document.getElementById("birthdateLabel").innerHTML = '<b>Birthdate: </b>' + birthdate;
    document.getElementById("telLabel").innerHTML = '<b>Phone number: </b>' + telNum;
    document.getElementById("emailLabel").innerHTML = '<b>E-mail: </b>' + email;
    previewFile()

    $('#basicInfoModal').modal('hide');
}

function previewFile() {
    var preview = document.getElementById("profileImage");
    var file = document.getElementById("formFile").files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}


function saveWorkingInfo() {
    var companyName = document.getElementById("companyInput").value.trim();
    var position = document.getElementById("positionInput").value.trim();
    var description = document.getElementById("descriptionInput").value.trim().replaceAll(/\n/g, '<br/>');
    var startYear = document.getElementById("startYearInput").value.trim();
    var endYear = document.getElementById("endYearInput").value.trim();

    /*
    Check name
    */
    if (companyName === "") {
        document.getElementById("companyNameContainer").innerHTML = '<span class="badge bg-danger" style="margin: 5px;">Required</span>' +
            '<input class="form-control" type="text" id="companyInput" placeholder="Name of the company" style="border: red 1px solid">';
        return;
    } else {
        document.getElementById("companyNameContainer").innerHTML = '<input class="form-control" type="text" id="companyInput" placeholder="Name of the company" value="' + companyName + '">';
    }
    /*
    Check position
    */
    if (position === "") {
        document.getElementById("positionContainer").innerHTML = '<span class="badge bg-danger" style="margin: 5px;">Required</span>' +
            '<input class="form-control" type="text" id="positionInput" placeholder="Position" style="border: red 1px solid">';
        return;
    } else {
        document.getElementById("positionContainer").innerHTML = '<input class="form-control" type="text" id="positionInput" placeholder="Position" value="' + position + '">';
    }
    /*
    Check start year
    */
    if (startYear === "") {
        document.getElementById("startYearContainer").innerHTML = '<span class="badge bg-danger" style="margin: 5px;">Required</span>' +
            '<input class="form-control" type="text" id="startYearInput" placeholder="Start year (2015)" style="border: red 1px solid">';
        return;
    } else {
        document.getElementById("startYearContainer").innerHTML = '<input class="form-control" type="text" id="startYearInput" placeholder="Start year (2015)" value="' + startYear + '">';
    }
    /*
    Check end year
    */
    if (endYear === "") {
        document.getElementById("endYearContainer").innerHTML = '<span class="badge bg-danger" style="margin: 5px;">Required</span>' +
            '<input class="form-control" type="text" id="endYearInput" placeholder="End year (2018)" style="border: red 1px solid">';
        return;
    } else {
        document.getElementById("endYearContainer").innerHTML = '<input class="form-control" type="text" id="endYearInput" placeholder="End year (2018)" value="' + endYear + '">';
    }

    workExperience.push({
        companyName: companyName,
        position: position,
        description: description,
        startYear: startYear,
        endYear,
        endYear
    })

    $('#workExperienceModal').modal('hide');
    populateWorkExperience();

    document.getElementById("companyInput").value = "";
    document.getElementById("positionInput").value = "";
    document.getElementById("descriptionInput").value = "";
    document.getElementById("startYearInput").value = "";
    document.getElementById("endYearInput").value = "";

}

function populateWorkExperience() {

    var html = '';

    workExperience.forEach(work => {
        html += '<p><h6>' + work.startYear + ' / ' + work.endYear + ' - ' + work.position + ' - ' + work.companyName + ' <button type="button" class="btn" onclick="deleteWork(' + workExperience.indexOf(work) + ')"><i class="far fa-trash-alt"></i></button></h6>' + work.description + '</p>';
    });

    document.getElementById("workExperienceContainer").innerHTML = html;
}

function deleteWork(reference) {
    workExperience.splice(reference, 1);

    populateWorkExperience();
}