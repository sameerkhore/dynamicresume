document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeform") as HTMLFormElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Personal Information
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;

        // Education
        const school = (document.getElementById("school") as HTMLTextAreaElement).value;
        const fieldSchool = (document.getElementById("fieldSchool") as HTMLTextAreaElement).value;
        const schoolYear = (document.getElementById("schoolYear") as HTMLTextAreaElement).value;

        const college = (document.getElementById("college") as HTMLTextAreaElement).value;
        const fieldCollege = (document.getElementById("fieldCollege") as HTMLTextAreaElement).value;
        const collegeYear = (document.getElementById("collegeYear") as HTMLTextAreaElement).value;

        const university = (document.getElementById("university") as HTMLTextAreaElement).value;
        const fieldUniversity = (document.getElementById("fieldUniversity") as HTMLTextAreaElement).value;
        const universityYear = (document.getElementById("universityYear") as HTMLTextAreaElement).value;

        // Experience
        const experienceType = (document.getElementById("experienceType") as HTMLSelectElement).value;

        // Skills
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

        // Create Resume Output
        const resumeContent = `
            <h3>Resume</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            
            <h4>Qualification</h4>
            <p><strong>School:</strong> ${school}, ${fieldSchool} (${schoolYear})</p>
            <p><strong>College:</strong> ${college}, ${fieldCollege} (${collegeYear})</p>
            <p><strong>University:</strong> ${university}, ${fieldUniversity} (${universityYear})</p>

            <h4>Experience</h4>
            <p>${experienceType === "fresh" ? "Fresh Graduate" : "Experienced"}</p>

            <h4>Skills</h4>
            <p>${skills}</p>
        `;

        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeContent;
        } else {
            console.error("The resume output element is missing.");
        }
    });
});
