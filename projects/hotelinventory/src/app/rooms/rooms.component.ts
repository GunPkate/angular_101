import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RoomList, Rooms } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit {
  hotelsName = 'Hiltons';
  numbersOfRooms = 10;
  rooms: Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomsList: RoomList[] = [];
  selectedRoom!: RoomList;
  constructor() {}

  hideRooms = false;
  ngOnInit(): void {
    this.roomsList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amendities: 'Air Conditioner,Free WIFI, Kitchen, TV, Bathroom',
        price: 500,
        photos:
          'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        checkInTime: new Date('11-Nov-2021'),
        checkOutTime: new Date('12-Nov-2021'),
        rating: 5,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amendities: 'Air Conditioner,Free WIFI, Kitchen, TV, Bathroom',
        price: 1000,
        photos:
          'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        checkInTime: new Date('11-Nov-2021'),
        checkOutTime: new Date('12-Nov-2021'),
        rating: 4.77,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amendities: 'Air Conditioner,Free WIFI, Kitchen, TV, Bathroom',
        price: 1500,
        photos:
          'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        checkInTime: new Date('11-Nov-2021'),
        checkOutTime: new Date('12-Nov-2021'),
        rating: 4.819,
      },
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  roomSelected(room: RoomList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: this.roomsList.length+1,
      roomType: 'Private Suite',
      amendities: 'Air Conditioner,Free WIFI, Kitchen, TV, Bathroom',
      price: 1500,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 4.819,
    };

    // this.roomsList.push(room);
    this.roomsList = [...this.roomsList,room]
  }
}
