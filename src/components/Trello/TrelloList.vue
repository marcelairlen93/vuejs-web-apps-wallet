<template>
  <div class="tile is-3 is-parent">
    <div class="tile is-child box card-list is-paddingless">
      <div class="subtitle-wrapper">
        <div class="subtitle">
          <h2>{{title}}</h2>
        </div>
        <div class="dropdown" @click="showDropdown">
          <div class="drowpdown-trigger">
            <button
              class="button is-borderless is-text"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
            >
              <font-awesome-icon icon="ellipsis-h"></font-awesome-icon>
            </button>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <div class="dropdown-item has-text-centered">Ações da lista</div>
                <hr class="dropdown-divider" />
                <div class="dropdown-item">Adicionar Cartão...</div>
                <div class="dropdown-item">Copiar Lista...</div>
                <div class="dropdown-item">Mover Lista...</div>
                <div class="dropdown-item">Seguir</div>
                <hr class="dropdown-divider" />
                <div class="dropdown-item">Mover Todos os Cartões Nesta Lista...</div>
                <div class="dropdown-item">Arquivar Todos os Cartões Nesta Lista...</div>
                <hr class="dropdown-divider" />
                <div class="dropdown-item">Arquivar Esta Lista</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<script>
import { faPlus, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faPlus, faEllipsisH);

export default {
  props: ["title"],
  methods: {
    showDropdown(e) {
      var dropdown = document.querySelector("#dropdown-menu");
      if (!dropdown.classList.contains("is-shown")) {
        dropdown.classList.add("is-shown");
      } else {
        dropdown.classList.remove("is-shown");
      }
    }
  }
};
</script>

<style scoped>
* {
  color: #363636 !important;
}
.subtitle-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.card-list {
  position: relative;
  height: auto !important;
  max-height: 100% !important;
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
}
#addList {
  height: fit-content;
}
.subtitle {
  padding: 5px 20px 0;
  margin: 10px 0 0 0 !important;
}
.button {
  margin-top: 5px;
  margin-right: 5px;
}
.button.is-text:focus {
  box-shadow: none;
  border: none;
}
.button.is-text:hover {
  background-color: darkgrey;
}
.button.is-text:focus:not(:hover) {
  background-color: transparent;
}
.button svg path {
  color: #363636 !important;
}
.dropdown-menu.is-shown {
  display: block !important;
  margin-top: 5px;
}
.draggable {
  height: fit-content !important;
  max-height: calc(100% + 5px) !important;
}
.dropdown-item:not(.has-text-centered) {
  white-space: nowrap;
  cursor: pointer;
}
.dropdown-item:not(.has-text-centered):hover {
  background-color: lightgray;
}
.dropdown-divider {
  margin: 0.5rem 1rem 0.5rem 1rem;
}
.has-text-centered {
  color: grey !important;
  padding: 0 1rem;
}
</style>