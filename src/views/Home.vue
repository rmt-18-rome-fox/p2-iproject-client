<template>
<div>
    <Navbar></Navbar>
    <div class="container">
        <!-- <LeftPanel></LeftPanel> -->


        <div class="middle-panel">


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