import { defineStore } from "pinia";

export const usePrdtStore=
    defineStore("product",{
        state:()=>({
            prdt:[],
            isLoading:false,
            errmsg:"",
            cart:[],
            keyword:"",
            selectedCategory:"全部",
            loaded:false        
        }),
        getters:{
            getPrdtById:(state)=>{
                return(id)=>{
                    return state.prdt.find(
                        p=>
                            p.id===Number(id)
                    )
                }
            },
            getPrdtByCategory:(state)=>{
                return(category)=>{
                    return state.prdt.filter(
                        p=>
                            p.category===category
                    )
                }
            }            
        },
        actions:{
        async fetchProduct() {

            //console.log(this.loaded)

            if(this.loaded){
                return 
            }

            this.isLoading = true
            this.errorMessage = ""

            try {

                const response =
                    await fetch("/data/products.json")

                if (!response.ok) {
                    throw new Error(
                        `HTTP ${response.status}`
                    )
                }

                this.prdt =
                    await response.json()

                    //console.log(this.prdt)


                this.loaded=true

                // this.product =
                //     this.products.find(
                //         p => p.id === Number(this.$route.params.id)
                //     ) || null

                // const productId=Number(this.$route.params.id)
                // this.product=this.products.find(p=>p.id===productId)



                    

            } catch (error) {

                console.error(error)

                this.errorMessage =
                    error.message

            } finally {

                this.isLoading = false
            }
        }            
        }
    })