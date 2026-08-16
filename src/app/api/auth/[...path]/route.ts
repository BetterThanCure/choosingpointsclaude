import { NextResponse } from "next/server";
import { auth } from "@/lib/auth/server";

const notConfigured = async () =>
  NextResponse.json(
    { error: "Neon Auth is not configured yet." },
    { status: 503 },
  );

const handlers = auth?.handler();

export const GET = handlers?.GET ?? notConfigured;
export const POST = handlers?.POST ?? notConfigured;
export const PUT = handlers?.PUT ?? notConfigured;
export const DELETE = handlers?.DELETE ?? notConfigured;
export const PATCH = handlers?.PATCH ?? notConfigured;
