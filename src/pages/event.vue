<template>
    <div>
        <p>参数传递</p>
        <button @click="param(1,2,3,4,5,6)">多个测试</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
    
        }
    },
    methods:{
        param(...testData){
            //console.log(testData);
            testData.forEach(element => {
                console.log(element);
            });
        }
    }
}
</script>