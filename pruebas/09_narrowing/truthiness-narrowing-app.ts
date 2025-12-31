const printLetters = (word?: string) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    } else {
        console.log("YOU DID NOT PASS IN A WORD!");
    }
};

// Uso
printLetters("Hello");
printLetters();
