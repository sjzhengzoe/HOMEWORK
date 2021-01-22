<template>
  <div id="app" class="layout">
    <header class="header">
      <div class="container">
        <div class="left">
          <a href="/" class="home-link active">
            <g-image
              src="~/assets/img/logo.svg"
              width="60.05"
              height="18"
              alt="Nichlas W. Andersen"
              class="logo"
            />
          </a>
        </div>
        <nav class="nav right">
          <a href="/journal" aria-current="page" class="nav__link active--exact active">Journal</a
          ><a href="/contact" class="nav__link">Say Hi!</a>
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
