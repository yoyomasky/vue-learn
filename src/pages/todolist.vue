<template>
  <div>
    <p>todolist实例</p>
    <div>
      <input type="text" v-model="task" />
      <button @click="add()">添加</button>
      <button @click="editBut()">修改</button>
    </div>
    <p>任务列表</p>
    <ul>
      <li v-for="(item, index) in tasklist" :key="index">
        {{ item }}
        <button @click="edit(index)">编辑</button>
        <button @click="del(index)">删除</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      task: "",
      tasklist: [],
      tmpIndex: "",
    };
  },
  methods: {
    add() {
      if (this.task != "") {
        this.tasklist.push(this.task);
        this.task = "";
      }
    },
    edit(index) {
      this.task = this.tasklist[index];
      this.tmpIndex = index;
    },
    editBut() {
      this.tasklist.splice(this.tmpIndex, 1, this.task);
    },
    del(index) {
      this.tasklist.splice(index, 1);
    },
  },
};
</script>