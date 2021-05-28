import Axios from 'axios'

    export async function registedProduct (data){
            try {
                const response = await Axios({
                    method: 'POST',
                    url: 'http://localhost:3001/usuariosWeb',
                    data: data
                })
                return response
            } catch (error) {
                
            }

        }
        
    export async function getProduct (){
        try {
            const response = await Axios({
                method: 'POST',
                url: 'http://localhost:3001/usuariosWeb',
            })
            return response
        } catch (error) {
            
        }

    }