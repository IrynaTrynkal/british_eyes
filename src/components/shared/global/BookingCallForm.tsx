"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { FormInModalProps } from "@/types/modalProps";

import { ButtonAction } from "../ButtonAction";

const nameRegex =
    /^(?=(.*\S.*\S))[^\-\s][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻіІїЇґҐєЄа-яА-Я'"`\-\sʼ’]+$/;
const phoneRegex = /^[+\d\s-]+$/;

export const BookingCallForm = ({
    notificationHandler,
    className,
}: FormInModalProps) => {
    const t = useTranslations("Form");

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        phone: "",
    });
    const [loading, setLoading] = useState(false);
    const [focused, setFocused] = useState(false);
    const validate = () => {
        const newErrors: typeof errors = {
            name: "",
            phone: "",
        };
        let valid = true;

        if (!formData.name.trim()) {
            newErrors.name = t("nameNull");
            valid = false;
        } else if (!nameRegex.test(formData.name)) {
            ((newErrors.name = t("nameInvalid")), (valid = false));
        }

        const digitsOnly = formData.phone.replace(/\D/g, "");

        if (!formData.phone.trim()) {
            newErrors.phone = t("phoneNull");
            valid = false;
        } else if (!phoneRegex.test(formData.phone) || digitsOnly.length < 10) {
            newErrors.phone = t("phoneInvalid");
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    // TODO: const onSendData = async () => {
    //     const data = {
    //         name: formData.name,
    //         phone: formData.phone,
    //         age: formData.age,
    //         group: formData.group,
    //         online: formData.online,
    //         language: formData.language,
    //     };

    //     await axios.post("/api/application", data, {
    //         headers: { "Content-Type": "application/json" },
    //     });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;

        // TODO тимчасова заглушка замість реального onSendData
        const onSendData = async (): Promise<void> => {
            return;
        };

        try {
            setLoading(true);
            await notificationHandler(onSendData);
        } catch (error) {
            console.error("Відправка не вдалася:", error);
        } finally {
            setLoading(false);
        }

        setFormData({
            name: "",
            phone: "",
        });
    };

    const inputClass =
        "font-oswald tab:py-3 tab:px-5 bg-ivory placeholder:text-grey focus:bg-white-100  block w-full rounded border px-3 py-2 leading-none group-focus:outline-none";
    const errorClass =
        "text-error text-sm leading-none bg-ivory absolute bottom-[-18px] left-0 mt-1";

    return (
        <form
            onSubmit={handleSubmit}
            className="tab:flex-row tab:flex-wrap tab:justify-between prepc:gap-x-4 prepc:gap-y-8 flex flex-col gap-6"
        >
            <div className="group tab:w-[47%] pc:w-[318px] relative w-full">
                <label htmlFor="name" className="sr-only">
                    {t("name")}
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder={t("name")}
                    value={formData.name}
                    autoComplete="off"
                    onChange={e =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                    className={`${inputClass} ${formData.name ? "bg-white-100" : ""} ${errors.name ? "border-error bg-white-100" : "border-grey"}`}
                />
                {errors.name && <p className={errorClass}>{errors.name}</p>}
            </div>

            <div className="group tab:w-[47%] pc:w-[318px] relative w-full">
                <label htmlFor="phone" className="sr-only">
                    {t("phone")}
                </label>
                <input
                    type="tel"
                    id="phone"
                    placeholder={focused ? "380XXXXXXXXX" : t("phone")}
                    value={formData.phone}
                    onFocus={() => setFocused(true)}
                    onBlurCapture={() => setFocused(false)}
                    onChange={e =>
                        setFormData({ ...formData, phone: e.target.value })
                    }
                    className={`${inputClass} ${formData.phone ? "bg-white-100" : ""} ${errors.phone ? "border-error bg-white-100" : "border-grey"}`}
                    inputMode="numeric"
                    autoComplete="off"
                />
                {errors.phone && <p className={errorClass}>{errors.phone}</p>}
            </div>

            <div className="tab:flex tab:gap-6 prepc:gap-4 tab:justify-between w-full">
                <div
                    className={
                        "pc:text-right tab:mb-0 tab:mx-0 tab:w-[47%] pc:w-[318px] text-ivory pc:text-base pc:leading-5 mx-auto mb-8 flex max-w-[380px] gap-3 text-sm leading-4"
                    }
                >
                    <p>*</p> <p className="text-justify">{t("consent")}</p>
                </div>

                <div className="tab:justify-end tab:w-[47%] pc:w-[318px] flex justify-center">
                    <ButtonAction name={t("submit")} type="submit" />
                </div>
            </div>
        </form>
    );
};
