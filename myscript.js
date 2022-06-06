const app = new Vue({
    el : "#app",
    data : {
        emails : [],
    },
    mounted(){
        for(let i = 0; i < 10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
            let risultato = result.data.response;
            console.log(risultato);
            //debugger;
            //this.emails = risultato;
            this.emails.push(risultato);        
        });
        }
        console.log(this.emails);            
    }
});