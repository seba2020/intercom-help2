import { defineStore } from "pinia";
import dummy from './articlesDummy'

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    list: <any>[],
  }),
  actions: {
    fetchArticles() {
      this.list = dummy;
      return dummy;
    }
  }
})
