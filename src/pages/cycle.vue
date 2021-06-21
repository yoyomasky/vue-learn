<template>
    <div>
        <router-link to="page">
            点击跳转测试
        </router-link>
        生命周期实例{{data}}
        <div ref="ldom">获取dom元素</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            data:'生命周期',
            timer:null
        }
    },
    beforeCreate(){
       //console.log('beforeCreate'+this.data)
    },
    created(){
        this.timer=setInterval(()=>{
            console.log('定时器打开');
        },1000);
       //console.log('created'+this.data)
    },
    beforeMount(){
        //console.log('mounted'+this.$refs.ldom);
    },
    mounted(){
        //console.log('mounted'+this.$refs.ldom);
    },
    beforeUpdate(){
        console.log('beforeUpdate测试更新');
    },
    updated(){
        console.log('updated测试更新');
    },
    beforeDestroy(){
        clearInterval(this.timer);
    },
    destroyed(){
        
    }
}
</script>