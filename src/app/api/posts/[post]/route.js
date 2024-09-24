import db from "@/lib/firestore";
import { collection, addDoc, getDocs, doc, getDoc, query, where, deleteDoc, updateDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request) {
    try {
        const body = await request.json();

        const docRef = await addDoc(collection(db, "posts"), {
            title: body.title,
            desc: body.desc,
            imgUrl: body.imgUrl,
            paragraphs: body.paragraphs,
            slug: body.slug,
            createdAt: serverTimestamp()
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


export async function DELETE(request) {
    try {
      const url = new URL(request.url);
      const searchParams = url.searchParams;
      const slug = searchParams.get('slug');
  
      if (!slug) {
        return new Response(JSON.stringify({ error: "Slug is required" }), { status: 400 });
      }
  
      const collectionRef = collection(db, "posts");
      
      const q = query(collectionRef, where("slug", "==", slug));
      
      const snap = await getDocs(q);
  
      if (snap.empty) {
        return new Response(JSON.stringify({ error: "Post not found" }), { status: 404 });
      }
  
      const docToDelete = snap.docs[0];
      const docRef = doc(db, "posts", docToDelete.id);
  
      await deleteDoc(docRef);
  
      return new Response(JSON.stringify({ message: "Post deleted successfully" }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }
    
  export async function PUT(request) {
      try {
          const body = await request.json();
          const originalSlug = body.originalSlug;
  
          if (!originalSlug) {
              return new Response(JSON.stringify({ error: "Original slug is required" }), { status: 400 });
          }
  
          const collectionRef = collection(db, "posts");
          const q = query(collectionRef, where("slug", "==", originalSlug));
          const snap = await getDocs(q);
  
          if (snap.empty) {
              return new Response(JSON.stringify({ error: "Post not found" }), { status: 404 });
          }
  
          const docToUpdate = snap.docs[0];
          const docRef = doc(db, "posts", docToUpdate.id);
  
          await updateDoc(docRef, {
              title: body.title,
              desc: body.desc,
              imgUrl: body.imgUrl,
              paragraphs: body.paragraphs,
              slug: body.originalSlug,
          });
  
          return new Response(JSON.stringify({ message: "Post updated successfully" }), { status: 200 });
      } catch (error) {
          return new Response(JSON.stringify({ error: error.message }), { status: 500 });
      }
  }
  