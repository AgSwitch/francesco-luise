import db from "@/lib/firestore";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const config = searchParams.get('config');
    const docRef = doc(db, "configs", config);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return NextResponse.json({ data: docSnap.data() }, { status: 200 });
    } else if (!docSnap.exists) {
        return NextResponse.json({ error: "No such document!" }, { status: 404 });
    } else {
        return NextResponse.json({ error: "Error getting document:" }, { status: 500 });
    }
}

export async function PUT(request) {
    const { searchParams } = new URL(request.url);
    const isActive = searchParams.get('isActive');
    const config = searchParams.get('config');

    const docRef = doc(db, "configs", config);

    try {
        await updateDoc(docRef, {
            isActive: isActive === 'true' ? true : false
        });

        return NextResponse.json({ message: "Cofig updated Successfully"  }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Error updating document:" }, { status: 500 });
    }

}