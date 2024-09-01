import db from "@/lib/firestore";
import { collection, getDocs, query } from "firebase/firestore";


export async function GET(request) {
    try {
        const collectionRef = collection(db, "posts");
        const q = query(collectionRef);
        const snap = (await getDocs(q)).docs

        const posts =  snap.map((doc) => {
            return doc.data();
        });
        return new Response(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}