<template>
  <div>
    <div class="container p-4">
      <div class="row">
        
        <div class="col-md-4" v-for="article in articles" :key="article._id">
       
          <div class="card mb-2">
            <img src="./assets/logo.png" class="card-img-top">
            <div class="card-body">
              <h5>{{article.title}}</h5>
              <p>{{article.description}}</p>
            </div>
          </div>
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
    }
  }
}
</script>