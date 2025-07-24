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

      

      //addizione dove spostiamo il numeroUno in output
      function addizione() {
        localStorage.setItem(
          "output",
          localStorage.getItem("numeroUno")

        );
        localStorage.setItem("operazione","+")
        console.log(localStorage)
        pulisci()
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
        pulisci()
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
        pulisci()
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
        pulisci()
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


















