const app = Vue.createApp({
    data(){
        return {
            product: "sunglasses",
            quantity: 0,
            sale: true
        }
    }
})

const mountedApp = app.mount("#app");