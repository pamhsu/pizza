import { defineStore } from "pinia";

export const useCartStore=
    defineStore("cart",{
        state:()=>({
            cart:JSON.parse(localStorage.getItem("cart"))||[]
        }),
        getters:{
            totalqty(state){
                return state.cart.reduce((total,item)=>total+item.qty,0)
            },
            totalprice(state){
                return state.cart.reduce((total,item)=>total+item.qty * item.price,0)
            },
            totalItems(state){
                return state.cart.length
            },
            isEmpty(state){
                return state.cart.length===0
            }
        },
        actions:{
            addToCart(prdt){
                const exitem= this.cart.find(item=>item.id===prdt.id)

                if(exitem){
                    exitem.qty++
                }else{
                    this.cart.push({
                        ...prdt,
                        qty:1
                    })
                }

                this.savecart()
                //console.log(this.cart)
            },
            savecart(){
                localStorage.setItem("cart",JSON.stringify(this.cart))
            },
            changqty(id,v1){
                const item=this.cart.find(item=>item.id===id)
                if(!item){
                    return 
                }
                item.qty +=v1
                if(item.qty<=0){
                    this.removeFromCart(id)    
                    return 
                }
                this.savecart()
            },
            removeFromCart(id){
                this.cart=this.cart.filter(item=>item.id!==id)
                this.savecart()
            },
            clearcart(){
                this.cart=[]
                this.savecart()
            }
        }
    })