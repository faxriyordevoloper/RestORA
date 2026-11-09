
import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    const restaurants = await prisma.restaurants.findMany({
      select: {
        id: true,
        name: true,
        type: true,
        phone: true,
        address: true,
        created_at: true,
      },
      orderBy: { id: "desc" },
    });

    return NextResponse.json(
      restaurants.map((item) => ({
        ...item,
        id: item.id.toString(),
      }))
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Ma'lumotlarni olishda xatolik" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      restaurant,
      type,
      owner,
      phone,
      email,
      address,
      password,
    } = body;

    if (
      !restaurant || !type || !owner ||
      !phone || !email || !address || !password
    ) {
      return NextResponse.json(
        { error: "Barcha maydonlarni to'ldiring" },
        { status: 400 }
      );
    }

    if (typeof password !== "string" || password.length < 8) {
      return NextResponse.json(
        { error: "Parol kamida 8 ta belgidan iborat bo'lishi kerak" },
        { status: 400 }
      );
    }

    const normalizedEmail = String(email).trim().toLowerCase();

    const existing = await prisma.restaurants.findUnique({
      where: { email: normalizedEmail },
    });

    if (existing) {
      return NextResponse.json(
        { error: "Bu email avval ro'yxatdan o'tgan" },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const newRestaurant = await prisma.restaurants.create({
      data: {
        name: String(restaurant).trim(),
        type: String(type),
        owner: String(owner).trim(),
        phone: String(phone).trim(),
        email: normalizedEmail,
        address: String(address).trim(),
        password_hash: passwordHash,
      },
      select: {
        id: true,
        name: true,
        type: true,
        owner: true,
        phone: true,
        email: true,
        address: true,
        created_at: true,
      },
    });

    return NextResponse.json(
      {
        message: "Ro'yxatdan o'tish muvaffaqiyatli!",
        restaurant: {
          ...newRestaurant,
          id: newRestaurant.id.toString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);

    return NextResponse.json(
      { error: "Serverda xatolik yuz berdi" },
      { status: 500 }
    );
  }
}
