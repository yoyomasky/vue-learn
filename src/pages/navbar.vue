<template>
  <div>
    <div class="contentBox">
      <p>navbar</p>
      <ul class="navbar">
        <li v-for="(item,index) in navArr" :key="index" :class="{active:index==avtiveHaver}" @click="tab(index)">
          {{item.title}}</li>
        <div class="navLiBg"></div>
      </ul>
      <div class="se">当前选中菜单为 → <span class="se_title">{{thisClassName}}</span></div>
      <ul class="dataList">
        <li v-for="(item,index) in dataList[avtiveHaver]" :key="index" @touchstart="onLi(index)">
          <p>{{item}}</p>
        </li>
      </ul>
    </div>

    <div class="noContent" v-show="dataListType">
      - 暂无列表内容 -
    </div>
  </div>
</template>
<script>
  //script
  export default {
    data() {
      return {
        avtiveHaver: 0,
        thisClassName: '',
        dataListType:false,
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
        dataList: [
          ['内容一', '内容二', '内容三', '内容四', '内容五'],
          ['选项一', '选项二', '选项三', '选项四'],
          ['测试一', '测试二', '测试三'],
        ]
      }
    },
    mounted() {
      //获取li
      let liwidth = document.querySelectorAll(".navbar li");
      //背景
      let bgWidth = document.querySelector(".navLiBg");

      //设置背景的宽度
      bgWidth.style.width = liwidth[0].offsetWidth + 'px';
      this.thisClassName = this.navArr[0].title;


    },
    methods: {
      tab(index) {
        let bgWidth = document.querySelector(".navLiBg");
        let selfLeft = document.querySelectorAll(".navbar li")[index].offsetLeft;
        bgWidth.style.left = selfLeft + 'px';
        this.avtiveHaver = index;
        this.thisClassName = this.navArr[index].title;
        this.dataListType = !this.dataList.hasOwnProperty(index);
      },
      onLi(index){
        console.log(index);
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
  ul{
    padding:0;
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

  /**
.navLiBg
div滑块背景
*/
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

  .se {
    margin: 10px 0;
    padding: 5px;
    background-color: #fff;

    font-size: 16px;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }

  .se_title {
    color: #598bf0;
  }

  .dataList {
    background-color: #fff;
    font-size: 16px;
    text-align: left;
    position: relative;
    padding:0 20px 20px 20px;
  }

  .dataList li {
    height: 40px;
    line-height: 40px;
    border-bottom:1px dashed #e8e8e8;
    padding:5px 5px 5px 35px;
  }
.dataList li p{
  margin:0;

  line-height:50px;
}
  .noContent {
    padding:65% 25% 25% 25%;
    background: #fff no-repeat center/40% url("../assets/images/noContentsIcon.png");
  }
/** end */
</style>
