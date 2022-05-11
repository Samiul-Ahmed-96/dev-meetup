<template>
    <section class="profile">
        <v-container>
            <v-row>
                <h2>This is profile</h2>
            </v-row>
        </v-container>
    </section>
</template>

<script>
    export default {
        name:'Profile-area',
        // data(){
        //     return{
        //         user: this.user
        //     }
        // },
        computed:{
            user(){
                return this.$store.state.user
            }
        }
        
    }
</script>

<style scoped>

</style>