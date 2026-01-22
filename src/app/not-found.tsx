"use client";

import { Button } from "@heroui/button";
import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col gap-8 items-center justify-center">
            <div className="flex flex-col gap-2 items-center">
                <h1 className="text-8xl font-bold">404</h1>
                <h2 className="text-3xl font-semibold">Страница не найдена</h2>
            </div>

            <div>
                <Button as={Link} color="primary" variant="shadow" radius="md" href="/">
                    Вернуться на главную
                </Button>
            </div>
        </div>
    )
}