import { RoomList } from './../rooms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hinv-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.scss'],
})
export class RoomlistComponent implements OnInit {
  @Input() rooms: RoomList[] = [];

  //  @Output() roomSelected = new EventEmitter<RoomList>();
  @Output() selectedRoom = new EventEmitter<RoomList>();
  constructor() {}

  ngOnInit(): void {}

  roomSelected(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
