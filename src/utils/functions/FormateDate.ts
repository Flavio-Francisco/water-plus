


export function getCurrentDate() {
    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const date = new Date();
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day}   de   ${month}   de  ${year}`;
  }


  export function getCity() {
   
  }
  
  
 export function formatDate(date :Date): string {
    
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // January is 0!
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
}

export function formatDateResevatorir(date :Date): string {
    
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // January is 0!
  const year = date.getUTCFullYear();

  return `${year}-${month}-${day}`;
}
export function formatTable(date :Date): string {
    
  const day = String(date.getUTCMonth() + 2).padStart(2, '0'); // January is 0!

  return `${day}`;
}
export function formatMonth(date :Date): string {
    
  //const day = String(date.getUTCDate()).padStart(2, '0');
const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // January is 0!
  const year = date.getUTCFullYear();

  return `${ month }/${year}`;
}  
  
  