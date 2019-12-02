<template>
  <section>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <figure>
          <img src="../assets/lion_tech_2_2x.png" alt="Logo" style="height: 55px" />
        </figure>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">YOUR FAVOURITE WEB APPS WALLET</router-link>
        </div>
        <div class="navbar-end">
          <router-link class="button is-success is-outlined navbar-item" to="/login">Login</router-link>
        </div>
      </div>
    </nav>

    <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />

    <div>
      <label for="openSidebarMenu" class="sidebarIconToggle">
        <div class="spinner diagonal part-1"></div>
        <div class="spinner horizontal"></div>
        <div class="spinner diagonal part-2"></div>
      </label>

      <div id="sidebarMenu">
        <ul class="sidebarMenuInner">
          <li id="creator">
            Marcel Souza
            <span>Web Developer</span>
          </li>
          <li>
            <a href="https://github.com/marcelairlen93">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/marcelsoouza/">linkedin</a>
          </li>
          <li>
            <a href="https://www.instagram.com/marcelsoouza/">Instagram</a>
          </li>
        </ul>
      </div>

      <div id="main">
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
.navbar {
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  box-shadow: none;
  background: linear-gradient(90deg, rgb(252, 158, 70) 15%, #3f5efb 100%);
  position: fixed;
  height: 60px !important;
  overflow: hidden;
  z-index: 10;
}
#sidebarMenu {
  height: 100%;
  position: fixed;
  overflow-y: auto;
  top: 60px;
  left: 0;
  width: 250px;
  transform: translateX(-250px);
  transition: transform 250ms ease-in-out;
  background: linear-gradient(180deg, rgb(252, 158, 70) 0%, #3f5efb 100%);
}
.sidebarMenuInner {
  margin: 0;
  padding: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.sidebarMenuInner li {
  list-style: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.sidebarMenuInner li#creator {
  cursor: text;
}
.sidebarMenuInner li span {
  display: block;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}
.sidebarMenuInner li a,
.navbar-brand a.navbar-item {
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}

.navbar-brand a.navbar-item {
  font-size: x-large;
}

.navbar-brand a.navbar-item:hover {
  color: #fff;
}

.navbar-brand {
  margin: auto !important;
}

input[type="checkbox"]:checked + div > #sidebarMenu {
  transform: translateX(0);
}

input[type="checkbox"]:checked + div > #main {
  transform: translateX(250px);
  transition: transform 250ms ease-in-out;
}

input[type="checkbox"] {
  transition: all 0.3s;
  box-sizing: border-box;
  display: none;
}
.sidebarIconToggle {
  transition: all 0.3s;
  box-sizing: border-box;
  cursor: pointer;
  position: fixed;
  z-index: 99;
  height: 100%;
  width: 100%;
  top: 22px;
  left: 15px;
  height: 22px;
  width: 22px;
}
.spinner {
  transition: all 0.3s;
  box-sizing: border-box;
  position: absolute;
  height: 3px;
  width: 100%;
  background-color: #fff;
}
.horizontal {
  transition: all 0.3s;
  box-sizing: border-box;
  position: relative;
  float: left;
  margin-top: 3px;
}
.diagonal.part-1 {
  position: relative;
  transition: all 0.3s;
  box-sizing: border-box;
  float: left;
}
.diagonal.part-2 {
  transition: all 0.3s;
  box-sizing: border-box;
  position: relative;
  float: left;
  margin-top: 3px;
}
input[type="checkbox"]:checked + div > .sidebarIconToggle > .horizontal {
  transition: all 0.3s;
  box-sizing: border-box;
  opacity: 0;
}
input[type="checkbox"]:checked + div > .sidebarIconToggle > .diagonal.part-1 {
  transition: all 0.3s;
  box-sizing: border-box;
  transform: rotate(135deg);
  margin-top: 8px;
}
input[type="checkbox"]:checked + div > .sidebarIconToggle > .diagonal.part-2 {
  transition: all 0.3s;
  box-sizing: border-box;
  transform: rotate(-135deg);
  margin-top: -9px;
}

#main {
  width: 100%;
  transition: transform 250ms ease-in-out;
  position: absolute;
  top: 60px;
}
</style>