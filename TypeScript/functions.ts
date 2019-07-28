let word: any;

const changeText = (newWord: string) => {
    word = newWord;
}

changeText ( 'stuff' )

console.log ( word )

changeText ( 'things' )

console.log ( word )