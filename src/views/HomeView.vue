<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useArticlesStore } from '../stores/articles';
import Article from '../components/Article.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
const articlesStore = useArticlesStore();

const articlesList = ref();

onMounted(() => {
  articlesList.value = articlesStore.fetchArticles();
})
</script>

<template>
  <Header />
  <div class="container">
    <div class="content educate_content">
      <section class="section">
        <!--caluga -->
        <div class="g__space" v-for="article in articlesList">
          <div v-for="item in article.items">
            <Article
              :id="article.id"
              :ico="article.ico"
              :title="item.title"
              :subtitle="item.subtitle"
              :image="item.image"
              :count="item.count"
              :author="item.author"
            />
          </div>
        </div>
        <!--Fin caluga -->
      </section>
    </div>
  </div>
  <Footer />
</template>

<style src="../styles.css">
</style>
