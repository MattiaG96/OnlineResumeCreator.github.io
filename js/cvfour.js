var basicInfo = []
var education = []
var workExperience = []
var skillList = []
var languageList = []

function getBasicInfo() {

    var basicInfo = []

    var name = document.getElementById("nameInput").value.trim();
    var surname = document.getElementById("surnameInput").value.trim();
    var career = document.getElementById("careerInput").value.trim();
    var telNum = document.getElementById("telInput").value.trim();
    var email = document.getElementById("emailInput").value.trim();
    var aboutMe = document.getElementById("aboutMeInput").value.trim().replaceAll(/\n/g, '<br/>');

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
    Checks career
    */
    if (career === '') {
        document.getElementById("careerContainer").innerHTML = '<span class="badge bg-danger" style="margin: 5px;">Required</span>' +
            '<input class="form-control" type="text" id="careerInput" placeholder="Career" style="border: red 1px solid">';
        return;
    } else {
        document.getElementById("careerContainer").innerHTML = '<input class="form-control" type="text" id="careerInput" placeholder="Career" value="' + career + '">';
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
            '<input class="form-control" type="email" id="emailInput" placeholder="E-mail" style="border: red 1px solid">';
        return;
    } else {
        document.getElementById("emailContainer").innerHTML = '<input class="form-control" type="email" id="emailInput" placeholder="E-mail" value="' + email + '">';
    }
    /*
    Checks about me
    */
    if (aboutMe === '') {
        document.getElementById("aboutMeContainer").innerHTML = '<span class="badge bg-danger" style="margin: 5px;">Required</span>' +
            '<textarea class="form-control" id="aboutMeInput" rows="5" placeholder="About me" style="border: red 1px solid"></textarea>';
        return;
    } else {
        document.getElementById("aboutMeContainer").innerHTML = '<textarea class="form-control" id="aboutMeInput" rows="5" placeholder="About me">' + aboutMe + '</textarea>';
    }

    basicInfo.push({
        name: name,
        surname: surname,
        telNum: telNum,
        email: email,
        career: career,
        aboutMe: aboutMe
    })

    document.getElementById("nameLabel").innerHTML = name;
    document.getElementById("surnameLabel").innerHTML = surname;
    document.getElementById("careerLabel").innerHTML = career;
    document.getElementById("telLabel").innerHTML = telNum;
    document.getElementById("emailLabel").innerHTML = email;
    document.getElementById("aboutMeLabel").innerHTML = aboutMe;
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

function saveEducation() {
    var schoolName = document.getElementById("schoolInput").value.trim();
    var study = document.getElementById("studyInput").value.trim();
    var endYear = document.getElementById("studyEndYearInput").value.trim();

    /*
    Check school
    */
    if (schoolName === "") {
        document.getElementById("schoolNameContainer").innerHTML = '<span class="badge bg-danger" style="margin: 5px;">Required</span>' +
            '<input class="form-control" type="text" id="schoolInput" placeholder="Name of the school" style="border: red 1px solid">';
        return;
    } else {
        document.getElementById("schoolNameContainer").innerHTML = '<input class="form-control" type="text" id="schoolInput" placeholder="Name of the school" value="' + schoolName + '">';
    }
    /*
    Check study
    */
    if (study === "") {
        document.getElementById("studyContainer").innerHTML = '<span class="badge bg-danger" style="margin: 5px;">Required</span>' +
            '<input class="form-control" type="text" id="studyInput" placeholder="Study made" style="border: red 1px solid">';
        return;
    } else {
        document.getElementById("studyContainer").innerHTML = '<input class="form-control" type="text" id="studyInput" placeholder="Study made" value="' + study + '">';
    }
    /*
    Check endYear
    */
    if (endYear === "") {
        document.getElementById("studyEndYearContainer").innerHTML = '<span class="badge bg-danger" style="margin: 5px;">Required</span>' +
            '<input class="form-control" type="text" id="studyEndYearInput" placeholder="End year (2015)" style="border: red 1px solid">';
        return;
    } else {
        document.getElementById("studyEndYearContainer").innerHTML = '<input class="form-control" type="text" id="studyEndYearInput" placeholder="End year (2015)" value="' + endYear + '">';
    }

    education.push({
        schoolName: schoolName,
        study: study,
        endYear: endYear
    });

    $('#educationModal').modal('hide');
    populateEducation();

    document.getElementById("schoolInput").value = '';
    document.getElementById("studyInput").value = '';
    document.getElementById("studyEndYearInput").value = '';
}

function populateEducation() {
    var html = '<div class="row">';

    education.forEach(study => {
        html += '<div class="col">' +
        '<p style="color: rgb(253, 101, 101); font-size: large;">' + study.schoolName + '<button type="button" class="btn hiddebleButtons" onclick="deleteStudy(' + education.indexOf(study) + ')"><i class="far fa-trash-alt"></i></button></p>' +
        '<p style="rgb(78, 78, 78);">' + study.study + '</p>' +
        '<p style="color: rgb(253, 101, 101);">' + study.endYear + '</p><br>' +
        '</div>';
        });

    document.getElementById("educationContainer").innerHTML = html;
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
        html += '<p style="color: rgb(253, 101, 101); font-size: large;">' + work.companyName+ '<button type="button" class="btn hiddebleButtons" onclick="deleteWork(' + workExperience.indexOf(work) + ')"><i class="far fa-trash-alt"></i></button></p>' +
        '<p style="color: rgb(78, 78, 78);">' + work.position + '</p>' +
        '<p style="color: rgb(253, 101, 101);">' + work.startYear + ' - ' + work.endYear + '</p>' +
        '<p style="color: rgb(78, 78, 78);">' + work.description + '</p><br>';
    });

    document.getElementById("workExperienceContainer").innerHTML = html;
}

function deleteWork(reference) {
    workExperience.splice(reference, 1);

    populateWorkExperience();
}

function deleteStudy(studyRef) {
    education.splice(studyRef, 1);

    populateEducation();
}

function saveSkill() {
    var skill = document.getElementById("skillInput").value.trim();
    var basicCheckBox = document.getElementById("basicLevelCheckBox").checked;
    var intermediateCheckbox = document.getElementById("intermediateLevelCheckBox").checked;
    var advancedCheckbox = document.getElementById("advancedLevelCheckBox").checked;
    var experteCheckbox = document.getElementById("expertLevelCheckBox").checked;
    var level = '';

    /*
    Check skill
    */
    if (skill === "") {
        document.getElementById("skillContainer").innerHTML = '<span class="badge bg-danger" style="margin: 5px;">Required</span>' +
            '<input class="form-control" type="text" id="skillInput" placeholder="Skill" style="border: red 1px solid">';
        return;
    } else {
        document.getElementById("skillContainer").innerHTML = '<input class="form-control" type="text" id="skillInput" placeholder="Skill" value="' + skill + '">';
    }
    /*
    Check checkboxs
    */
    if (!basicCheckBox && !intermediateCheckbox && !advancedCheckbox && !experteCheckbox) {
        document.getElementById("checkboxAlertContainer").innerHTML = '<span class="badge bg-danger" style="margin: 5px;">Required</span>';
        return;
    } else {
        document.getElementById("checkboxAlertContainer").innerHTML = '';
    }

    if (basicCheckBox) {
        level = 'basic';
    } else if (intermediateCheckbox) {
        level = 'intermediate';
    } else if (advancedCheckbox) {
        level = 'advanced';
    } else if (experteCheckbox) {
        level = 'expert';
    }

    skillList.push({
        skill: skill,
        level: level
    })

    $('#skillModal').modal('hide');
    document.getElementById("skillInput").value = '';
    document.getElementById("basicLevelCheckBox").checked = false;
    document.getElementById("intermediateLevelCheckBox").checked = false;
    document.getElementById("advancedLevelCheckBox").checked = false;
    document.getElementById("expertLevelCheckBox").checked = false;
    populateSkill();
}

function populateSkill() {
    var html = '';
    var levelBadge = ''

    skillList.forEach(skill => {

        if (skill.level === 'basic') {
            levelBadge = '<img width="70px" height="70px" src="../img/25_red.png" style="margin: 5px;">';
        } else if (skill.level === 'intermediate') {
            levelBadge = '<img width="70px" height="70px" src="../img/50_red.png" style="margin: 5px;">';
        } else if (skill.level === 'advanced') {
            levelBadge = '<img width="70px" height="70px" src="../img/75_red.png" style="margin: 5px;">';
        } else if (skill.level === 'expert') {
            levelBadge = '<img width="70px" height="70px" src="../img/100_red.png" style="margin: 5px;">';
        }

        html += '<div class="col text-center my-auto">' +
        levelBadge +
        '<h5 style="color: rgb(78, 78, 78);">' + skill.skill + '</h5>' +
        '<button type="button" class="btn hiddebleButtons" onclick="deleteSkill(' + skillList.indexOf(skill) + ')"><i class="far fa-trash-alt"></i></button>' +
        '</div>';
    
    });

    document.getElementById("skillsContainer").innerHTML = html;
}

function deleteSkill(skillRef) {
    skillList.splice(skillRef, 1);

    populateSkill();
}

function saveLanguage() {
    var language = document.getElementById("languageInput").value.trim();
    var basicCheckBox = document.getElementById("basicLevelCheckBoxLanguage").checked;
    var intermediateCheckbox = document.getElementById("intermediateLevelCheckBoxLanguage").checked;
    var advancedCheckbox = document.getElementById("advancedLevelCheckBoxLanguage").checked;
    var experteCheckbox = document.getElementById("expertLevelCheckBoxLanguage").checked;
    var level = '';

    /*
    Check language
    */
    if (language === "") {
        document.getElementById("languageContainer").innerHTML = '<span class="badge bg-danger" style="margin: 5px;">Required</span>' +
            '<input class="form-control" type="text" id="languageInput" placeholder="Language" style="border: red 1px solid">';
        return;
    } else {
        document.getElementById("languageContainer").innerHTML = '<input class="form-control" type="text" id="languageInput" placeholder="Language" value="' + language + '">';
    }
    /*
    Check checkboxs
    */
    if (!basicCheckBox && !intermediateCheckbox && !advancedCheckbox && !experteCheckbox) {
        document.getElementById("languageCheckboxAlertContainer").innerHTML = '<span class="badge bg-danger" style="margin: 5px;">Required</span>';
        return;
    } else {
        document.getElementById("languageCheckboxAlertContainer").innerHTML = '';
    }

    if (basicCheckBox) {
        level = 'basic';
    } else if (intermediateCheckbox) {
        level = 'intermediate';
    } else if (advancedCheckbox) {
        level = 'advanced';
    } else if (experteCheckbox) {
        level = 'expert';
    }

    languageList.push({
        language: language,
        level: level
    })

    $('#languagesModal').modal('hide');
    document.getElementById("languageInput").value = '';
    document.getElementById("basicLevelCheckBoxLanguage").checked = false;
    document.getElementById("intermediateLevelCheckBoxLanguage").checked = false;
    document.getElementById("advancedLevelCheckBoxLanguage").checked = false;
    document.getElementById("expertLevelCheckBoxLanguage").checked = false;
    populateLanguages();
}

function populateLanguages() {

    var html = '';
    var level ='';

    languageList.forEach(language => {
        
        if (language.level === 'basic') {
            level = '<img src="../img/25_red.png" height="70px" width="70px" style="margin: 5px;">';
        } else if (language.level === 'intermediate') {
            level = '<img src="../img/50_red.png" height="70px" width="70px" style="margin: 5px;">';
        } else if (language.level === 'advanced') {
            level = '<img src="../img/75_red.png" height="70px" width="70px" style="margin: 5px;">';
        } else if (language.level === 'expert') {
            level = '<img src="../img/100_red.png" height="70px" width="70px" style="margin: 5px;">';
        }

        html += '<div class="col text-center my-auto">' +
        level +
        '<h5>' + language.language + '</h5>' +
        '<button type="button" class="btn hiddebleButtons" onclick="deleteLanguage(' + languageList.indexOf(language) + ')"><i class="far fa-trash-alt"></i></button>' +
        '</div>';

    });

    document.getElementById("languagesContainer").innerHTML = html;

}

function deleteLanguage(langRef) {
    languageList.splice(langRef, 1);

    populateLanguages();
}

function showPDFPreview() {
    $('.hiddebleButtons').hide();
    const element = document.getElementById("resumeTemplate");
    document.getElementById("testTemplate").style.marginTop = '-20px';
    document.getElementById("testTemplate").style.marginLeft = '-20px';
    document.getElementById("testTemplate").style.marginRight = '-20px';
    document.getElementById("watermarkTemplate").style.visibility = "visible"
    document.getElementById("testTemplate").style.backgroundImage = 'url("../img/watermark.png")';
    html2pdf().set({
        pagebreak: {
            avoid: ['p', 'h6', 'h3', 'img', 'h5', 'h4', 'h1', 'h2']
        }
    }).from(element).save('preview.pdf').then(() => {
        console.log("DONE")
        $('.hiddebleButtons').show();
        document.getElementById("watermarkTemplate").style.visibility = "hidden"
        document.getElementById("testTemplate").style.marginTop = '0px';
        document.getElementById("testTemplate").style.marginLeft = '0px';
        document.getElementById("testTemplate").style.marginRight = '0px';
        document.getElementById("testTemplate").style.backgroundImage = '';
    });
}

function printPDF() {
    $('.hiddebleButtons').hide();
    const element = document.getElementById("resumeTemplate");
    document.getElementById("testTemplate").style.marginTop = '-20px';
    document.getElementById("testTemplate").style.marginLeft = '-20px';
    document.getElementById("testTemplate").style.marginRight = '-20px';
    html2pdf().set({
        pagebreak: {
            avoid: ['p', 'h6', 'h3', 'img', 'h5', 'h4', 'h1', 'h2']
        }
    }).from(element).save('resume.pdf').then(() => {
        console.log("DONE")
        $('.hiddebleButtons').show();
        document.getElementById("testTemplate").style.marginTop = '0px';
        document.getElementById("testTemplate").style.marginLeft = '0px';
        document.getElementById("testTemplate").style.marginRight = '0px';
    });

}