<template>
  <div class="home">
    <Navbar />
    <BookingComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar.vue";
import BookingComponent from "@/components/booking.vue";
BookingComponent
export default {
  name: "Bookings",
  components: {
    Navbar,
    BookingComponent,
  },
};
</script>
