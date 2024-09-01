import db from "@/lib/firestore";
import { collection, addDoc } from 'firebase/firestore';

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