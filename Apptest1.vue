<script>
export default{
  data(){
    return{
      msg:"HELLO Vite and Vue",
      userkey:"",
      arrs:[
        {id:1,name:"abc"},
        {id:2,name:"def"},
        {id:3,name:'xyz'}
      ],
      result:[]
    }
  },
  methods: {
    changemsg(){
      this.msg=this.userkey
    },
    searchname(){
      this.result=this.arrs.find(item=>item.name.includes(this.userkey))
      console.log(this.result)
 
    }
  },
}
</script>

<template>
  <main>
    <h1>{{ msg }}</h1>
    <input type="text" v-model="userkey"><br>
    <button @click="changemsg">修改訊息</button><br>
    <button @click="searchname">search</button><br>
    <div v-for="item in result" :key="item.id">
      <h2>{{ item.name }}</h2>
    </div>
  </main>
</template>
<style>
  button{
    padding: 10px 20px;
  }
</style>