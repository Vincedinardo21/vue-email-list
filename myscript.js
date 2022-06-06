const app = new Vue({
    el : "#app",
    data : {
        email : ""
    },
    mounted(){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((result) => {
            console.log(result);
            let risultato = result.data.response;
            console.log(risultato);
            this.email = risultato;
        });
    }
});