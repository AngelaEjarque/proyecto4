import { faker } from "@faker-js/faker";
import { BaseFactory } from "./BaseFactory";
import { Artists } from "../../models/Artist";

// -----------------------------------------------------------------------------

export class ArtistFactory extends BaseFactory<Artists> {
    private static generate(){
        const artist = new Artists();
            artist.portfolio = faker.image.urlLoremFlickr(), faker.image.urlLoremFlickr(), faker.image.urlLoremFlickr(); 
         
    
      return artist;
   }
   static createMany (count = 1){

    const generated = []

    for (let i = 0; i < count; i++) {
        const item = this.generate();
        generated.push(item);   

    } return generated;
}
}
