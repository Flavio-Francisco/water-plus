


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
export function formatDateGrafic(date :Date): string {
    
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // January is 0!
  //const year = date.getUTCFullYear();

  return `${day}/${month}`;
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

export function formatEletro(dataString: string): number {
    
  const partes = dataString.split('/');

  const data = new Date(parseInt(partes[2]), parseInt(partes[1]) - 1, parseInt(partes[0]));
  return data.getDate()+1;
}
export function formatMonth(date :Date): string {
    
  //const day = String(date.getUTCDate()).padStart(2, '0');
const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // January is 0!
  const year = date.getUTCFullYear();

  return `${ month }/${year}`;
}  
  
  