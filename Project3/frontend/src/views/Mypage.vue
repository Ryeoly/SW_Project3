<template>
    <div id="mypage" class="wrapper">
        <div class="leftbar">
            <Leftside :value="[name_info, email_info]"/>
        </div>
        <div class="mainview">
            <router-view />
        </div>
    </div>
</template>


<script>
    export default {

        name: 'Mypage',
        // created(){
        //   this.u_idx=this.$store.state.userdata.useridx
        //   this.$http.post('/mypage',{u_idx: this.u_idx}).then((res)=>{
        //     if(res.data.success===false){
        //       console.log("error")
        //     }
        //     else{
        //       this.user_info=res.data.user_info
        //     }
        //   })
        // },
      computed:{
        name_info(){
          return this.$store.state.useridx
        },
        email_info(){
          return this.$store.state.useremail
        }
      },
        data: () => ({
            selectedItem: 0,
            items: [
                { text: 'My Files', icon: 'mdi-folder' },
                { text: 'Shared with me', icon: 'mdi-account-multiple' },
                { text: 'Starred', icon: 'mdi-star' },
                { text: 'Recent', icon: 'mdi-history' },
                { text: 'Offline', icon: 'mdi-check-circle' },
                { text: 'Uploads', icon: 'mdi-upload' },
                { text: 'Backups', icon: 'mdi-cloud-upload' },
            ],
          user_info:[],
          information:[],
        }),
        components: {
            // eslint-disable-next-line vue/no-unused-components
            Leftside: () =>import('@/components/mypage/leftside'),
            // eslint-disable-next-line vue/no-unused-components
            test: () =>import('@/components/mypage/test')
        },
    }
</script>

<style>
    .wrapper{
     display: grid;
     grid-template-columns: repeat(100, 1fr);
     grid-template-rows: repeat(100, 1fr);
    }
    .leftbar{
        margin-left: 5%;
        grid-area: 1/1/100/15;
    }
    .mainview{
        grid-area : 1/20/100/100;
    }
</style>
