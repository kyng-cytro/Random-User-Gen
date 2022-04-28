const app = Vue.createApp({
    data () {
        return {
           fname: '',
           lname: '',
           gender: '',
           email: '',
           img: ''
        }
    },
    methods: {
        async getRandom(){
            const res = await fetch('https://randomuser.me/api/')
            const { results } = await res.json()
            this.fname = results[0].name.first,
            this.lname = results[0].name.last,
            this.gender = results[0].gender,
            this.email = results[0].email,
            this.img = results[0].picture.large
        }
    },
    async beforeMount() {
        const res = await fetch('https://randomuser.me/api/')          
        const { results } = await res.json()
        this.fname = results[0].name.first,
        this.lname = results[0].name.last,
        this.gender = results[0].gender,
        this.email = results[0].email,
        this.img = results[0].picture.large
    },
})
app.mount('#app')