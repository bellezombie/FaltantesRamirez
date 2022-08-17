import b from '../FaltantesRamirez/src/Components/ItemL/b.jpg'
import bs from '../FaltantesRamirez/src/Components/ItemL/bs.jpg'
import at from '../FaltantesRamirez/src/Components/ItemL/at.jpg'

const productHardcore = [
    {id: 0, name: 'Blur', image:b ,price:21100, idCaT: 'Bpop', stock: 10},
    {id: 1, name: 'Aphex Twin', image: at ,price:15000, idCaT: 'Atechno', stock: 1},
    {id: 2, name: 'Black Sabbath', image:bs ,price:12000, idCaT: 'Hmetal', stock:5},
    {id: 3, name: 'vinilo 4', image:b ,price:10000, idCaT: 'Bpop', stock:20},
    {id: 4, name: 'vinilo 5', image:at ,price:11100, idCaT: 'Bpop', stock:3},
    {id: 5, name: 'Blur 2', image:b ,price:21100, idCaT: 'Bpop', stock:100},
    {id: 6, name: 'Aphex Twin 2', image: at ,price:15000, idCaT: 'Atechno', stock:369},
    {id: 7, name: 'Black Sabbath 2', image:bs ,price:12000, idCaT: 'Hmetal', stock:45},
    {id: 8, name: 'vinilo 6', image:b ,price:10000, idCaT: 'Bpop', stock:6},
    {id: 9, name: 'vinilo 7', image:bs ,price:11100, idCaT: 'Bpop', stock:9},
    ];

    export const getPhardcore = () =>{
        return new Promise((resolve, reject) =>{
                  resolve(productHardcore)           
    })
    }

    export const getPhardcoreById = (idP) =>{
        return new Promise((resolve, reject) =>{        
                resolve(productHardcore.find(catego => catego.id === idP))  
        })
    }

    export const getPhardcoreByCat = (idCaT) =>{
        return new Promise((resolve, reject) =>{
                resolve(productHardcore.filter(cat => cat.cat === idCaT)) 
        })
    }