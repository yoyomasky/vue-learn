<template>
    <div>
        <p>navbar</p>
        <br>
        <ul class="navbar">
            <li v-for="(item,index) in navArr" :key="index" :class="{active:index==avtiveHaver}" @click="tab(index)">{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
//script
export default {
    data(){
        return {
            avtiveHaver:0,
            navArr:[
                {'id':1,'title':'class 1'},
                {'id':2,'title':'class 2'},
                {'id':3,'title':'class 3'},
                {'id':4,'title':'class 4'},
                {'id':5,'title':'class 5'},
                ],
        }
    },
    methods:{
        tab(index){
            this.avtiveHaver=index;
        }
    }
    
}
</script>
<style >
    *{margin:0;padding:0;background-color:#e0eaf7;}
    li {list-style:none;background-color: #fff;cursor: pointer;}
    .navbar{
        display: flex;
        background-color:#fff;
        border-radius: 25px;
        height:45px;
        padding:5px 10px;
    }
    .navbar li{
        width:33.33%;
        height:45px;
        font-size:16px;
        line-height:45px;
        border-radius: 25px;
    }
    .active{
        color: rgb(255, 255, 255);
        background-color: #598bf0;
    }

</style>