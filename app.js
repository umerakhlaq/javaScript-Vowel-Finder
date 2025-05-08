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

