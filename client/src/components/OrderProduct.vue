<template>
    <transition name="bounce" mode="out-in">
        <div class="product-wrap"
            @mousemove="handleMouseMove"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
        ref="product">
        <div class="product"
            :style="cardStyle">
                <div class="product-bg" :style="[cardBgTransform, cardBgImage]"></div>
                <div class="product-info w-100">
                <h1>{{ product.name }}</h1>
                <p>{{ product.summary }}</p>
                <h3>{{ product.price }}</h3>
            </div>
        </div>
        </div>
    </transition>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Swal from "sweetalert2"

export default {
    name: "OrderProduct",
    props: [`product`, `dataImage`],
    mounted() {
        this.width = this.$refs.product.offsetWidth;
        this.height = this.$refs.product.offsetHeight;
    },
    data(){
        return {
            width: 0,
            height: 0,
            mouseX: 0,
            mouseY: 0,
            mouseLeaveDelay: null 
        }
    },
    methods: {
        ...mapActions(["addProductToOrder", "orderData"]),
        onSinglePage(id){
            this.$router.push({ path: `/single-mov/${id}`})
        },
          async addProduct(id){
            try {

                await this.addProductToOrder(id)

                        if(this.allError.msg) throw { err: this.allError }
                if (this.successAddProduct.text) {
                    const success = `Hi, ${this.successAddProduct.text}`
                    this.alertSuccess(success)
                    this.$router.push("/adopt-list");
                } else {
                    this.$router.push("/adopt-list");
                }
                
            } catch (error) {
                this.alertError(error)
            }
            
        },   
        handleMouseMove(e) {
            this.mouseX = e.pageX - this.$refs.product.offsetLeft - this.width / 2;
            this.mouseY = e.pageY - this.$refs.product.offsetTop - this.height / 2;
        },
        handleMouseEnter() {
            clearTimeout(this.mouseLeaveDelay);
        },
        handleMouseLeave() {
            this.mouseLeaveDelay = setTimeout(() => {
                this.mouseX = 0;
                this.mouseY = 0;
            }, 500);
        },  
        alertSuccess(string){
            Swal.fire({
                position: "top-end",
                text: `${string}`,
                width: 300,
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
            })
        }, 
        alertError(error){
            Swal.fire({
                title: `Oops...`,
                icon: `info`,
                text: `${error.err.msg}`,
                width: 600,
                padding: '3em',
                background: '#fff url(https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif)',
                footer: `Status: ${error.err.status}`,
            })
        },
    },
    computed: {
        ...mapState(["successAddProduct","allError"]),
        mousePX() {
            return this.mouseX / this.width;
        },
        mousePY() {
            return this.mouseY / this.height;
        },
        cardStyle() {
            const rX = this.mousePX * 5;
            const rY = this.mousePY * -5;
            return {
                transform: `rotateY(${rX}deg) rotateX(${rY}deg)` };
        },
        cardBgTransform() {
            const tX = this.mousePX * -20;
            const tY = this.mousePY * -20;
            return {
                transform: `translateX(${tX}px) translateY(${tY}px)` };
        },
        cardBgImage() {
            return {
                backgroundImage: `url(${this.product.imgUrl})` };
        }
    }
}
</script>

<style>

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.product-wrap {
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
}
.product-wrap:hover .product-info {
  transform: translateY(0);
}
.product-wrap:hover .product-info p {
  opacity: 1;
}
.product-wrap:hover .product-info, .product-wrap:hover .product-info p {
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}
.product-wrap:hover .product-info:after {
  transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 1;
  transform: translateY(0);
}
.product-wrap:hover .product-bg {
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 0.8;
}
.product-wrap:hover .product {
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: rgba(255, 255, 255, 0.2) 0 0 40px 5px, white 0 0 0 1px, rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px, inset white 0 0 0 6px;
}

.product {
  position: relative;
  flex: 0 0 240px;
  width: 240px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px, inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.product-bg {
  opacity: 0.5;
  position: absolute;
  /* top: -20px;
  left: -20px; */
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95), opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
}

.product-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.product-info p {
  opacity: 0;
  text-shadow: black 0 2px 3px;
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.product-info * {
  position: relative;
  z-index: 1;
}
.product-info:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
  background-blend-mode: overlay;
  opacity: 0;
  transform: translateY(100%);
  transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.product-info h1 {
  font-family: "Playfair Display";
  font-size: 36px;
  font-weight: 700;
  text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
}

</style>