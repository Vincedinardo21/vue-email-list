const app = new Vue({
    el : "#app",
    data : {
        email : ""
    },
    mounted(){
        for(let i = 0; i < 10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
            let risultato = result.data.response;
            console.log(risultato);
            this.email = risultato;
        });
        }
        
    }
});