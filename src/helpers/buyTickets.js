import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"


export const buyTickets = async (actualMovie, nTickets) => {
    const id = actualMovie.id
    const ticketsNow = actualMovie.tickets
    const tickets = ticketsNow - nTickets
    const docRef = doc(FirebaseDB, 'movies', id)
    await setDoc(docRef, { tickets: tickets }, { merge: true });

}