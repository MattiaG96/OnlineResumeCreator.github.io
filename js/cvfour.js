function showPDFPreview() {
    $('.hiddebleButtons').hide();
    const element = document.getElementById("resumeTemplate");
    document.getElementById("testTemplate").style.margin = '-20px';
    //document.getElementById("watermarkTemplate").style.visibility = "visible"
    html2pdf().set({
        pagebreak: {
            avoid: ['p', 'h6', 'h3', 'img', 'h5']
        }
    }).from(element).save('preview.pdf').then(() => {
        console.log("DONE")
        $('.hiddebleButtons').show();
        //document.getElementById("watermarkTemplate").style.visibility = "hidden"
        document.getElementById("testTemplate").style.margin = '0px';
    });
}

function printPDF() {
    $('.hiddebleButtons').hide();
    const element = document.getElementById("resumeTemplate");
    //document.getElementById("blueHeader").style.marginLeft = '-100px';
    //document.getElementById("blueHeader").style.marginRight = '-100px';
    //document.getElementById("blueHeader").style.marginTop = '-40px';
    html2pdf().set({
        pagebreak: {
            avoid: ['p', 'h6', 'h3', 'img', 'h5']
        }
    }).from(element).save('resume.pdf').then(() => {
        console.log("DONE")
        $('.hiddebleButtons').show();
        //document.getElementById("blueHeader").style.marginLeft = '-20px';
        //document.getElementById("blueHeader").style.marginRight = '-20px';
        //document.getElementById("blueHeader").style.marginTop = '-20px';
    });

}