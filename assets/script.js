function calculateCGPA() {
            let input = document.getElementById('numbers').value;
            let numbers = input.split(' ').map(Number).filter(n => !isNaN(n));
            if (numbers.length === 0) {
                document.getElementById('result').innerHTML = "Please enter valid grades. ❌";
                return;
            }

            let sum = numbers.reduce((a, b) => a + b, 0);
            let cgpa = (sum / numbers.length).toFixed(2);

            let resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '';

            let table = document.createElement('table');
            let headerRow = table.insertRow();
            var cell1 = headerRow.insertCell(0);
            var cell2 = headerRow.insertCell(1);
            cell1.innerHTML = "<b>Semester 📅</b>";
            cell2.innerHTML = "<b>GPA 🏅</b>";

            numbers.forEach((num, index) => {
                let row = table.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML = `Semester ${index + 1}`;
                cell2.innerHTML = num.toFixed(2);
            });

            let footerRow = table.insertRow();
            var cell1 = footerRow.insertCell(0);
            var cell2 = footerRow.insertCell(1);
            cell1.innerHTML = "<b>CGPA 🎉</b>";
            cell2.innerHTML = cgpa;

            resultDiv.appendChild(table);
        }
