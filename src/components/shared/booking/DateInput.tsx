import "react-datepicker/dist/react-datepicker.css";

import { format } from "date-fns";
import enGB from "date-fns/locale/en-GB";
import ru from "date-fns/locale/ru";
import uk from "date-fns/locale/uk";
import { useTranslations } from "next-intl";
import { forwardRef, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";

import { LocaleType } from "@/types/LocaleType";

import { IconCalendar } from "../icons/IconCalendar";
import { IconCheckMark } from "../icons/IconCheckMark";
import { IconChevron } from "../icons/IconChevron";
registerLocale("uk", uk);
registerLocale("en", enGB);
registerLocale("ru", ru);

export default function DateInput({
    locale,
    value,
    onChange,
    className,
}: {
    locale: LocaleType;
    value: string;
    onChange: (date: string) => void;
    className?: string;
}) {
    const [openMonthList, setOpenMonthList] = useState(false);
    const [open, setOpen] = useState(false);
    const localeMap = { uk, ru, en: enGB };
    const localeObj = localeMap[locale];
    const t = useTranslations("Form");
    const CustomInput = forwardRef<HTMLInputElement, any>(
        ({ value, onClick }, ref) => (
            <button
                type="button"
                onClick={onClick}
                ref={ref as React.RefObject<HTMLButtonElement>}
                className={` ${value ? "bg-white-100 text-black" : "text-grey"} font-oswald border-grey tab:py-3 tab:px-5 placeholder:text-grey focus:bg-white-100 pointer-events-auto flex w-full items-center justify-between rounded border px-3 py-2 leading-none transition-all duration-300 ease-in-out group-focus:outline-none ${className}`}
            >
                <span>{value || t("date")}</span>
                <IconCalendar />
            </button>
        )
    );

    return (
        <DatePicker
            selected={value ? new Date(`${value}T00:00:00`) : null}
            locale={locale}
            minDate={new Date()}
            onChange={date => {
                onChange(date ? format(date, "yyyy-MM-dd") : "");
            }}
            onClickOutside={() => setOpen(false)}
            open={open}
            onInputClick={() => setOpen(true)}
            customInput={<CustomInput />}
            dateFormat={"dd.MM.yyyy"}
            portalId="datepicker-portal"
            wrapperClassName="tab:w-[48%] pc:w-[318px]"
            renderCustomHeader={({
                date,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
                changeMonth,
            }) => {
                const months = Array.from({ length: 12 }).map((_, i) =>
                    format(new Date(date.getFullYear(), i, 1), "LLLL yyyy", {
                        locale: localeObj,
                    })
                );

                const handleSelectMonth = (monthIndex: number) => {
                    changeMonth(monthIndex);
                    setOpenMonthList(false);
                };

                return (
                    <div className="pointer-events-auto">
                        <p className="font-oswald border-grey-70 border-b pt-4 pr-3 pb-3 pl-6 text-left leading-5">
                            {t("chooseDate")}
                        </p>

                        <div className="flex items-center justify-between">
                            <div className="flex w-full items-center justify-between py-1 pr-3 pl-4">
                                <div className="relative flex items-center justify-between">
                                    <button
                                        onClick={() =>
                                            setOpenMonthList(!openMonthList)
                                        }
                                        className="text-grey font-oswald border-ivory hover:border-grey flex items-center gap-1 rounded border py-2.5 pr-1 pl-2 text-sm leading-none font-medium uppercase transition-all duration-300 ease-in-out"
                                    >
                                        {format(date, "LLLL yyyy", {
                                            locale: localeObj,
                                        })}{" "}
                                        <IconChevron className="h-[18px] w-[18px] px-[5px] pt-[7px] pb-1.5" />
                                    </button>

                                    {openMonthList && (
                                        <div className="bg-ivory border-grey absolute top-full left-0 z-10 mt-1 flex w-max flex-col gap-4 rounded-sm border p-2">
                                            {months.map((m, idx) => (
                                                <button
                                                    key={m}
                                                    className="text-grey font-oswald rounded px-2 py-1 text-left uppercase hover:underline"
                                                    onClick={() =>
                                                        handleSelectMonth(idx)
                                                    }
                                                >
                                                    {m}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center">
                                    <button
                                        type="button"
                                        onClick={decreaseMonth}
                                        disabled={prevMonthButtonDisabled}
                                        className="border-grey pointer-events-auto flex size-12 items-center justify-center rounded p-1 hover:border disabled:opacity-30"
                                    >
                                        <IconCheckMark />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={increaseMonth}
                                        disabled={nextMonthButtonDisabled}
                                        className="border-grey pointer-events-auto flex size-12 rotate-180 items-center justify-center rounded p-1 hover:border disabled:opacity-30"
                                    >
                                        <IconCheckMark />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }}
            calendarContainer={({ children }) => (
                <div className="bg-ivory relative z-[11]">
                    <div className="border-grey-90 flex flex-col rounded-sm border">
                        {children}

                        <div className="text-emerald font-oswald flex items-center justify-between">
                            <button
                                type="button"
                                className="p-4 text-sm leading-none font-medium uppercase"
                                onClick={() => setOpen(false)}
                            >
                                {t("close")}
                            </button>
                            <button
                                type="button"
                                className="p-4 text-sm leading-none font-medium uppercase"
                                onClick={() => {
                                    onChange("");
                                    setOpen(false);
                                }}
                            >
                                {t("cancel")}
                            </button>
                            <button
                                type="button"
                                className="p-4 text-sm leading-none font-medium uppercase"
                                onClick={() => setOpen(false)}
                            >
                                Ок
                            </button>
                        </div>
                    </div>
                </div>
            )}
        />
    );
}
