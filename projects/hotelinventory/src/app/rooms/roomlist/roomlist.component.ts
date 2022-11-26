import { RoomList } from './../rooms';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'hinv-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.scss'],
})
export class RoomlistComponent implements OnInit, OnChanges {
  @Input() rooms: RoomList[] = [];

  //  @Output() roomSelected = new EventEmitter<RoomList>();
  @Output() selectedRoom = new EventEmitter<RoomList>();
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}

  roomSelected(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
