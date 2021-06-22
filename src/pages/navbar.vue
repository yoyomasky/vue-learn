<template>
  <div>
    <p>navbar</p>
    <ul class="navbar">
      <li v-for="(item,index) in navArr" :key="index" :class="{active:index==avtiveHaver}" @click="tab(index)">
        {{item.title}}</li>
      <div class="navLiBg"></div>
    </ul>
  </div>
</template>
<script>
  //script
  export default {
    data() {
      return {
        avtiveHaver: 0,
        navArr: [{
            'id': 1,
            'title': 'class 1'
          },
          {
            'id': 2,
            'title': 'class 2'
          },
          {
            'id': 3,
            'title': 'class 3'
          },
          {
            'id': 4,
            'title': 'class 4'
          },
          {
            'id': 5,
            'title': 'class 5'
          },
        ],
      }
    },
    mounted() {
      //获取li
      let liwidth = document.querySelectorAll(".navbar li");
      //背景
      let bgWidth = document.querySelector(".navLiBg");
      //设置背景的宽度
      bgWidth.style.width = liwidth[0].offsetWidth + 'px';
    },
    methods: {
      tab(index) {
        let bgWidth = document.querySelector(".navLiBg");
        let selfLeft = document.querySelectorAll(".navbar li")[index].offsetLeft;
        bgWidth.style.left = selfLeft + 'px';
        this.avtiveHaver = index;
      }
    }

  }

</script>
<style>
  body {
    margin: 0;
    padding: 0;
    background-color: #e0eaf7;
  }

  li {
    list-style: none;
    cursor: pointer;
  }

  .navbar {
    display: flex;
    background-color: #fff;
    border-radius: 25px;
    height: 45px;
    padding: 5px 10px;
    position: relative;
  }

  .navbar li {
    width: 33.33%;
    height: 45px;
    font-size: 16px;
    line-height: 45px;
    border-radius: 25px;
    z-index: 2;
    position: relative;
    text-align: center;
  }

  .navLiBg {
    background-color: #598bf0;
    border-radius: 25px;
    height: 45px;
    z-index: 1;
    position: absolute;
    top: 5px;
    left: 10px;
    transition: all .4s;
  }

  .active {
    color: rgb(255, 255, 255);
    font-weight: 600;
    transition: all .4s;
  }

</style>
