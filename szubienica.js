var nr_hasla = Math.floor(Math.random()*5); 
var hasla = new Array(5)
hasla[0] = "Bez pracy nie ma kołaczy";
hasla[1] = "Franek to najlepszy przyjaciel";
hasla[2] = "Franek to gej";
hasla[3] = "Można jak najbardziej";
hasla[4] = "Autor jest idiotą";

var haslo = hasla[nr_hasla]
/**funkcja JS do wielkich liter */
haslo = haslo.toUpperCase();
/**length jest cechą a nie funkcją stąd bez nawiasów okrągłych */
/**po lewej czyja_właściwość.jaka_właściwość po prawej kropki */
var dlugosc = haslo.length;
/**zmienan do gry */
var ile_skuch = 0;
/**druga zmienna do zamiany hasła na pauzy */
var haslo1 ="";

/**Audio to typ zmiennej audio, nie podaję ścieżki bo ten sam folder */
var yes = new Audio("yes.wav");
var no = new Audio("no.mp3");

/**tworzymy pętle która będzie sama robić hasło zakreskowane */
for (i=0; i<dlugosc; i++)
{
    /**gdy (wyciagamy szufladki ze zmiennej, jest spacją to doklej spację do zmiennej po zmianie na kreski a jak inne to daj kreskę logiczne) 
    */
   /**UWAGA! JS nie przechowuje stringów w tablicach tak jak wiele języków programowania tak że dane litery występują kolejno po sobie co zadaną liczbę bytów w pamięci, stąd nie możęmy w JS używać zapisu napis[5] aby odnieść się do 5 znaku wybranego stringa, zamiast tego musimy użyć funckji napis.charAt(5) */
    if(haslo.charAt(i)==" ") haslo1 =haslo1 + " ";
    else haslo1 = haslo1 + "-";
}


/**funckja która wypisuje nam hasło na początku :) */
function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo1;
}

/**można by użyć w tagu body onload action ale to jest słaby ogólnie sposób i się z niego nie korzysta, zapis poniżej niejako zamienia "window.onload na wypisz_haslo (alias) które w tym przypadku jest naszą funkcją stąd się wywoła" */
window.onload = start;

/**przygotowujemy swoją tablicę przechowującą literki aby indeksować łatwiej w funckji */
/**nowa zmienna która jest Array czyli tablicą (35) to rozmiar tablicy numerowanie od 0*/
var litery = new Array(35)
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ź";
litery[34] = "Ż";



function start()
{
    /**zmienna stworzona w funkcji jest widoczna tylko tam */
    var tresc_diva = "";

    /**pętla tworząca nam literki by nie robić x divów */
    for (i=0; i<=34; i++)
    {
        var element = "lit" + i;
        /**wkładamy do treści zmiennej divy doklejając w zależności od ilości iteracji */
        /**litery to stworzona przez nas tablica 35 łańcuchów a nie łańcuch 35 liter stąd mogę się posłużyć nawiasem kwadratowym */
        tresc_diva = tresc_diva + '<div class="litera" id = "'+element+'" onclick="sprawdz('+i+')">'+litery[i]+'</div>';
        /**tutaj używając modulo czyli reszty z dzielenia nadajemy co 7 stworzonych literek złamanie przyklejania aby łądnie dzieliły się na stronie i nie pisać tego x razy*/
        /**jeśli reszta z dzielenia przez 7 to 0 */
        /**nawet w if trzeba pamiętać o kolejności wykonywania działań */
        if ((i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
    }
    document.getElementById("alfabet").innerHTML = tresc_diva;



    wypisz_haslo();
}


/*funkcja zamieniająca znak w zmiennej haslo na wybranej pozycji*/
String.prototype.ustawZnak = function(miejsce,znak)
{
    /**this - ten obiekt na rzecz któego funckję wywołano (po lewej stronie kropki) */
    /**tostring zapewni że obiekt będzie łańcuchem, konwertuje */
    if (miejsce > this.lenght - 1) return this.toString();
    /**to jest linia która pozwoli uzyskać zamianę znaku na pozycję w zmiennej miejsce */
    /**substring pozwala wyjąć część stringa część łańcucha, podłańcuch
     * dwa warianty:
     *  napis.substr(x,y);
     *  napis.substring(x,z);
     *  x=numer znaku, od którego wyjmujemy łańcuch y=ilość wyjmowanych znaków, z=numer znaku od którego nic już nie wyjmujemy z łańcucha */
    else return this.substr(0,miejsce)+ znak + this.substr(miejsce+1)
}



/**aby uniknąć tego że wyraz po zamianie z kresek na litery ulega rozszerzeniu ze względu na różną szerokość znaków czcionki należy użyć czcionki monotypicznej czyli "monospace" */






/**wprowadzamy argument do funckji z numerem klikniętego diva */
function sprawdz(nr)
{

    /**flaga - zmienna typu boolean (to taka zmienna która przyjmuje wartości true lub false) */
    var trafiona = false;


    /*wbudowana funkcja JS któa powoduje wyświetlenie okienka*/
   /* alert(nr);*/

   for (i=0; i<dlugosc; i++)
   {
       if (haslo.charAt(i) == litery[nr])
       {
        haslo1 = haslo1.ustawZnak(i,litery[nr]);
        trafiona = true;
        wypisz_haslo();
       }
   }

   /**operator porównania to dwa razy = */
   if (trafiona == true)
   {
    /**wywołanie pliku dźwiękowego */
    yes.play();
    /**jako że nasze divy z literkami mają już id to taki zapis da nam id literki
     */
    var element = "lit" + nr;
    document.getElementById(element).style.background  ="#003300";
    document.getElementById(element).style.color  ="#00C000";
    document.getElementById(element).style.border  ="3px solid #00C000";
    document.getElementById(element).style.cursor  ="default";


   }
   else
   {
       no.play();
    var element = "lit" + nr;
    document.getElementById(element).style.background  ="#330000";
    document.getElementById(element).style.color  ="#C00000";
    document.getElementById(element).style.border  ="3px solid #C00000";
    document.getElementById(element).style.cursor  ="default";
    /**ustaw atrybut zmienia wybrany atrybut diva, a ";" reprezentuje pustą instrukcję, to po to aby nie dało się cał czas klikaćw tą samą literę aż do skuchy */
    document.getElementById(element).setAttribute("onclick",";");
        //skucha
        ile_skuch++;
        var obraz = "img/s"+ile_skuch+".jpg";
        document.getElementById("szubienica").innerHTML='<img src="'+obraz+'" alt=""/>';
   }

   //wygrana
   if (haslo == haslo1)
   {
       /**locaton.reload funckja przeładuje stronę, odświeża */
       document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło: "+haslo+ '<br/><br/><span class = "reset" onclick="location.reload()">JESZCZE RAZ?</span>';
   }

   //przegrana
   if (ile_skuch>=9)
   {
    document.getElementById("alfabet").innerHTML = "Ty umarłeś! "+""+ '<br/><br/><span class = "reset" onclick="location.reload()">JESZCZE RAZ?</span>';
   }
}