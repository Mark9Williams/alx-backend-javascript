// Import ClassRoom from 0-classroom.js
import ClassRoom from "./0-classroom.js";

export default function initializeRooms() {
    // Return an array of three classrooms with the sizes 19, 20, and 34
    return [
        new ClassRoom(19),
        new ClassRoom(20),
        new ClassRoom(34),
    ];
}