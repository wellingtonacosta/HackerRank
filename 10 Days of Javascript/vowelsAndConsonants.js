function vowelsAndConsonants (s) {


  [...s].forEach(letter => {
    if (letter.search(/[aiueo]/) === 0) console.log(letter);
});
[...s].forEach(letter => {
    if (letter.search(/[^aiueo]/) === 0) console.log(letter);
});
}

vowelsAndConsonants('javascriptloops')