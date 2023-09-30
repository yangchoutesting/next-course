import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 0, name: "milk", price: 29.5 },
        { id: 1, name: "cheese", price: 49.5 },
        { id: 2, name: "juice", price: 19.5 },
    ]);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) { status: 201 });
}

        return NextResponse.json({ error: validation.error.errors }, { status: 400 });
    }
    return NextResponse.json({ id: 10, name: body.name, price: body.price }, {