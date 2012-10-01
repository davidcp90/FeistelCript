About FeistelCript
============
FeistelCript is a small exercise that show you how Feistel Encryption Algorythm works. FeistelCript have a Twitter Bootstrap User Interface and have a script called "<i>feistel.js</i>"</p>

Feistel.js
============
Feistel.js is a script that:
* Catch a message from a textarea
* Normalize accents and special characters to perform the feistel algorythm
* Convert the message in chunks and store them in a array 
* Sustitute the letters in the array for the next letter in the alphabet
* Permute the letters in each chunk in this way: 
** chunk[0]=newchunk[4]
** chunk[4]=newchunk[3]
** chunk[2]=newchunk[2]
** chunk[3]=newchunk[1]
* Show the original message, the chunk array, the replaced message and the final permutated message	

