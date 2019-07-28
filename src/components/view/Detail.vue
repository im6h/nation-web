<template>
    <div>
       <div>
           <app-header></app-header>
       </div>
       <div>
           <p>{{$route.params.name}}</p>
       </div>
    </div>
</template>

<script>
import AppHeader from "@/components/common/Header.vue";
import AppFooter from "@/components/common/Footer.vue";

export default {
    name:"Detail",
    components:[
        AppHeader,
        AppFooter
    ]
}
</script>

<style>

</style>
