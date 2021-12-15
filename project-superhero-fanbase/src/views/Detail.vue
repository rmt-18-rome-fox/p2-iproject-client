<template>
<div class="container">
<h4 class="display-4 text-center"> Very Simple Chatbot </h4> 
  
        <div v-for="(el,index) in chats" :key="el.user + index"  class="chatBox" id="chatBox">
            <div class="response">
                <div id="AutoMessage">
                    <strong>{{el.user}}</strong>
                    <br>{{el.message}}
                </div>
            </div>
         </div>

            <!-- <div  id="request"></div> -->
                <input @keyup.enter="sendMessage" v-model="chatMessage" class="w3-input" id="mesbox" type="text" placeholder="input here...">
    
</div>


</template>

<script>
export default {
    name: "Detail",
    data: function(){
        return {
            chatMessage: ""
        }
    },
     computed: {
         currentUser (){
             return this.$store.state.currentUser
         },
        chats (){
            return this.$store.state.chats
        }

  },
      methods: {
          sendMessage(){
              this.$store.dispatch('sendMessage',this.chatMessage)
        },
        //  fetchHero () {
            
            //       this.$store.dispatch('fetchHero')
        //   },
    },
}
</script>

<style>
.chatBox{
	position: relative;
	margin: 1%;
	padding: 10px 10px;
	border: 1px solid #ececec;
	border-radius: 1px;
	max-height: 80vh;
	min-height: 50vh;
    /* overflow: scroll; */
}


.inputum{
	background-color: #ececec;
	padding:2%;
	
	left: 0;
	bottom: 0;
	width: 100%;
}


.w3-input{padding:10px;display:block;border:1px solid #ccc; width:100%; 
 margin: 1px auto !important;}

.response{
border: 1px solid #007AFF;
background: #007AFF;
padding:2%;
width: 40%;
color: #fff;
border-radius:  20px;
}
.request{
background: #00CC47;
border: 1px solid #00CC47;
padding:2%;
width: 40%;
color: #fff;
border-radius: 20px;
float: right;


}
.btun{
position: absolute;
right: 2.5%;
bottom: 22%;
}

            /* <div class="panel-footer">
                 <div class="input-group">
                  <input @keyup.enter="sendMessage" v-model="chatMessage" type="text" class="form-control" placeholder="text messgae">
                  <span class="input-group-btn">
                    <button @keyup.enter="sendMessage" class="btn btn-default" type="button">Send</button>
                  </span>
                </div>
            </div> */
</style>