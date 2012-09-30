var final=[];
var temp=[];
var alph="abcdefghijklmnñopqrstuvwxyz".split("");
console.log(alph);
$('#encryptBtn').click(function()
{
	var origin=$("#origen").val().toLowerCase();//obtenemos el mensaje
	
	console.log('char at 0'+origin.charAt(0));
	$("#originalW").html(origin);//agregamos el mensaje al campo mensaje original
//mensaje sin espacios
origin=origin.replace(/ /g,'');
origin=origin.replace(/[^\w\s]/gi, '');
	console.log("origin es"+origin);
	convertArray(origin);
}
);

function convertArray(origin){
	longitud=origin.length;
	numChunks=Math.round(longitud/4);
	temp=origin.match(/.{1,4}/g);
	$('#chunkW').html(temp.join('\t'));
	sustitution(temp);
	
}
function sustitution(temp){
	
	for(i=0;i<temp.length;i++){
		var chunk=temp[i];
		console.log('chunk es '+chunk);
		chunk_array=chunk.split("");
		console.log('chunk_array es '+chunk_array.join('\t'));
		for(j=0;j<4;j++){
			temp_char=chunk_array[j];
			console.log('temp_char es '+temp_char);
			pos=jQuery.inArray(temp_char,alph);
			console.log('pos es '+pos);
			console.log('chunk en j antes de es '+chunk_array[j]);
			chunk_array[j]=alph[pos+1];
			console.log('chunk en j despues de es'+chunk_array[j]);
			
		}
		temp[i]=chunk_array.join("");
		console.log('temp en 1 despues de es'+temp[i]);
		
	}
	$('#sustW').html(temp.join('\t'));
	
	
}
function permutation(temp){
	
}


