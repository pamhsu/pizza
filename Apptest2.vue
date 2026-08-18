<script>
import HelloCard from './components/HelloCard.vue';
import HelloWorld from './components/HelloWorld.vue';
export default{
    components:{
        HelloCard,
        HelloWorld
    }
}
</script>

<template>
    <main>
        <h1>My vue project</h1>
        <div>
          <span>hellocard start-------</span>
          <HelloCard/>  
          <span>hellocard end-------</span>        
        </div>
        <div>
          <span>hellocard start-------</span>
          <HelloCard></HelloCard> 
          <span>hellocard end-------</span> 
        </div>
        <HelloWorld/>
 
        

        <section>
            <head>{{ msg }}</head>
            <p>this is in 1.vue</p>
        </section>

    </main>

</template>