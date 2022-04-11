//Boucle While

let j = 0; 

while (j <= 5) {

  if (j == 5) 
    document.write(j);

  else 
    document.write(j + '---');
    j++;
}

document.write("<br>");


//Boucle For

document.write("<select class='mx-auto col-md-2 form-control'>");

for(let l = 0; l <= 30; l++) {

  document.write("<option>" + l + "</option>");
}

document.write("</select> <br>");