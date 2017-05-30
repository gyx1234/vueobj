<template>
    <div>
        <loading v-if="loadingState"></loading>
        <!-- <keep-alive>-->
            <router-view></router-view>
       <!-- </keep-alive>-->

    </div>
</template>

<script type="text/ecmascript-6">
    import home from './component/home.vue';
    import {mapActions, mapGetters} from 'vuex';
    export default {
      name: 'app',
      data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      },
        components:{
            home
        },
        computed:mapGetters(
            ['loadingState']
        ),
    }
</script>

