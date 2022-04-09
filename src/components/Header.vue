<script lang="ts" setup>
</script>

<template>
  <div class="header">
    <div class="center-header">
      <div class="box-menus">
        <div class="logo">
          <a href="#">
            <img src="../assets/img/logo-intercom.png" width="100%" />
          </a>
        </div>
        <div class="box-enlaces">
          <a
            target="_blank"
            rel="noopener"
            href="https://www.intercom.com"
            class="header__home__url"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <g
                stroke="#FFF"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M11.5 6.73v6.77H.5v-11h7.615M4.5 9.5l7-7M13.5 5.5v-5h-5" />
              </g>
            </svg>
            <span>Ir a Intercom</span>
          </a>

          <select
            name="locale-picker"
            id="locale-picker"
            class="locale-picker"
            data-locale="es"
            style="width: 89px;"
          >
            <option data-locale="de" value="/help/de/">Deutsch</option>
            <option data-locale="en" value="/help/en/">English</option>
            <option data-locale="es" selected value="Español">Español</option>
            <option data-locale="fr" value="/help/fr/">Français</option>
            <option data-locale="pt-BR" value="/help/pt-BR/">Português do Brasil</option>
            <option data-locale="ja" value="/help/ja/">日本語</option>
          </select>
          <select
            name="hidden_locales"
            id="locale-picker-for-width-calculation"
            class="locale-picker"
          >
            <option value>Español</option>
          </select>
        </div>
      </div>
      <h1 class="header__headline">Consejos y respuestas del Equipo de Productos Digitales</h1>
      <form autocomplete="off" class="header__form search">
        <input
          type="text"
          autocomplete="off"
          class="search__input js__search-input o__ltr"
          placeholder="Buscar respuestas..."
          tabindex="1"
          name="q"
          value
        />
        <div class="search_icons">
          <button type="submit" class="search__submit o__ltr"></button>
          <a class="search__clear-text__icon">
            <svg
              class="interface-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.018 6.643L5.375 4 4 5.375l2.643 2.643L4 10.643 5.375 12l2.643-2.625L10.625 12 12 10.643 9.357 8.018 12 5.375 10.643 4z"
              />
            </svg>
          </a>
        </div>
      </form>
    </div>
  </div>
</template>
