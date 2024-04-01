function calculateAge() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var currentDate = new Date();

    var age = currentDate.getFullYear() - birthdate.getFullYear();
    var months = currentDate.getMonth() - birthdate.getMonth();

    if (months < 0 || (months === 0 && currentDate.getDate() < birthdate.getDate())) {
        age--;
        months += 12;
    }

    if (currentDate.getDate() < birthdate.getDate()) {
        var lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
        var daysInLastMonth = (currentDate - lastMonth) / (1000 * 60 * 60 * 24);
        months += daysInLastMonth / 30;
    }

    document.getElementById("result").innerText = "Your age is: " + age + " years and " + Math.round(months) + " months";
}
