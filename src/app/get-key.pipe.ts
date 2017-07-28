import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getKey'
})
export class GetKeyPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        const keys = [];

        for (const enumMember in value) {
            if (value.hasOwnProperty(enumMember)) {
                const isValueProperty = parseInt(enumMember, 10) >= 0;

                if (isValueProperty) {
                    keys.push( value[enumMember] );
                }
            }
        }
        return keys;
    }
}
