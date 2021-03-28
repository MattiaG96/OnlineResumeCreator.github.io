var basicInfo = []
var socialInfo = []

function getBasicInfo() {

    var basicInfo = []

    var name = document.getElementById("nameInput").value.trim();
    var surname = document.getElementById("surnameInput").value.trim();
    var career = document.getElementById("careerInput").value.trim();
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

    basicInfo.push({
        name: name,
        surname: surname,
        telNum: telNum,
        email: email,
        career: career
    })

    document.getElementById("nameLabel").innerHTML = name;
    document.getElementById("surnameLabel").innerHTML = surname;
    document.getElementById("careerLabel").innerHTML = career;
    document.getElementById("telLabel").innerHTML = '<i class="fas fa-phone" style="margin-right: 10px;"></i>' + telNum;
    document.getElementById("emailLabel").innerHTML = '<i class="far fa-envelope" style="margin-right: 10px;"></i>' + email;
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

function addSocial() {

    socialInfo = []

    var facebook = document.getElementById("facebookInput").value.trim();
    var twitter = document.getElementById("twitterInput").value.trim();
    var youtube = document.getElementById("youtubeInput").value.trim();
    var instagram = document.getElementById("instagramInput").value.trim();
    var github = document.getElementById("githubInput").value.trim();
    var website = document.getElementById("websiteInput").value.trim();

    socialInfo.push({
        facebook: facebook,
        twitter: twitter,
        youtube: youtube,
        instagram: instagram,
        github: github,
        website: website
    });

    $('#socialModal').modal('hide');
    populateSocial();
}

function populateSocial() {

    var html = '';
    
    if(socialInfo['0'].facebook !== "") {
        html += '<h6 style="padding-left: 15px;"><i class="fab fa-facebook-square" style="margin-right: 5px;"></i> ' + socialInfo['0'].facebook + '</h6>';
    }

    if(socialInfo['0'].twitter !== "") {
        html += '<h6 style="padding-left: 15px;"><i class="fab fa-twitter" style="margin-right: 5px;"></i> ' + socialInfo['0'].twitter + '</h6>';
    }

    if(socialInfo['0'].youtube !== "") {
        html += '<h6 style="padding-left: 15px;"><i class="fab fa-youtube" style="margin-right: 5px;"></i> ' + socialInfo['0'].youtube + '</h6>';
    }

    if(socialInfo['0'].instagram !== "") {
        html += '<h6 style="padding-left: 15px;"><i class="fab fa-instagram" style="margin-right: 5px;"></i> ' + socialInfo['0'].instagram + '</h6>';
    }

    if(socialInfo['0'].github !== "") {
        html += '<h6 style="padding-left: 15px;"><i class="fab fa-github" style="margin-right: 5px;"></i> ' + socialInfo['0'].github + '</h6>';
    }

    if(socialInfo['0'].website !== "") {
        html += '<h6 style="padding-left: 15px;"><i class="fas fa-globe" style="margin-right: 5px;"></i> ' + socialInfo['0'].website + '</h6>';
    }

    document.getElementById("socialContainer").innerHTML = html;
}

function showPDFPreview() {
    $('.hiddebleButtons').hide();
    //document.getElementById("resumeHeader").style.marginLeft = "-60px";
    //document.getElementById("resumeHeader").style.marginRight = "-60px";
    const element = document.getElementById("resumeTemplate");
    document.getElementById("watermarkTemplate").style.backgroundImage = 'url("../img/watermark.png")'
    html2pdf().set({
        pagebreak: {
            avoid: ['p', 'h6', 'h3']
        }
    }).from(element).save('preview.pdf').then(() => {
        console.log("DONE")
        $('.hiddebleButtons').show();
        document.getElementById("watermarkTemplate").style.backgroundImage = 'url("")'
        //document.getElementById("resumeHeader").style.marginLeft = "-20px";
        //document.getElementById("resumeHeader").style.marginRight = "-20px";
    });

}

function printPDF() {
    $('.hiddebleButtons').hide();
    //document.getElementById("resumeHeader").style.marginLeft = "-60px";
    //document.getElementById("resumeHeader").style.marginRight = "-60px";
    const element = document.getElementById("resumeTemplate");
    html2pdf().set({
        pagebreak: {
            avoid: ['p', 'h6', 'h3']
        }
    }).from(element).save('resume.pdf').then(() => {
        console.log("DONE")
        $('.hiddebleButtons').show();
        //document.getElementById("resumeHeader").style.marginLeft = "-20px";
        //document.getElementById("resumeHeader").style.marginRight = "-20px";
    });

}