import { collection, doc, getDoc, setDoc } from "firebase/firestore/lite"
import { useSelector } from "react-redux"
import { FirebaseDB } from "../firebase/config"



export const buyTickets = async (actualMovie, seatsSelected) => {
    try {

        const id = actualMovie.id
        const docRef = await doc(FirebaseDB, 'movies', id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            const unavailableSeats = docSnap.data().unavailableSeats
            console.log(unavailableSeats)
            if (!unavailableSeats) { throw new Error('aas') }

            await setDoc(docRef, { unavailableSeats: [...unavailableSeats, ...seatsSelected] }, { merge: true });
            return { ok: true }
        } else {
            throw new Error('aa')
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }



}