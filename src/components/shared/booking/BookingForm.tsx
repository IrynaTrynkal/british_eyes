"use client";
import { format } from "date-fns";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import { LocaleType } from "@/types/LocaleType";

import { ButtonAction } from "../ButtonAction";
import { IconDrag } from "../icons/IconDrag";
import { CustomSelect } from "./CustomSelect";
import DateInput from "./DateInput";

const nameRegex =
    /^(?=(.*\S.*\S))[^\-\s][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻіІїЇґҐєЄа-яА-Я'"`\-\sʼ’]+$/;
const phoneRegex = /^\+?380\d{9}$/;

export const BookingForm = () => {
    const t = useTranslations("Form");
    const locale = useLocale();
    const topicOptions = [
        { value: "Діагностика зору", label: t("vision-diagnostics") },
        { value: "Лікування катаракти", label: t("cataract-treatment") },
        { value: "Лазерна корекція зору", label: t("laser-vision-correction") },
        { value: "Інше", label: t("other") },
    ];

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        date: "",
        topic: "",
        comment: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        topic: "",
        comment: "",
    });
    const [loading, setLoading] = useState(false);
    const [focused, setFocused] = useState(false);
    const validate = () => {
        const newErrors: typeof errors = {
            name: "",
            phone: "",
            topic: "",
            comment: "",
        };
        let valid = true;

        if (!formData.name.trim()) {
            newErrors.name = t("nameNull");
            valid = false;
        } else if (!nameRegex.test(formData.name)) {
            ((newErrors.name = t("nameInvalid")), (valid = false));
        }

        if (!formData.phone.trim()) {
            newErrors.phone = t("phoneNull");
            valid = false;
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = t("phoneInvalid");
            valid = false;
        }

        if (!formData.topic) {
            newErrors.topic = t("topicNull");
            valid = false;
        }
        if (formData.comment.length > 300) {
            newErrors.comment = t("messegeInvalid");
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;

        console.log(formData);

        const formattedData = {
            ...formData,
            date: formData.date ? format(formData.date, "dd.MM.yyyy") : "",
        };
        console.log("🚀 ~ handleSubmit ~ formattedData:", formattedData);

        // const onSendData = async () => {
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

        setFormData({
            name: "",
            surname: "",
            email: "",
            phone: "",
            date: "",
            topic: "",
            comment: "",
        });
    };

    //     try {
    //         setLoading(true);
    //         await notificationHandler(onSendData);
    //     } catch (error) {
    //         console.error("Відправка не вдалася:", error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    const inputClass =
        "font-oswald tab:py-3 tab:px-5 placeholder:text-grey focus:bg-white-100  block w-full rounded border px-3 py-2 leading-none group-focus:outline-none";
    const errorClass =
        "text-error text-sm leading-none absolute bottom-[-18px] left-0 mt-1";

    return (
        <div className="bg-ivory tab:max-w-[1044px] tab:w-[90%] pc:px-5 pc:pt-5 pc:pb-[38px] mx-auto -mt-1 w-full max-w-[420px] rounded-sm px-4 py-8">
            <div className="pc:flex pc:justify-between pc:items-end pc:mb-6">
                <h2 className="font-oswald pc:text-2xl pc:leading-7 pc:mb-0 mb-4 text-center text-lg leading-5 font-medium uppercase">
                    {t("title")}
                </h2>
                <p className="pc:w-[318px] pc:mb-0 mb-4 leading-5">
                    “<span className="text-error">*</span>” {t("required")}
                </p>
            </div>
            <form
                onSubmit={handleSubmit}
                className="tab:flex-row tab:flex-wrap pc:gap-x-[22px] pc:gap-y-[38px] flex flex-col gap-6"
            >
                <div className="group tab:w-[48%] pc:w-[318px] relative w-full">
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
                <div className="group tab:w-[48%] pc:w-[318px] relative w-full">
                    <label htmlFor="surname" className="sr-only">
                        {t("surname")}
                    </label>
                    <input
                        type="text"
                        id="surname"
                        placeholder={t("surname")}
                        value={formData.surname}
                        onChange={e =>
                            setFormData({
                                ...formData,
                                surname: e.target.value,
                            })
                        }
                        className={`border-grey ${inputClass} ${formData.surname ? "bg-white-100" : ""}`}
                    />
                </div>
                <div className="group tab:w-[48%] pc:w-[318px] relative w-full">
                    <label htmlFor="email" className="sr-only">
                        {t("email")}
                    </label>
                    <input
                        type="text"
                        id="email"
                        placeholder={t("email")}
                        value={formData.email}
                        autoComplete="off"
                        onChange={e =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        className={`border-grey ${inputClass} ${formData.email ? "bg-white-100" : ""}`}
                    />
                </div>
                <div className="group tab:w-[48%] pc:w-[318px] relative w-full">
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
                    {errors.phone && (
                        <p className={errorClass}>{errors.phone}</p>
                    )}
                </div>
                <DateInput
                    locale={locale as LocaleType}
                    value={formData.date}
                    onChange={date => setFormData({ ...formData, date })}
                />
                <div className="group tab:w-[48%] pc:w-[318px] relative w-full">
                    <CustomSelect
                        id="topic"
                        value={formData.topic}
                        onChange={value =>
                            setFormData({ ...formData, topic: value })
                        }
                        options={topicOptions}
                        placeholder={t("topic")}
                        className={` ${inputClass} tab:h-[50px] h-[41.5px] ${formData.topic ? "bg-white-100 text-black" : "text-grey"} ${errors.topic ? "border-error bg-white-100" : "border-grey"}`}
                    />
                </div>
                <div className="group tab:w-[48%] pc:w-[660px] relative">
                    <label htmlFor="comment" className="sr-only">
                        {t("messege")}
                    </label>
                    <textarea
                        id="comment"
                        placeholder={t("messege")}
                        maxLength={300}
                        value={formData.comment}
                        onChange={e =>
                            setFormData({
                                ...formData,
                                comment: e.target.value,
                            })
                        }
                        className={`${inputClass} tab:min-h-full min-h-[68px] resize-y ${formData.comment ? "bg-white-100" : ""} ${errors.comment ? "border-error bg-white-100" : "border-grey"}`}
                    />
                    <IconDrag className="text-grey tab:hidden pointer-events-none absolute right-1 bottom-1" />
                    {errors.comment && (
                        <p className="text-error absolute bottom-[-16px] left-0 mt-1">
                            {errors.comment}
                        </p>
                    )}
                </div>

                <div className="tab:w-[48%] pc:w-[318px]">
                    <div className="pc:text-right pc:text-base pc:leading-5 mx-auto mb-8 flex max-w-[380px] gap-3 text-sm leading-4">
                        <p>*</p> <p className="text-justify">{t("consent")}</p>
                    </div>

                    <div className="pc:justify-end flex justify-center">
                        <ButtonAction name={t("submit")} type="submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};
