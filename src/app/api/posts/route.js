import db from "@/lib/firestore";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const searchParams = url.searchParams; 
    console.log(searchParams);
    const limitNumber = +searchParams.get('limit');
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, limit(limitNumber));

    const snap = await getDocs(q);
    const posts = snap.docs.map((doc) => doc.data());

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}