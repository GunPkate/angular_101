export interface Rooms {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface RoomList {
  roomNumber: number;
  roomType: string;
  amendities: string;
  price: number;
  photos: string;
  checkInTime: Date;
  checkOutTime: Date;
  rating?: number;
}
