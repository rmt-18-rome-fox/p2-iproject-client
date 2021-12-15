<template>
<div>
    <Navbar></Navbar>
    <div class="container">
        <!-- <LeftPanel></LeftPanel> -->


        <div class="middle-panel">

            <div class="story-section">

                <div class="story create">
                    <div class="dp-image">
                        <img src="../assets/images/dp.jpg" alt="Profile pic">
                    </div>
                    <span class="dp-container">
                        <i class="fa fa-plus"></i>
                    </span>
                    <span class="name">Create Story</span>
                </div>


                <div class="story">
                    <img src="../assets/images/model.jpg" alt="Anuska's story">
                    <div class="dp-container">
                        <img src="../assets/images/girl.jpg" alt="">
                    </div>
                    <p class="name">Anuska Sharma</p>
                </div>

                <div class="story">
                    <img src="../assets/images/boy.jpg" alt="Story image">
                    <span class="dp-container">
                        <img src="../assets/images/dp.jpg" alt="Profile pic">
                    </span>
                    <span class="name">Gaurav Gall</span>
                </div>

                <div class="story">
                    <img src="../assets/images/mountains.jpg" alt="Story image">
                    <span class="dp-container">
                        <img src="../assets/images/boy.jpg" alt="Profile pic">
                    </span>
                    <span class="name">Priyank Saksena</span>
                </div>

                <div class="story">
                    <img src="../assets/images/shoes.jpg" alt="Story image">
                    <span class="dp-container">
                        <img src="../assets/images/model.jpg" alt="Profile pic">
                    </span>
                    <span class="name">Pragati Adhikari</span>
                </div>
            </div>

            <Topics></Topics>
            
        </div>

        
        <!-- <RightPanel></RightPanel> -->
    </div>
</div>

    
</template>

<script>

import Navbar from  '../components/Navbar.vue'
import LeftPanel from '../components/LeftPanel.vue'
import RightPanel from '../components/RightPanel.vue'
import Topics from '../components/Topics.vue'
export default {
  name: "Home",
  components: {
    Navbar,
    LeftPanel,
    RightPanel,
    Topics,
  }
}
</script>

<style>

</style>