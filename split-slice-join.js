const lyrics = 'Subohanalloh Alhamdulillah La ilaha illallahu Allahu Akbar.La ilaha illahu ohdahu La shari kalahu,Lahul mulku owahul haMDu owa wala kulli shai ing kkodhir.'

// const parts = lyrics.split('');
// const parts = lyrics.split('.');

// const parts = lyrics.slice(2,121);
// console.log(parts)
// const parts2 = lyrics.substring(3,121);
// console.log(parts2)

// join
const lines = [
    'bohanalloh Alhamdulillah La ilaha illallahu Allahu Akbar.La ilaha illahu ohdahu La shari kalahu,Lahul mulku owahul haMD',
    'ohanalloh Alhamdulillah La ilaha illallahu Allahu Akbar.La ilaha illahu ohdahu La shari kalahu,Lahul mulku owahul haMD'
];
const newLine = lines.join(' : ');
console.log(newLine)

// slice
const kisuNumber = [34, 23, 12, 52, 12, 15, 53, 79]
const kataNumber = kisuNumber.slice(2,6);
console.log(kataNumber);
console.log(kisuNumber)


