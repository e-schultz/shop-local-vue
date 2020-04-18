<template>
  <Layout>
    <div
      class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"
    >
      <business-card
        v-for="edge in $page.allBusinesses.edges"
        :key="edge.node.id"
        :name="edge.node.name"
        :url="edge.node.url"
        :image="edge.node.image"
        :alt="edge.node.alt"
        :goods="edge.node.goods"
        :pickup="edge.node.pickup"
        :delivery="edge.node.delivery"
        :neighbourhood="edge.node.neighbourhood"
        :details="edge.node.details"
      ></business-card>
    </div>
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
import BusinessCard from '../components/BusinessCard';
export default {
  components: {
    BusinessCard,
  },
  metaInfo: {
    title: 'Hello, world!',
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
