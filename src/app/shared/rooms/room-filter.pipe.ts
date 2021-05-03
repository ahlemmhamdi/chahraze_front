import { Pipe, PipeTransform } from '@angular/core';
import { Room } from './room.model';

@Pipe({
  name: 'roomFilter'
})
export class RoomFilterPipe implements PipeTransform {

  transform(rooms: Room[] | any, input: string): any {
    if (input) {
      return rooms.filter(
        (room: Room) => {
          return room.description.toLowerCase().indexOf(input) > -1 ||
            room.title.toLowerCase().indexOf(input) > -1 ||
            room.hotel.toLowerCase().indexOf(input) > -1;
        }
      )
    }
    return rooms;
  }

}


//