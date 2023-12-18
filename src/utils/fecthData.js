
export async function fecthData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    
     if (res.status === 200) {
       return await res.json()
     }else{
      throw new Error('Error al cargar los datos')
     }
     
  }
