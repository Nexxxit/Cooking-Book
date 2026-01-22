"use client";

import { OnCloseProps } from "@/shared/types/modal";
import { Button, Form, Input } from "@heroui/react";
import { useState } from "react";

export default function RegisterForm({ onClose }: OnCloseProps) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log(formData);

        onClose();
    }

    return (
        <Form className="w-full flex flex-col gap-6" autoComplete="off" onSubmit={handleSubmit}>
            <Input
                aria-label="Email"
                isRequired
                name="email"
                label="Email"
                labelPlacement="outside"
                placeholder="Введите email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                validate={(value: string) => {
                    if (!value) return "Почта обязательна";
                    if (!validateEmail(value)) return "Некорректный email";
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
                label="Пароль"
                labelPlacement="outside"
                name="password"
                placeholder="Введите пароль"
                type="password"
                value={formData.password}
                onChange={(e) =>
                    setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
                validate={(value: string) => {
                    if (!value) return "Пароль обязателен";
                    if (value.length < 6) return "Пароль должен быть не менее 6 символов";
                    return null;
                }}
                classNames={{
                    inputWrapper: "bg-default-100",
                    input: "text-sm focus:outline-none"
                }}
            />

            <Input
                aria-label="confirmPassword"
                isRequired
                label="Подтвердите пароль"
                labelPlacement="outside"
                name="confirmPassword"
                placeholder="Подтвердите пароль"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                    setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))
                }
                validate={(value: string) => {
                    if (!value) return "Пароль для подтверждения обязателен";
                    if (value !== formData.password) return "Пароли не совпадают";
                    return null;
                }}
                classNames={{
                    inputWrapper: "bg-default-100",
                    input: "text-sm focus:outline-none"
                }}
            />

            <div className="flex gap-5 justify-center w-full items-center">
                <Button color="primary" type="submit">
                    Зарегистрироваться
                </Button>
                <Button type="button" variant="flat" onPress={onClose}>
                    Отмена
                </Button>
            </div>
        </Form>
    )
}