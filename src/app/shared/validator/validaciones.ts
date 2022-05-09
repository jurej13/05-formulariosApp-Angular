import { FormControl } from "@angular/forms";

export const nombreApellidoPattern : string = '([a-zA-Z]+) ([a-zA-Z]+)'; //validacion para apellido y nombre
//toda las letras de a hasta z y A hasta Z
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const noPuedeSerStrider = (control : FormControl) =>{
    const valor : string = control.value?.trim().toLowerCase()
    if(valor==='strider'){
      return {
        noStrider:true //devolver un objeto es sinonimo de un error
      }
    }else{
      return null
    }
  }