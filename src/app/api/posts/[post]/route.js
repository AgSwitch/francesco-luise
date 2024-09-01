import db from "@/lib/firestore";
import { collection, addDoc, getDocs, doc, getDoc, query, where } from 'firebase/firestore';

export async function POST(request) {
    try {
        const body = await request.json();

        const docRef = await addDoc(collection(db, "posts"), {
            title: body.title,
            desc: body.desc,
            imgUrl: body.imgUrl,
            paragraphs: body.paragraphs,
            slug: body.slug
        });


        return Response.json(docRef);

    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
export async function GET(request) {
    try {
        const {searchParams} = new URL(request.url);
        const slug = searchParams.get('slug');

        const collectionRef = collection(db, "posts");
        const q = query(collectionRef, where("slug", "==", slug));
        const snap = (await getDocs(q)).docs;
        return Response.json(snap[0].data());
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}