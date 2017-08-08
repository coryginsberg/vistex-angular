import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getValue'
})

// Get the key of the key-value pair returned from the enums defining the resource filters in _resources-helpers.enum.ts
// Called in resources.component.html for industries, services, and solutions dropdown lists.
export class GetValuePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        const values = [];

        for (const enumMember in value) {
            if (value.hasOwnProperty(enumMember)) { // Makes sure value is actually in the list (see more: https://stackoverflow.com/q/1963102/890797)
                // This is annoying (thanks JS!). parseInt defaults to base-10 as of ES5 (which makes sense), but
                // not all browsers support this yet and not all browsers support leading zeros yet (used in octals),
                // which means that you still *must* define a radix (or base-#, if you will) even though this has
                // been documented since 2009! (This took WAY too long to find while searching for a fix online).
                // Anyways, this variable gets the integer that is tied to the enum position.
                const isValueProperty = parseInt(enumMember, 10) >= 0;

                // Push the value of the key-value pair to the array `values` iff the property is a valid number.
                if (isValueProperty) {
                    values.push( value[enumMember] );
                }
            }
        }
        return values;
    }
}
