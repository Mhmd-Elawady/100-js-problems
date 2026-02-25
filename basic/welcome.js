// Codewars Kata 8
// Task:
// Return a greeting based on the user's language.
// If the language does not exist in the database,
// return the English greeting by default.

// Example:
// greet("french")  => "Bienvenue"
// greet("unknown") => "Welcome"

function greet(language) {
    const languages = {
        english: "Welcome",
        czech: "Vitejte",
        danish: "Velkomst",
        dutch: "Welkom",
        estonian: "Tere tulemast",
        finnish: "Tervetuloa",
        flemish: "Welgekomen",
        french: "Bienvenue",
        german: "Willkommen",
        irish: "Failte",
        italian: "Benvenuto",
        latvian: "Gaidits",
        lithuanian: "Laukiamas",
        polish: "Witamy",
        spanish: "Bienvenido",
        swedish: "Valkommen",
        welsh: "Croeso",
    };

    return languages[language] || languages.english;
}

// ================================================
// Test
// ================================================
console.log(greet("french"));   // "Bienvenue"
console.log(greet("english"));  // "Welcome"
console.log(greet("frenc"));    // "Welcome"
console.log(greet("arabic"));   // "Welcome"