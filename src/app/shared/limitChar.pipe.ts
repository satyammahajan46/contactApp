import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'limitChar',
    pure: false
})
export class LimitChars implements PipeTransform {

    transform(value: string, maxChar?: number): any {
        //console.log("run");
        if(maxChar==null){
            let num = 0;
            if(value.length >= 15){
                return value.split('', 14).join('') + '...';
            }
            else{
                return value.split('', value.length).join('');
            }
            
        }
        else{
            if (value.length >= maxChar) {
                return value.split('', maxChar).join('') + '...';
            }
            else {
                return value.split('', value.length).join('');
            }
        }
        
    }

}


