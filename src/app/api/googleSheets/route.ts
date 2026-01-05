import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        const res = await fetch(
            process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL!,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            }
        );

        let result;
        try {
            result = await res.json();
            console.log("Sheets response:", result);
        } catch {
            throw new Error("Invalid response from Google Sheets");
        }

        if (!res.ok || result?.success !== true) {
            throw new Error(result?.error || "Google Sheets error");
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("API error:", err);

        const message =
            err instanceof Error ? err.message : "Unknown server error";

        return NextResponse.json(
            { success: false, error: message },
            { status: 500 }
        );
    }
}
