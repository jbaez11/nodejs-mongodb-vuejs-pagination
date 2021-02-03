<template>
  <div>
    <div class="container p-4">
      <div class="row">
        <div class="col-md-4">

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
     //console.log(`${this.baseUrl}/articles`)
     console.log(res);
    }
  }
}
</script>