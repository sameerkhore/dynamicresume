document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeform");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Personal Information
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        // Education
        var school = document.getElementById("school").value;
        var fieldSchool = document.getElementById("fieldSchool").value;
        var schoolYear = document.getElementById("schoolYear").value;
        var college = document.getElementById("college").value;
        var fieldCollege = document.getElementById("fieldCollege").value;
        var collegeYear = document.getElementById("collegeYear").value;
        var university = document.getElementById("university").value;
        var fieldUniversity = document.getElementById("fieldUniversity").value;
        var universityYear = document.getElementById("universityYear").value;
        // Experience
        var experienceType = document.getElementById("experienceType").value;
        // Skills
        var skills = document.getElementById("skills").value;
        // Create Resume Output
        var resumeContent = "\n            <h3>Resume</h3>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            \n            <h4>Qualification</h4>\n            <p><strong>School:</strong> ").concat(school, ", ").concat(fieldSchool, " (").concat(schoolYear, ")</p>\n            <p><strong>College:</strong> ").concat(college, ", ").concat(fieldCollege, " (").concat(collegeYear, ")</p>\n            <p><strong>University:</strong> ").concat(university, ", ").concat(fieldUniversity, " (").concat(universityYear, ")</p>\n\n            <h4>Experience</h4>\n            <p>").concat(experienceType === "fresh" ? "Fresh Graduate" : "Experienced", "</p>\n\n            <h4>Skills</h4>\n            <p>").concat(skills, "</p>\n        ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeContent;
        }
        else {
            console.error("The resume output element is missing.");
        }
    });
});
