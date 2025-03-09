// <!--     kya karne aaya tu yaha pr -->
// <!--     chale ja yaha se mera code hai ye -->
// Datesheet Data (Example)
const examData = {
    class1: [
        {subject:"Applied Chemistry",date: "21 March",syllabus:"pdfs/chem.png"},
        { subject: "Applied Maths", date: "22 March", syllabus: "pdfs/math_syl.pdf" },
        { subject: "Thermal Science", date: "23 March", syllabus: "pdfs/thermal_syl.pdf" },
        { subject: "Electrical Engineering", date: "25 March", syllabus: "pdfs/electrical_syl.pdf" },
        { subject: "Environmental", date: "27 March", syllabus: "pdfs/enviro_syl.jpg" },
    ],
    class2: [
        {subject:"Applied Mathematics",date: "22 March",syllabus:"Unit3"},
        { subject: "Applied physics", date: "24 March", syllabus: "Unit1,Unit2" },
        { subject: "English", date: "25 March", syllabus: "Unit 2" },
        { subject: "Electronics Engineering", date: "26 March", syllabus: "Unit3" },
        { subject: "Engineering Mechanics", date: "27 March", syllabus: "Unit3" },
    ],
};
// Show Datesheet
function showDatesheet() {
    const selectedClass = document.getElementById("class-select").value;
    const datesheetTable = document.getElementById("datesheet-table");
    const datesheetDiv = document.getElementById("datesheet");

    if (selectedClass && examData[selectedClass]) {
        datesheetTable.innerHTML = `
            <tr>
                <th>Subject</th>
                <th>Date</th>
            </tr>
        `;

        examData[selectedClass].forEach(exam => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td><a href="${exam.syllabus}" target="_blank">${exam.subject}</a></td>
                <td>${exam.date}</td>
            `;
            datesheetTable.appendChild(row);
        });

        datesheetDiv.classList.remove("hidden");
    } else {
        datesheetDiv.classList.add("hidden");
    }
}
