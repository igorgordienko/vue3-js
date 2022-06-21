const app =Vue.createApp({
    data() {
        return {
            message: "Hello World!",
            num: 5,
            img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F03%2FGettyImages-1177709564.jpg",
        }
    }
})

const mountedApp = app.mount("#app");