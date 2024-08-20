'use client';
import { useTranslations } from "next-intl";
import React from "react";
import { PopupWidget } from "react-calendly";



const CalendlyPopup = ({lng}) => {

    const t = useTranslations('contacts');

  return (
    <div className="">
      <PopupWidget
        url={lng === 'it' ? "https://calendly.com/minimene/30min" : 'https://calendly.com/minimene/incontro-30-minuti-clone'}
        rootElement={document.body}
        text={t('calendly.title')}
        textColor="#ffffff"
        color="#0f172a"
        pageSettings={{
        }}
      />
    </div>
  );
};

export default CalendlyPopup;
