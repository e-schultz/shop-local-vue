<template>
  <Layout>
    <ul>
      <li v-for="edge in $page.allBusinesses.edges" :key="edge.node.id">{{edge.node.name}}</li>
    </ul>
  </Layout>
</template>
<page-query>
query {
  
 allBusinesses {
  edges {
    node {
    name,
        id,
        url,
        goods,
        image,
        alt,
        pickup,
        delivery,
        neighbourhood,
        details,
    }
  }
} 	
}


</page-query>
<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
