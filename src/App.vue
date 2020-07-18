<template>
  <div id="app">
    <!-- 猫眼电影图片处理 -->
    <!-- <img :src="item.img|sign" alt="" v-for="(item,index) in dataList.movieList" :key="index"> -->
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/common/tabbar/tabbar.vue";
import http from "@/utils/http.js";
import Loading from "@/lib/loading/loading.js"
Loading();

export default {
  name: "app",
  components: {
    Tabbar
  },
  data() {
    return {
      dataList: []
    };
  },
  async created() {
    this.getApi(11);
  },
  filters: {
    sign(value) {
      return value.replace(/w\.h/, "85.115");
    }
  },
  methods: {
    //   华哥封装的
      async getApi(num){
            this.dataList = await http("get","/ajax/movieOnInfoList",{cityId:num});
            // console.log(this.dataList);
      }

    // 自己封装的
    // async getApi(num) {
    //   this.dataList = await http({
    //     url: "/ajax/movieOnInfoList",
    //     methods: "get",
    //     data: {
    //       cityId: num
    //     }
    //   });
    //   console.log(this.dataList);
    // }
  }
};
</script>

<style lang="scss" scoped>
#app {
  background: pink;
  font-size: 12px;
}

</style>