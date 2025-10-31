import { NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"

// Support both NEXT_PUBLIC_ prefix and without (for server-side)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      name,
      company,
      email,
      phone,
      event_type,
      desired_date,
      number_of_people,
      project_details,
      locale,
    } = body || {}

    if (!name || !company || !email || !phone || !event_type || !desired_date) {
      return NextResponse.json({ 
        error: "Missing required fields",
        received: { name: !!name, company: !!company, email: !!email, phone: !!phone, event_type: !!event_type, desired_date: !!desired_date }
      }, { status: 400 })
    }

    if (!supabaseUrl || !serviceKey) {
      console.error("Missing Supabase environment variables")
      console.error("SUPABASE_URL:", supabaseUrl ? "✓ found" : "✗ missing")
      console.error("SERVICE_ROLE_KEY:", serviceKey ? "✓ found" : "✗ missing")
      return NextResponse.json({ 
        error: "Server configuration error",
        message: "Missing Supabase environment variables. Please check your .env.local file.",
        required: {
          "NEXT_PUBLIC_SUPABASE_URL or SUPABASE_URL": !!supabaseUrl,
          "SUPABASE_SERVICE_ROLE_KEY": !!serviceKey
        }
      }, { status: 500 })
    }

    const supabaseAdmin = createServerClient(supabaseUrl, serviceKey, {
      cookies: {
        getAll() { return [] },
        setAll() {},
      },
    })

    const { data, error } = await supabaseAdmin
      .from("reservations")
      .insert({
        name,
        company,
        email,
        phone,
        event_type,
        desired_date,
        number_of_people: number_of_people ? parseInt(String(number_of_people), 10) : null,
        project_details: project_details || null,
        locale: locale || null,
      })
      .select()

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: error.message, code: error.code }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (err: any) {
    console.error("API route error:", err)
    return NextResponse.json({ 
      error: err?.message || "Invalid request",
      details: process.env.NODE_ENV === 'development' ? err?.stack : undefined
    }, { status: 400 })
  }
}

