var final = [];
var temp = [];
alpha = "abcdefghijklmnñopqrstuvwxyz";
var alph = alpha.split("");
var alphMay = alpha.toUpperCase().split("");
console.log(alph);
console.log(alphMay);
var normalize = (function() {
  var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",
      to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
      mapping = {};
 
  for(var i = 0, j = from.length; i < j; i++ )
      mapping[ from.charAt( i ) ] = to.charAt( i );
 
  return function( str ) {
      var ret = [];
      for( var i = 0, j = str.length; i < j; i++ ) {
          var c = str.charAt( i );
          if( mapping.hasOwnProperty( str.charAt( i ) ) )
              ret.push( mapping[ c ] );
          else
              ret.push( c );
      }
      return ret.join( '' );
  }
 
})();
$('#encryptBtn').click(function() {
	var origin = $("#origen").val();
	//obtenemos el mensaje

	console.log('char at 0' + origin.charAt(0));
	$("#originalW").html(origin);
	//agregamos el mensaje al campo mensaje original
	//mensaje sin espacios
	origin=normalize(origin);
	origin = origin.replace(/ /g, '');
	origin = origin.(\r\n|\n|\r);
	origin = origin.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
	console.log("origin es" + origin);
	convertArray(origin);
});

function convertArray(origin) {
	temp = origin.match(/.{1,4}/g);
	$('#chunkW').html(temp.join('\t'));
	sustitution(temp);

}

function sustitution(temp) {

	for ( i = 0; i < temp.length; i++) {
		var chunk = temp[i];
		console.log('chunk es ' + chunk);
		chunk_array = chunk.split("");
		console.log('chunk_array es ' + chunk_array.join('\t'));
		
		for ( j = 0; j < 4; j++) {

			temp_char = chunk_array[j];
			console.log('temp_char es ' + temp_char);
			temp_may=temp_char.toUpperCase();
			if (temp_char ==temp_may) {
				if (temp_char == "Z") {
					chunk_array[j] = alphMay[0];
				} else {
					pos = jQuery.inArray(temp_char, alphMay);
					console.log('pos es ' + pos);
					console.log('chunk en j antes de es ' + chunk_array[j]);
					chunk_array[j] = alphMay[pos + 1];
				}
			} else {
				if (temp_char == "z") {
					chunk_array[j] = alph[0];
				} else {
					pos = jQuery.inArray(temp_char, alph);
					console.log('pos es ' + pos);
					console.log('chunk en j antes de es ' + chunk_array[j]);
					chunk_array[j] = alph[pos + 1];
				}
			}

			console.log('chunk en j despues de es' + chunk_array[j]);

		}
		temp[i] = chunk_array.join("");
		console.log('temp en 1 despues de es' + temp[i]);

	}
	$('#sustW').html(temp.join('\t'));

}

function permutation(temp) {

}

