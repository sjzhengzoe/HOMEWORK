<template>
  <div id="app" class="layout">
    <header class="header">
      <div class="container">
        <div class="left">
          <router-link to="/" class="home-link active">
            <g-image
              src="~/assets/img/logo.svg"
              width="60.05"
              height="18"
              alt="Nichlas W. Andersen"
              class="logo"
            />
          </router-link>
        </div>
        <nav class="nav right">
          <router-link
            to="/journal"
            aria-current="page"
            class="nav__link active--exact"
            exact
            active-class="active"
          >
            Journal
          </router-link>
          <router-link to="/contact" class="nav__link">Say Hi!</router-link>
        </nav>
      </div>
    </header>
    <slot></slot>
    <footer class="footer">
      <div class="container"><span>Copyright © 2021</span></div>
    </footer>
  </div>
</template>

<style></style>
