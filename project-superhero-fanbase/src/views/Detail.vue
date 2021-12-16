<template>
 <div>
    <header class="container bg-primary text-white">
        <div class="row">
            <div class="col-12 py-4 text-center">
                 <h1 class="display-1">HERO FIRE</h1>
            </div>
        </div>
    </header>
     <main class="container border">
        <div class="row">
            <div class="col-md-6 py-5">
                <h5 class="display-4 text-center"> Detail Heroes</h5>
                 <div class="col-md-6 py-5">
                         <div  class="card m-12 " style="width: 30em;">
                            <img :src="image" >
                            <div class="card-body">
                                <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-primary"></span> </div>
                                    <h3 class="card-text text-muted"><b>{{heroId.result2[0].name}}</b></h3>
                                    <h3 class="card-text text-muted"><b>{{heroId.result2[0].work.base}}</b></h3>
                                     <h3 class="card-text text-muted"><b>{{heroId.result2[0].biography.publisher}}</b></h3>
                                    <p class="card-text text-muted"></p>
                                </div>
                            </div>
                        </div> 
                <div class="flex">
                    <h5 class="display-4 text-center"> Weather </h5> 
                     <div class="container-fluid px-1 px-md-4 py-5 mx-auto" id="">
                                <div class="row d-flex justify-content-center px-10">
                                    <div class="card float-center" id="card">
                                        <h2 class="ml-auto mr-4 mt-3 mb-0 med-font">{{heroId.result3.name}}</h2>
                                        <p class="ml-auto mr-4 mb-0 med-font">{{heroId.result3.weather[0].main}}</p>
                                        <h1 class="ml-auto mr-4 large-font">{{ Math.round(heroId.result3.main.temp)-273 }}&#176;C</h1>
                                        <p class="ml-4 mb-4 med-font">{{dateBuilder()}}</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>    
            <div class="col-md-6 py-5">
                    <div class="container">
                        <h5 class="display-4 text-center"> Chatbox </h5> 
                    
                            <div  id="chatBox">
                                <div class="response my-5" v-for="(el,index) in chats" :key="el.user + index">
                                    <div id="AutoMessage">
                                        <strong>{{el.user}}</strong>
                                        <br>{{el.message}}
                                    </div>
                                </div>
                            </div>
                                <!-- <div  id="request"></div> -->
                                    <input @keyup.enter="sendMessage" v-model="chatMessage" class="w3-input" id="mesbox" type="text" placeholder="input here...">
                             </div>
                              
                
                   
                <div>
                </div>
            </div>
        </div>
    </main>

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
        },
        heroId (){
            return this.$store.state.heroId
        },
        image(){
            return this.$store.state.heroId.result2[0].image.url
        },
       
     
    

  },
      methods: {
          sendMessage(){
              this.$store.dispatch('sendMessage',this.chatMessage)
        },
         detailHero () {
            
                  this.$store.dispatch('detailHero', +this.$route.params.id)
          },
       dateBuilder (){
           let d = new Date()
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday"]
        let months = ["January","February","March","April","May","June", "July","August", "September","October","November","December"]

        let day = days[d.getDay()]
        let date = d.getDate()
        let month = months[d.getMonth()]
        let year = d.getFullYear()

        return `${day} ${date} ${month} ${year}`

       }
    },
    created(){
        this.detailHero()
        // this.setUsername()
    }
}
</script>

<style>





#card {
    background-image: url("https://i.imgur.com/dpqZJV5.jpg");
    background-size: cover;
    width: 600px;
    height: 350px;
    border-radius: 20px;
    box-shadow: 0px 8px 16px 4px #9E9E9E;
    margin-top: 50px;
    margin-bottom: 50px
}

.time-font {
    font-size: 50px;
    color: #fff;
}

.sm-font {
    font-size: 18px;
    color: #fff;
}

.med-font {
    font-size: 28px;
    color: #fff;
}

.large-font {
    font-size: 60px;
    color: #fff;
}

.chatBox{
	position: relative;
	margin: 50%;
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


