// app/api/notify-maintenance/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  // Example logic you can expand later
  console.log("🔔 Weekly maintenance notification triggered!");
  
  return NextResponse.json({
    message: "Maintenance cron job executed successfully.",
    timestamp: new Date().toISOString(),
  });
}

