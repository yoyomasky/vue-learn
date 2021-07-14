<template>
  <div>
    <p class="title">购物车</p>
    <ul class="cartlist">
      <li v-for="(item, index) in cartlist" :key="index">
        <input type="checkbox" />
        <img :src="item.img" alt="" />
        <div class="content">
          <p>{{ item.title }}</p>
          <p>{{ item.attr }}</p>
          <p>¥ {{ item.price }}</p>
        </div>
        <div>
          <button>删除</button>
          <div class="numbox">
            <button>-</button>
            <input type="text" :value="item.num" />
            <button>+</button>
          </div>
        </div>
      </li>
    </ul>
    <div class="total">
      <div><input type="checkbox" />全选</div>
      <div>总数量: 1 总价格:2</div>
      <div>
        <button>立即购买</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cartlist: [
        {
          id: 1,
          title: "PUBG绝地求生USB自动压枪芯片智能识别硬件宏物理主播吃鸡鼠标",
          attr: "压枪盒子 新人勿拍",
          price: "100.00",
          num: 1,
          img: "https://img.alicdn.com/bao/uploaded/i1/2208339167917/O1CN01Mcrf7K28M2Ki5aEnB_!!2208339167917.jpg_190x190q90_.webp",
        },
        {
          id: 1,
          title: "PUBG绝地求sadfasdf",
          attr: "压枪盒子 新人勿拍",
          price: "100.00",
          num: 2,
          img: "https://img.alicdn.com/bao/uploaded/i1/2208339167917/O1CN01Mcrf7K28M2Ki5aEnB_!!2208339167917.jpg_190x190q90_.webp",
        },
        {
          id: 1,
          title: "阿朵发送到速度阿萨德翁",
          attr: "压枪盒子 阿萨德阿萨德",
          price: "123.00",
          num: 2,
          img: "https://img.alicdn.com/bao/uploaded/i1/2208339167917/O1CN01Mcrf7K28M2Ki5aEnB_!!2208339167917.jpg_190x190q90_.webp",
        },
      ],
    };
  },
  methods:{
    add(){
      console.log(111);
      console.log(222);
      console.log(333);
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.title {
  height: 40px;
  line-height: 40px;
}
.cartlist li {
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.cartlist li img {
  width: 70px;
  height: 70px;
}
.content {
  font-size: 12px;
  text-align: left;
  flex: 1;
}
.numbox {
  display: flex;
  margin-top: 10px;
}
.numbox input {
  width: 30px;
  text-align:center;
}
.numbox button {
  width: 20px;
}
.total {
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #e5e5e5;
  display: flex;
  height: 50px;
  padding: 0;
  align-items: center;
  justify-content: space-between;
}
.total input {
  margin-left: 10px;
}
</style>
