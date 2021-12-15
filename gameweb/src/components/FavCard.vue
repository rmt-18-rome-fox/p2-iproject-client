<template>

    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <!-- Card-->
      <div class="card shadow-sm border-0 rounded" style="padding:5px;margin:10px">
        <div class="card-body p-0"><img :src="game.Game.thumbnail" style="width:220px;">
          <div class="p-4">
            <h5 class="mb-0">{{game.Game.title}}</h5>
            <p class="small text-muted"> Release Date : {{game.Game.release_date}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'FavCard',
 props: ['game']
}
</script>

<style>

</style>