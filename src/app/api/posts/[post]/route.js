import db from "@/lib/firestore";
import { collection, addDoc, getDocs, doc, getDoc } from 'firebase/firestore';

export async function POST(request) {
    try {
        const body = await request.json();
        console.log('body: ' + JSON.stringify(body));
        const docRef = await addDoc(collection(db, "posts"), {
            title: body.title,
            desc: body.desc,
            imgUrl: body.imgUrl,
            paragraphs: body.paragraphs,
        });
        console.log('body: ' + body);
        console.log('docRef: ' + docRef);

        return Response.json(docRef);

    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
export async function GET(request) {
    try {
        const docRef = doc(db, "posts", 'lAYdG3UWTuciFNDW1ydY');
    
        const docsSnap = await getDoc(docRef);
        return Response.json(docsSnap.data());
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}