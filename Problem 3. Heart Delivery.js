function heartDelivery(input) {
    if (!input || input.length === 0) {
        console.log("Invalid input. Please provide valid input.");
        return;
    }

    let firstLine = input.shift();
    if (!firstLine || typeof firstLine !== 'string') {
        console.log("Invalid input format. Please provide a valid string for the first line.");
        return;
    }

    let houses = firstLine.split('@').map(Number);
    input.pop(); // Remove the last empty string from the input

    let command = input.shift();

    let currentIndex = 0;

    while (currentIndex < houses.length && command !== "Love" && command !== undefined) {
        let tokens = command.split(' ');
        let jump = +tokens[1];
        currentIndex += jump;

        while (currentIndex >= houses.length) {
            currentIndex -= houses.length;
        }

        houses[currentIndex] -= 2;

        if (houses[currentIndex] <= 0) {
            houses[currentIndex] = 0;
            console.log(`Place ${currentIndex} already had Valentine's day.`);
        }

        command = input.shift();
    }

    console.log(`Cupid's last position was ${currentIndex}.`);

    let isSuccess = houses.every(house => house === 0);

    if (isSuccess) {
        console.log(`Mission was successful.`);
    } else {
        let count = houses.filter(house => house !== 0).length;
        console.log(`Cupid has failed ${count} places.`);
    }
}

heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);

// heartDelivery(["2@4@2",
// "Jump 2",
// "Jump 2",
// "Jump 8",
// "Jump 3",
// "Jump 1",
// "Love!"]);
// heartDelivery(["4@2@4@2",
// "Jump 1",
// "Jump 2",
// "Jump 1",
// "Jump 2",
// "Jump 2",
// "Jump 2",
// "Love!"]);