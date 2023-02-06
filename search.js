const lyrics = 'Subohanalloh Alhamdulillah La ilaha illallahu Allahu Akbar.La ilaha illahu ohdahu La shari kalahu,Lahul mulku owahul haMDu owa wala kulli shai ing kkodhir.'

const search = 'hAMdu'
const searchStringLower = search.toLowerCase();
const lyricsLowerCase = lyrics.toLowerCase();
const doesExit = lyricsLowerCase.includes(searchStringLower);

console.log(doesExit)
// One Line
const doesExitOneLine = lyrics.toLowerCase().includes(search.toLowerCase());
console.log(doesExitOneLine)

// indexOf
console.log(lyrics.indexOf("mulKu"))

// if else
if (lyrics.indexOf("hamdu") !== -1){
    console.log('ase eita')
}
else {
    console.log('cannot find it')
}


// starwith
console.log(lyrics.startsWith('Subohanalloh'))
// 
console.log(lyrics.startsWith('sub'))

// endWidth
const fileName = 'mybiodata.pdf';
const otherfile = 'mypic.png';
console.log(fileName.endsWith('.pdf'))