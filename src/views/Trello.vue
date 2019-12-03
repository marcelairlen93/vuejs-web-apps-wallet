<template>
  <AppBoard colorClass="is-info is-bold">
    <AppHeader appName="Trello"></AppHeader>
    <AppContentBox>
      <div class="tile is-ancestor">
        <div class="tile is-3 is-parent">
          <div class="tile is-child box card-list">
            <div class="subtitle">
              <h2>Lista</h2>
            </div>
            <div class="content">
              <ul>
                <div>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div class="tile is-3 is-parent">
          <div class="tile is-child box card-list">
            <div class="subtitle">
              <h2>Lista</h2>
            </div>
            <div class="content">
              <ul>
                <div>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div class="tile is-3 is-parent">
          <div class="tile is-child box card-list">
            <div class="subtitle">
              <h2>Lista</h2>
            </div>
            <div class="content">
              <ul>
                <div>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div class="tile is-3 is-parent">
          <div class="tile is-child box card-list">
            <div class="subtitle">
              <h2>Lista</h2>
            </div>
            <div class="content">
              <ul>
                <div>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div class="tile is-3 is-parent">
          <div class="tile is-child box card-list">
            <div class="subtitle">
              <h2>Lista</h2>
            </div>
            <div class="content">
              <ul>
                <div>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div class="tile is-3 is-parent">
          <div class="tile is-child box card-list">
            <div class="subtitle">
              <h2>Lista</h2>
            </div>
            <div class="content">
              <ul>
                <div>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                  <li class="box">Teste</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AppContentBox>
  </AppBoard>
</template>

<script>
import AppBoard from "@/components/AppBoard.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppContentBox from "@/components/AppContentBox.vue";
export default {
  components: {
    AppBoard,
    AppHeader,
    AppContentBox
  }
};
</script>

<style scoped>
* {
  color: #363636 !important;
}
.card-list {
  padding: 10px;
  max-height: 70%;
}
.content {
  max-height: 75%;
  overflow-y: auto;
}
.content ul {
  margin: 5px 0;
}
.subtitle {
  padding: 5px 10px;
  margin: 0 !important;
}
li.box {
  margin: 0 2px;
  padding: 10px;
}
li.box:not(:last-child) {
  margin-bottom: 10px;
}
</style>