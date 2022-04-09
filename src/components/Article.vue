<script lang="ts" setup>
import { icons } from '../utils/icons';
const props = defineProps<{
  id: string,
  ico: string,
  title: string,
  subtitle: string,
  image: string,
  count: string,
  author: string,
}>();
</script>
<template>
  <a href="/help/es/collections/382-que-es-intercom" class="paper">
    <div class="collection o__ltr">
      <div class="collection__photo" v-html="icons[props.ico]"></div>
      <div class="collection_meta" dir="ltr">
        <h2 class="t__h3 c__primary">{{ props.title }}</h2>
        <p class="paper__preview">{{ props.subtitle }}</p>
        <div class="avatar">
          <div class="avatar__photo avatars__images o__ltr">
            <img
              src="https://static.intercomassets.com/avatars/3246904/square_128/101-1607545843.jpg?1607545843"
              alt="Damon Alexander avatar"
              class="avatar__image"
            />
          </div>
          <div class="avatar__info">
            <div>
              <span class="c__darker">{{ props.count }} artículos en esta apartado</span>
              <br />Redactado por
              <span class="c__darker">{{ props.author }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

