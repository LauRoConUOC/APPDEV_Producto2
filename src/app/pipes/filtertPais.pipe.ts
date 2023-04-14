import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterPais'
})
export class FiltroPais implements PipeTransform {

    transform(value: any, arg: any): any {
        const resultActor = [];
        for(const actor of value){
            if(actor.nacionalidad.indexOf(arg) > -1){
            resultActor.push(actor);
            }
        }
        return resultActor;
    }
    }
    