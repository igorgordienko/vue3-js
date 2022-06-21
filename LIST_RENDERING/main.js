const app = Vue.createApp({
    data(){
        return {
            users: [
                {
                    id: 567,
                    name: "alice",
                    profession: "developer"
                },
                {
                    id: 568,
                    name: "bob",
                    profession: "manager"
                },
                {
                    id: 569,
                    name: "batman",
                    profession: "designer"
                },
                {
                    id: 570,
                    name: "superman",
                    profession: "developer"
                }
            ]
        }
    }
});

const mountedApp = app.mount('#app');
