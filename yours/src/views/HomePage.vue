<template>
  <section class="h-100 w-100 bg-white" style="box-sizing: border-box">
    <div class="content-2-1 container-xxl mx-auto p-0 position-relative" style="font-family: 'Poppins', sans-serif">
      <CardList></CardList>
    </div>
  </section>
</template>

<script>
import CardList from "../components/CardList.vue";
export default {
  name: "HomePage",
  components: {
    CardList,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.content-2-1 .btn:focus,
.content-2-1 .btn:active {
  outline: none !important;
}

.content-2-1 .title-text {
  padding-top: 5rem;
  margin-bottom: 3rem;
}

.content-2-1 .text-title {
  font: 600 2.25rem/2.5rem Poppins, sans-serif;
  color: #121212;
  margin-bottom: 0.625rem;
}

.content-2-1 .text-caption {
  color: #121212;
  font-weight: 300;
}

.content-2-1 .column {
  padding: 2rem 2.25rem;
}

.content-2-1 .icon {
  margin-bottom: 1.5rem;
}

.content-2-1 .icon-title {
  font: 500 1.5rem/2rem Poppins, sans-serif;
  margin-bottom: 0.625rem;
  color: #121212;
}

.content-2-1 .icon-caption {
  font: 400 1rem/1.625 Poppins, sans-serif;
  letter-spacing: 0.025em;
  color: #565656;
}

.content-2-1 .card-block {
  padding: 1rem 1rem 5rem;
}

.content-2-1 .card {
  padding: 1.75rem;
  background-color: #fff7f4;
  border-radius: 0.75rem;
  border: 1px solid #ff7c57;
}

.content-2-1 .card-title {
  font: 600 1.5rem/2rem Poppins, sans-serif;
  margin-bottom: 0.625rem;
  color: #000000;
}

.content-2-1 .card-caption {
  font: 300 1rem/1.5rem Poppins, sans-serif;
  color: #565656;
  letter-spacing: 0.025em;
  margin-bottom: 0;
}

.content-2-1 .btn-card {
  font: 700 1rem/1.5rem Poppins, sans-serif;
  background-color: #ff7c57;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  border-radius: 0.75rem;
  margin-bottom: 1.25rem;
}

.content-2-1 .btn-card:hover {
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.content-2-1 .btn-outline {
  font: 400 1rem/1.5rem Poppins, sans-serif;
  color: #979797;
  border: 1px solid #979797;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  border-radius: 0.75rem;
}

.content-2-1 .btn-outline:hover {
  border: 1px solid #ff7c57;
  color: #ff7c57;
}

.content-2-1 .card-text {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.content-2-1 .grid-padding {
  padding: 0rem 1rem 3rem;
}

@media (min-width: 576px) {
  .content-2-1 .grid-padding {
    padding: 0rem 2rem 3rem;
  }

  .content-2-1 .card-block {
    padding: 3rem 2rem 5rem;
  }
}

@media (min-width: 768px) {
  .content-2-1 .grid-padding {
    padding: 0rem 4rem 3rem;
  }

  .content-2-1 .card-block {
    padding: 3rem 4rem 5rem;
  }
}

@media (min-width: 992px) {
  .content-2-1 .grid-padding {
    padding: 1rem 6rem 3rem;
  }

  .content-2-1 .card-block {
    padding: 3rem 6rem 5rem;
  }

  .content-2-1 .column {
    padding: 0rem 2.25rem;
  }
}

@media (min-width: 1200px) {
  .content-2-1 .grid-padding {
    padding: 1rem 10rem 3rem;
  }

  .content-2-1 .card-block {
    padding: 3rem 6rem 5rem;
  }

  .content-2-1 .card-btn-space {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .content-2-1 .btn-outline,
  .content-2-1 .btn-card {
    width: 95%;
    float: right;
  }
}

@media (max-width: 980px) {
  .content-2-1 .card-btn-space {
    width: 100%;
  }
}
</style>
