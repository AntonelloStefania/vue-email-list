const {createApp} = Vue;

createApp({
data(){
    return {
        mailArray: []
    }
},
methods:{
    generateRandomMail(){
        for(let i=0; i<10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((mail)=>{
        this.mailArray.push(mail.data.response)
        console.log(this.mailArray)
        
        })}
    }
},
mounted(){
    this.generateRandomMail()
}
}).mount('#app')