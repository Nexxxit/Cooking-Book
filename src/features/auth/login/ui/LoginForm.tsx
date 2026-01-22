"use client";

import { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import { OnCloseProps } from "@/shared/types/modal";

export default function LoginForm({ onClose }: OnCloseProps) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log(formData);

        onClose();
    }

    return (
        <Form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
            <Input
                aria-label="Email"
                isRequired
                name="email"
                placeholder="Введите email"
                type="email"
                label="Email"
                labelPlacement="outside"
                value={formData.email}
                onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                validate={(value: string) => {
                    if (!value) return "Почта обязательна";
                    return null;
                }}
                classNames={{
                    inputWrapper: "bg-default-100",
                    input: "text-sm focus:outline-none"
                }}
            />

            <Input
                aria-label="Password"
                isRequired
                name="password"
                label="Пароль"
                labelPlacement="outside"
                placeholder="Введите пароль"
                type="password"
                value={formData.password}
                onChange={(e) =>
                    setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
                validate={(value: string) => {
                    if (!value) return "Пароль обязателен";
                    return null;
                }}
                classNames={{
                    inputWrapper: "bg-default-100",
                    input: "text-sm focus:outline-none"
                }}
            />

            <div className="flex gap-5 items-center justify-center w-full">
                <Button color="primary" type="submit">
                    Войти
                </Button>
                <Button type="button" variant="flat" onPress={onClose}>
                    Отмена
                </Button>
            </div>
        </Form>
    )
}