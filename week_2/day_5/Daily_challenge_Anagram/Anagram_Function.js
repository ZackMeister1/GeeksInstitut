// Exercice 1: Anagram Function
//

/* On va créer une fonction qui :
prend deux strings
retourne true ou false
ignore les espaces
ne tient pas compte des majuscules/minuscules

Rappel
Un anagramme = même lettres, même quantité, ordre différent

Exemple : "Astronomer" → "Moon starer" 
*/ 


const isAnagram = (str1, str2) => {

  // 1️⃣ Nettoyer les strings
  const formatString = (str) => {
    return str
      .toLowerCase()        // ignore majuscules
      .replace(/\s/g, "")   // enlève les espaces
      .split("")            // transforme en array
      .sort()               // trie alphabétiquement
      .join("");            // retransforme en string
  };

  // 2️⃣ Comparer les deux résultats
  return formatString(str1) === formatString(str2);
};



// TEST

console.log(isAnagram("Astronomer", "Moon starer")); 
// true

console.log(isAnagram("School master", "The classroom")); 
// true

console.log(isAnagram("Hello", "World")); 
// false
