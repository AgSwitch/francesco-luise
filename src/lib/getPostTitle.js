import { collection, getDocs, query, where } from 'firebase/firestore';
import db from "@/lib/firestore";

export async function getPostTitle(slug) {
  try {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, where("slug", "==", slug));
    const snap = await getDocs(q);

    if (!snap.empty) {
      const post = snap.docs[0].data();
      return post.title;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}
