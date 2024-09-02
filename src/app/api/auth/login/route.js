import { auth } from "@/lib/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NextResponse } from "next/server";

export async function POST(request,response) {

    try {
        const { email, password } = await request.json();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        return NextResponse.json({ message: 'User logged in' }, { status: 200 })
        //return NextResponse.json({ message: 'Invalid credentials' }, { status: 403 })
    } catch (error) {
        if (error.code === 'auth/invalid-credential') {
            return NextResponse.json({ message: 'Invalid credential' }, { status: 403 })
        }
        return NextResponse.json({ message: error }, { status: 500 })

        //     status: 500,
        // }));
    }


}