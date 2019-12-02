<template>
  <div>
    <section class="hero is-success is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="tile is-ancestor is-vertical grey">
            <div class="tile is-10 display is-parent">
              <div class="tile is-child">{{valorCorrente || "0"}}</div>
            </div>

            <div class="tile is-2"></div>
            <!-- Empty tile to fill grid -->

            <div class="tile is-10 keys">
              <div class="tile is-vertical">
                <div class="tile is-parent">
                  <div class="tile is-child">
                    <div v-on:click="sinal" class="key op-key">
                      <div class="aspect-ratio-box-inside">
                        <div class="flexbox-centering">
                          <div class="viewport-sizing">+/-</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tile is-child">
                    <div v-on:click="porcentagem" class="key op-key">
                      <div class="aspect-ratio-box-inside">
                        <div class="flexbox-centering">
                          <div class="viewport-sizing">%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tile is-child">
                    <div v-on:click="limpar" class="key op-key">
                      <div class="aspect-ratio-box-inside">
                        <div class="flexbox-centering">
                          <div class="viewport-sizing">C</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tile is-child">
                    <div v-on:click="limparTudo" class="key op-key">
                      <div class="aspect-ratio-box-inside">
                        <div class="flexbox-centering">
                          <div class="viewport-sizing">AC</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tile is-parent">
                  <div class="tile is-child">
                    <div v-on:click="juntarOperadores('7')" class="key">
                      <div class="aspect-ratio-box-inside">
                        <div class="flexbox-centering">
                          <div class="viewport-sizing">7</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tile is-child">
                    <div v-on:click="juntarOperadores('8')" class="key">
                      <div class="aspect-ratio-box-inside">
                        <div class="flexbox-centering">
                          <div class="viewport-sizing">8</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tile is-child">
                    <div v-on:click="juntarOperadores('9')" class="key">
                      <div class="aspect-ratio-box-inside">
                        <div class="flexbox-centering">
                          <div class="viewport-sizing">9</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tile is-child">
                    <div v-on:click="dividir" class="key op-key">
                      <div class="aspect-ratio-box-inside">
                        <div class="flexbox-centering">
                          <div class="viewport-sizing">÷</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tile is-parent">
                  <div class="tile is-child">
                    <div v-on:click="juntarOperadores('4')" class="key">
                      <div class="aspect-ratio-box-inside">
                        <div class="flexbox-centering">
                          <div class="viewport-sizing">4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tile is-child">
                    <div v-on:click="juntarOperadores('5')" class="key">
                      <div class="aspect-ratio-box-inside">
                        <div class="flexbox-centering">
                          <div class="viewport-sizing">5</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tile is-child">
                    <div v-on:click="juntarOperadores('6')" class="key">
                      <div class="aspect-ratio-box-inside">
                        <div class="flexbox-centering">
                          <div class="viewport-sizing">6</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tile is-child">
                    <div class="key op-key">
                      <div class="aspect-ratio-box-inside">
                        <div class="flexbox-centering">
                          <div class="viewport-sizing">x</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tile is-parent">
                  <div class="tile is-child">
                    <div v-on:click="juntarOperadores('1')" class="key">
                      <div class="aspect-ratio-box-inside">
                        <div class="flexbox-centering">
                          <div class="viewport-sizing">1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tile is-child">
                    <div v-on:click="juntarOperadores('2')" class="key">
                      <div class="aspect-ratio-box-inside">
                        <div class="flexbox-centering">
                          <div class="viewport-sizing">2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tile is-child">
                    <div v-on:click="juntarOperadores('3')" class="key">
                      <div class="aspect-ratio-box-inside">
                        <div class="flexbox-centering">
                          <div class="viewport-sizing">3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tile is-child">
                    <div class="key op-key">
                      <div class="aspect-ratio-box-inside">
                        <div class="flexbox-centering">
                          <div class="viewport-sizing">-</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tile is-parent">
                  <div class="tile is-child">
                    <div v-on:click="ponto" class="key">
                      <div class="aspect-ratio-box-inside">
                        <div class="flexbox-centering">
                          <div class="viewport-sizing">,</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tile is-child">
                    <div v-on:click="juntarOperadores('0')" class="key">
                      <div class="aspect-ratio-box-inside">
                        <div class="flexbox-centering">
                          <div class="viewport-sizing">0</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tile is-child">
                    <div v-on:click="resultado" class="key">
                      <div class="aspect-ratio-box-inside">
                        <div class="flexbox-centering">
                          <div class="viewport-sizing">=</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tile is-child">
                    <div class="key op-key">
                      <div class="aspect-ratio-box-inside">
                        <div class="flexbox-centering">
                          <div class="viewport-sizing">+</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      valorCorrente: "",
      numeroAnterior: null,
      operador: null,
      operadorClicado: false
    };
  },
  methods: {
    limparTudo() {
      this.valorCorrente = "";
    },
    limpar() {
      this.valorCorrente = this.valorCorrente.substring(
        0,
        this.valorCorrente.length - 1
      );
    },
    sinal() {
      this.valorCorrente =
        this.valorCorrente.charAt(0) === "-"
          ? this.valorCorrente.slice(1)
          : `-${this.valorCorrente}`;
    },
    porcentagem() {
      this.valorCorrente = `${parseFloat(this.valorCorrente) / 100}`;
    },
    juntarOperadores(numero) {
      if (this.operadorClicado) {
        this.valorCorrente = "";
        this.operadorClicado = false;
      }

      this.valorCorrente = `${this.valorCorrente}${numero}`;
    },
    ponto() {
      if (this.valorCorrente.indexOf(".") === -1) {
        this.juntarOperadores(".");
      }
    },
    setarValor() {
      this.numeroAnterior = this.valorCorrente;
      this.operadorClicado = true;
    },
    resultado() {
      this.valorCorrente = `${this.operador(
        parseFloat(this.numeroAnterior),
        parseFloat(this.valorCorrente)
      )}`;
      this.numeroAnterior = null;
    },
    dividir() {
      this.operador = (num1, num2) => num1 / num2;
      this.setarValor();
    },
  }
};
</script>

<style>
.grey {
  background-color: darkgrey;
  margin: -15px auto !important;
  width: 50%;
  min-height: 500px !important;
  border: 2px solid darkgrey;
  border-radius: 15px;
}
.display {
  background-color: darkslategrey;
  margin: 30px auto 0;
  border: 2px solid darkslategrey;
  border-radius: 5px;
  text-align: right;
}
.keys {
  margin: 0 auto !important;
}
.key {
  background-color: lightgrey;
  margin: 0 5px !important;
  position: relative;
  padding-top: 50%;
  color: black;
  border: 1px solid lightgrey;
  border-radius: 5px;
}
.aspect-ratio-box-inside {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.flexbox-centering {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.viewport-sizing {
  font-size: 2.5vw;
}
.op-key {
  background-color: darkorange;
  border-color: darkorange;
}
</style>