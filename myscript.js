const app = new Vue({
    el : "#app",
    data : {
        emails : [
            {
                email : "",
            }
        ],
    },
    mounted(){
        for(let i = 0; i < 9; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
            let risultato = result.data.response;
            console.log(risultato);
            this.emails.email = risultato;
            this.emails.push(risultato);        
        });
        }
        console.log(this.emails);            
    }
});