function spin() {
    const input = document.getElementById("options").value;

    if (input.trim() === "") {
        alert("Please enter some options!");
        return;
    }

    const optionsArray = input.split(",").map(item => item.trim());

    const resultText = document.getElementById("result");

    // Fake spinning effect
    let count = 0;
    const spinInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * optionsArray.length);
        resultText.innerText = optionsArray[randomIndex];
        count++;

        if (count > 15) {
            clearInterval(spinInterval);
            const finalIndex = Math.floor(Math.random() * optionsArray.length);
            resultText.innerText = "Final Decision: " + optionsArray[finalIndex];
        }

    }, 100);
}