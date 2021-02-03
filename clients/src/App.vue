<template>
  <div>
    <div class="container p-4">
      <div class="row">
        
        <div class="col-md-4" v-for="article in displayedArticles" :key="article._id">
       
          <div class="card mb-2">
            <img src="./assets/logo.png" class="card-img-top">
            <div class="card-body">
              <h5>{{article.title}}</h5>
              <p>{{article.description}}</p>
            </div>
          </div>
        </div>
      </div>
       <div class="row">
          <div class="btn-group col-md-2 offset-md-5" >
          <button type="button" v-if="page != 1" @click="page--" class="btn btn-sm btn-outline-secondary">
            Before
          </button>
          <button type="button" v-for="pageNmber in pages.slice(page-1, page+5) " :key="pageNmber" @click="page = pageNmber" class="btn btn-sm btn-outline-secondary">
            {{pageNmber}}
          </button>
          <button type="button" v-if="page < pages.length" @click="page++" class="btn btn-sm btn-outline-secondary">
            Next
          </button>
        </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      articles : [],
      baseUrl:'http://localhost:4000',
      page: 1,
      perPage: 10,
      pages: []
    }
  },
  created(){
    this.getArticles();
  },
  methods:{ 
    async getArticles(){
     const res = await this.axios.get(`${this.baseUrl}/articles`);
     this.articles=res.data.articles
    },
    paginate(articles){
      let page = this.page;
      let perPage = this.perPage;
      let from = (page*perPage)- perPage;
      let to = (page*perPage);
      return articles.slice(from,to);
    },
    setArticles(){
      let numberOfPages = Math.ceil(this.articles.length / this.perPage)
      for (let i=1 ; i<=numberOfPages; i++ ){
        this.pages.push(i);
      }
    }
  },
  computed: {
    displayedArticles(){
      return this.paginate(this.articles);
    }
  },
  watch:{
    articles(){
      this.setArticles();
    }
  }
}
</script>