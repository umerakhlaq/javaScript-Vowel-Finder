# 🔍 JavaScript Vowel Finder

This mini-project allows the user to input a vowel (a, e, i, o, u), and then searches a predefined paragraph to locate and display all the positions where that vowel appears.

---

## 📜 Description

The program performs the following tasks:

- Prompts the user to enter a **single vowel**.
- Validates the input to ensure only vowels are allowed.
- Searches through a paragraph for matches.
- Displays the index of each vowel occurrence in the console.

---

## 📘 Key Concepts

- `prompt()` for user input
- `toLowerCase()` for case-insensitive matching
- String traversal using a `for` loop
- Conditional logic (`if-else`)
- Console output with string interpolation

---

## 💻 Code Sample

```javascript
let paragraph = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, libero commodi. Ipsum magni ab eligendi dicta dolor,
officiis sint perspiciatis sapiente fugit deserunt assumenda consequuntur sunt minima laborum recusandae nam?`;

let userfind = prompt('Enter a single vowel to search (a, e, i, o, u)');
userfind = userfind.toLowerCase();

if (userfind == 'a' || userfind == 'e' || userfind == 'i' || userfind == 'o' || userfind == 'u') {
    for (let i = 0; i < paragraph.length; i++) {
        if (paragraph[i].toLowerCase() == userfind) {
            console.log(`Found '${paragraph[i]}' at index ${i}`);
        }
    }
} else {
    alert("Enter vowels only (a, e, i, o, u)");
}

✅ Example Output

Found 'a' at index 27  
Found 'a' at index 77  
Found 'a' at index 123  
...

📂 Folder Structure


javaScript-Vowel-Finder/
├── index.html       # (optional) To run in browser
├── script.js        # Main JavaScript code
└── README.md        # Project documentation
