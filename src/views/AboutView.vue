<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <!-- <p>{{ itemIndex }}</p> -->
    <!-- 兩種取陣列數量的方法 -->
    1.list有{{ count }}個<br />
    2.list有{{ list.length }}個

    <ul>
      <button @click="add">加入</button>
      <!-- <li v-for="num in page" :key="num">{{ num }}</li> -->
      <li v-for="item in list" :key="item.id">
        <a v-if="item.show" :href="item.link" :style="{
          color: item.color

        }">{{ item.title }}</a>
      </li>
    </ul>



  </div>
</template>
<script>
export default {
  data() {
    return {
      itemIndex: 2,
      list: [
        {
          id: 1,
          title: 'annie',
          color: 'red',
          show: true,
          link: 'https://www.kkday.com/zh-tw/blog/45716/asia-taiwan-taipei-diy-ai'
        },
        {
          id: 2,
          title: 'ivy',
          color: 'blue',
          show: false,
          link: 'https://www.pinterest.com/search/pins/?q=purchasing%20agent%20logo&rs=typed'
        }
      ]
    }
  },
  computed: {
    count() {
      return this.list.length
    }
  },
  methods: {
    add() {
      this.itemIndex += 1
      this.list.push(
        {
          id: this.itemIndex,
          title: `test${this.itemIndex}`

        }
      )
    }
  },
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
