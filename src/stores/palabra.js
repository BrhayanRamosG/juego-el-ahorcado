import { defineStore } from "pinia";

export const usePalabraStore = defineStore({
  id: "palabra",
  state: () => ({
    abecedario: [
      "A",
      "Á",
      "B",
      "C",
      "D",
      "E",
      "É",
      "F",
      "G",
      "H",
      "I",
      "Í",
      "J",
      "K",
      "L",
      "M",
      "N",
      "Ñ",
      "O",
      "Ó",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "Ú",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
    palabras: [
      "méxico",
      "limón",
      "aguacate",
      "sol",
      "foca",
      "uva",
      "gas",
      "zanahoria",
      "luz",
      "manzana",
      "kilo",
      "pescado",
      "jugo",
      "gamboa",
      "color",
      "box",
      "aves",
      "computadora",
      "apio",
      "jitomate",
      "perro",
      "gato",
      "vaca",
      "leche",
      "marte",
      "bandera",
      "saturno",
      "historia",
      "carro",
      "bicicleta",
      "despensa",
      "vino",
      "botella",
      "sandía",
      "piña",
      "mango",
      "durazno",
    ],
    palabra: "",
    palabraOculta: "",
    intentos: 0,
    partida: {
      ganada: false,
      perdida: false,
      iniciada: false,
      finalizada: false,
      numeroPartidas: 0,
      numeroGanadas: 0,
      numeroPerdidas: 0,
      puntos: 0,
    },
    time: {
      minutos: 2,
      segundos: 30,
    },
    disableLetras: [],
  }),
  getters: {
    palabraGenerated: (state) => state.palabra.toUpperCase(),
    disableLetra: (state) => {
      return (letra) => {
        return state.disableLetras.indexOf(letra) >= 0 && true;
      };
    },
  },
  actions: {
    generatePartida() {
      this.partida.iniciada = true;
      this.partida.numeroPartidas++;
      const numberRandom = Math.floor(
        Math.random() * (this.palabras.length - 1)
      );
      this.palabra = this.palabras[numberRandom].toUpperCase();
      this.palabraOculta = "_ ".repeat(this.palabra.length);
    },
    resetPartida() {
      this.intentos = 0;
      this.disableLetras = [];
      Object.assign(this.partida, {
        ganada: false,
        perdida: false,
        iniciada: false,
        finalizada: false,
      });
      Object.assign(this.time, {
        minutos: 2,
        segundos: 30,
      });
    },
    checkPalabra(letra) {
      const palabraOculta = this.palabraOculta.split(" ");
      const finishedTime = {
        minutos: 0,
        segundos: 0,
      };

      if (this.palabra.indexOf(letra) >= 0) {
        for (let index = 0; index < this.palabraOculta.length; index++) {
          if (this.palabra[index] === letra) {
            palabraOculta[index] = letra;
            this.disableLetras.push(letra);
          }
        }
        this.palabraOculta = palabraOculta.join(" ");
      } else this.intentos++;

      if (this.intentos >= 13) {
        Object.assign(this.partida, {
          perdida: true,
          finalizada: true,
          numeroPerdidas: (this.partida.numeroPerdidas += 1),
          puntos: (this.partida.puntos -= 10),
        });
        Object.assign(this.time, { ...finishedTime });
      }

      const checkPalabra = palabraOculta.join("");
      if (checkPalabra === this.palabra) {
        Object.assign(this.partida, {
          ganada: true,
          finalizada: true,
          numeroGanadas: (this.partida.numeroGanadas += 1),
          puntos: (this.partida.puntos += 50),
        });
        Object.assign(this.time, { ...finishedTime });
      }
    },
    timeOut() {
      const sampleInterval = setInterval(() => {
        if (this.time.segundos > 0) {
          this.time.segundos -= 1;
        }
        if (this.time.segundos === 0) {
          if (this.time.minutos === 0) {
            clearInterval(sampleInterval);
            if (!this.partida.ganada && this.intentos < 13) {
              Object.assign(this.partida, {
                numeroPerdidas: (this.partida.numeroPerdidas += 1),
                perdida: true,
                finalizada: true,
                puntos: (this.partida.puntos -= 10),
              });
            }
          } else {
            Object.assign(this.time, {
              minutos: (this.time.minutos -= 1),
              segundos: 59,
            });
          }
        }
      }, 1000);
    },
  },
});
