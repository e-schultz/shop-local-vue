<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <div class="flex flex-col ">
        <h3 class="font-bold text-center text-xl">{{ name }}</h3>

        <div class="text-center">
          <a
            :href="url"
            class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
            >Visit Website</a
          >
        </div>
      </div>
    </div>
    <!-- using props for g-image :src didn't work as expected,
    found workaround on github: https://github.com/gridsome/gridsome/issues/292#issuecomment-524371751
    -->
    <g-image
      class="w-full"
      :src="require('!!assets-loader!~/assets/' + image)"
      :alt="alt"
    />
    <section class="px-6 py-4">
      Goods/Services:
      <p>{{ goods }}</p>
    </section>
    <section class="px-6 py-4 grid grid-cols-2">
      <h4>Delivery: {{ delivery ? 'yes' : 'no' }}</h4>
      <h4>Pickup: {{ pickup ? 'yes' : 'no' }}</h4>
    </section>

    <div class="px-6 py-4">
      <p>Details:</p>
      <p class="text-gray-700 text-base">{{ details }}</p>
    </div>
    <div class="px-6 py-4">
      <p>Neighbourhood:</p>
      <p class="text-gray-700 text-base">{{ neighbourhood }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'name',
    'url',
    'goods',
    'image',
    'alt',
    'pickup',
    'delivery',
    'neighbourhood',
    'details',
  ],
  data() {
    return {
      imageUrl: `~/favicon.png`,
    };
  },
};
</script>
