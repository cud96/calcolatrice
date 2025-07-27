      localStorage.clear();
      risultato = 0;
      // funzione che manda a schermo il valore cliccato
      function clicco(bottone) {
        document.getElementById("input").value == 0 ? pulisci() : "";
        //prendo elemento da input e sovrascrivo a 0 il valore che c'è nel bottone cliccato 
        document.getElementById("input").value += bottone.value;
        console.log(input.value);
        //metto nella variabile risultato i numeri che sto cliccando come primo numero da elaborare
        risultato += localStorage.setItem("numeroUno",input.value);
        console.log(localStorage);
  }

      //funzione che pulisce(AC)
      function pulisci() {
        document.getElementById("input").value = "";
      }
      //pulisci e riporti 0
      function pulisco(){
        document.getElementById("input").value = 0;
      }
      

      //addizione dove spostiamo il numeroUno in output
      function addizione() {
        localStorage.setItem(
          "output",
          localStorage.getItem("numeroUno")

        );
        localStorage.setItem("operazione","+")
        console.log(localStorage)
        pulisco()
        localStorage.setItem("numeroUno","");
       
      }

      //sottrazione
      function sottrazione() {
        localStorage.setItem(
          "output",
          localStorage.getItem("numeroUno")

        );
        localStorage.setItem("operazione","-")
        console.log(localStorage)
        pulisco()
        localStorage.setItem("numeroUno","");
       
      }

      //moltiplicazione
        function moltiplicazione() {
        localStorage.setItem(
          "output",
          localStorage.getItem("numeroUno")

        );
        localStorage.setItem("operazione","X")
        console.log(localStorage)
        pulisco()
        localStorage.setItem("numeroUno","");
       
      }

      //divisione
      function divisione() {
        localStorage.setItem(
          "output",
          localStorage.getItem("numeroUno")

        );
        localStorage.setItem("operazione","/")
        console.log(localStorage)
        pulisco()
        localStorage.setItem("numeroUno","");
       
      }



      
      //mostra
        function mostra(){
          let numeroDue = Number( localStorage.getItem("numeroUno"));
          let numeroUno = Number (localStorage.getItem("output"));
          switch (localStorage.getItem("operazione")){
          case "+":
          risultato = numeroDue + numeroUno;
          /* localStorage.setItem("output","numeroUno"+numeroDue) */
          console.log(risultato)
          document.getElementById("input").value = risultato;
          localStorage.setItem("numeroUno",risultato);
          break;
          case "-":
          risultato = numeroUno - numeroDue;
          /* localStorage.setItem("output","numeroUno"+numeroDue) */
          console.log(risultato)
          document.getElementById("input").value = risultato;
          localStorage.setItem("numeroUno",risultato);
          break;
          case "X":
          risultato = numeroUno * numeroDue;
          /* localStorage.setItem("output","numeroUno"+numeroDue) */
          console.log(risultato)
          document.getElementById("input").value = risultato;
          localStorage.setItem("numeroUno",risultato);
          break;
          case "/":
          risultato = numeroUno / numeroDue;
          /* localStorage.setItem("output","numeroUno"+numeroDue) */
          console.log(risultato)
          document.getElementById("input").value = risultato;
          localStorage.setItem("numeroUno",risultato);
          break;
          default:"errore";
          }
      }

//gomma da cancellare ultima operazione
function gomma() {
  const numeroDue = localStorage.getItem("numeroUno");
  const numeroUno = localStorage.getItem("output"); // questo è il primo numero inserito
  const operazione = localStorage.getItem("operazione");

  if (operazione && numeroDue !== null) {
    // siamo nella fase del secondo numero
    if (numeroDue.length > 0) {
      const nuovoValore = numeroDue.slice(0, -1);
      localStorage.setItem("output", nuovoValore);
      document.getElementById("input").value = nuovoValore;
      console.log("Gomma su numeroDue:", nuovoValore);
    }
  } else if (!operazione && numeroUno !== null) {
    // siamo nella fase del primo numero
    if (numeroUno.length > 0) {
      const nuovoValore = numeroUno.slice(0, -1);
      localStorage.setItem("output", nuovoValore);
      document.getElementById("input").value = nuovoValore;
      console.log("Gomma su numeroUno:", nuovoValore);
    }
  } else {
    console.log("Nessun numero da modificare.");
  }
}















