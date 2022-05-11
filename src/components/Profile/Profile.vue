<template>
    <section class="profile">
        <v-container class="text-center">
            <v-row>
                <v-col>
                    <div class="profile-Details">
                        <v-icon color="white" class="pa-4 rounded-pill mb-4 display-4" style="background:teal">mdi-account</v-icon>
                        <h3>Email : {{this.$store.state.user.email}}</h3>
                    </div>
                </v-col>
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