import {Pipe, PipeTransform} from '@angular/core';
import {Recipe} from './recipe.model';

@Pipe({
  name: "ratedness",
  pure: false
})


export class RatednessPipe implements PipeTransform {
  transform(input: Recipe[], desiredRatedness) {
    var output: Recipe[] = [];
    if(desiredRatedness === "1") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].rating === 1) {
          output.push(input[i]);
        }
      }
    return output;
    } else if(desiredRatedness === "2") {
      for (var i = 0; i < input.length; i++) {
       if (input[i].rating === 2) {
         output.push(input[i]);
     }
    }
    return output;
    } else if(desiredRatedness === "3") {
    for (var i = 0; i < input.length; i++) {
    if (input[i].rating === 3) {
      output.push(input[i]);
    }
    }
    return output;
    } else {
    return input;
    }
  }
}
