import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { MemberRole } from "@prisma/client";
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function POST(req) {
  try {
    const { name, imageUrl } = await req.json();
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const server = await db.server.create({
      data: {
        profileId: profile.id,
        name,
        imageUrl,
        invitedCode: uuid(),
        members: {
          create: [
            {
              profileId: profile.id,
              role: MemberRole.ADMIN,
            },
          ],
        },
        channels: {
          create: [{ name: "general", profileId: profile.id }],
        },
      },
    });

    return NextResponse.json(server, { status: 200 });
  } catch (e) {
    console.log({ "[SERVERS_POST]": e });
    return new NextResponse("Internal Error", { status: 500 });
  }
}
