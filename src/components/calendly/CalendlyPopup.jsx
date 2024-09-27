'use client';
import useGetConfig from '@/hooks/useGetConfig';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { PopupWidget } from 'react-calendly';

const CalendlyPopup = ({ lng }) => {
  const calendlyConfig = useGetConfig('calendly');

    const t = useTranslations('contacts');
    const [rootElement, setRootElement] = useState(null);

    useEffect(() => {
        setRootElement(document.body);
    }, []);

    console.log('calendlyConfig', calendlyConfig);

    if (!calendlyConfig.data?.isActive) {
        return null;
    }
    return (
        <div className="">
            <PopupWidget
                url={
                    lng === 'it'
                        ? 'https://calendly.com/minimene/30min'
                        : 'https://calendly.com/minimene/incontro-30-minuti-clone'
                }
                rootElement={rootElement}
                text={t('calendly.title')}
                textColor="#ffffff"
                color="#0f172a"
                pageSettings={{}}
            />
        </div>
    );
};

export default CalendlyPopup;
