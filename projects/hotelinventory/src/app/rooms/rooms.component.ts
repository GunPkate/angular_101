import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelsName = 'Hiltons';
  numbersOfRooms = 10;
  constructor() {}

  hideRooms = false;
  ngOnInit(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
