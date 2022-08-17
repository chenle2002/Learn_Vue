export const mixin = {
    methods:{
        showName(){
            alert(this.name)
        }
    },
    mounted() {
        console.log("123")
    }
}
export const mixin2 = {
    data(){
        return{
            x:2,
            y:10
        }
    }
}
