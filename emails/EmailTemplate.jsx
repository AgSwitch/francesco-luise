import { Html } from '@react-email/html';
import Head from 'next/head';
import * as React from 'react';

export default function EmailTemplate({
    name = 'Pippo Coca',
    email = 'pippococa@plutoero.com',
    phone = '333333333',
    message = 'Ciao sono Pippo e sono qui per incularti',
}) {
    const fontFamily = "'Lato', sans-serif";
    const primaryColor = '#0f172a'; // Blu scuro per i titoli
    const secondaryColor = '#1A202C'; // Grigio scuro per header e footer
    const backgroundColor = '#f3f4f6'; // Grigio chiaro per lo sfondo generale
    const contentBackgroundColor = '#FFFFFF'; // Bianco per lo sfondo del contenuto
    const textColor = '#1A202C'; // Grigio scuro per il testo
    const mutedTextColor = '#4b5563'; // Grigio medio per il testo opacizzato

    return (
        <Html>
            <Head>
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

                    @media only screen and (max-width: 600px) {
                        h1 {
                            font-size: 20px !important;
                        }

                        h3 {
                            font-size: 16px !important;
                        }

                        p {
                            font-size: 14px !important;
                        }

                        div[style*="padding: 20px"] {
                            padding: 15px !important;
                        }

                        div[style*="gap: 40px"] {
                            gap: 10px !important;
                        }
                    }
                `}</style>
            </Head>
            <body style={{ fontFamily, backgroundColor: '#ffffff', padding: '20px', margin: 0 }}>
                <div
                    style={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        backgroundColor: contentBackgroundColor,
                        borderRadius: '5px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
                        overflow: 'hidden',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: backgroundColor,
                            color: primaryColor,
                            padding: '60px',
                            textAlign: 'center',
                        }}
                    >
                        <h1 style={{ fontSize: '24px', margin: 0 }}>
                            Congratulazioni Dr. Luise
                        </h1>
                        <h3 style={{ fontSize: '18px', margin: '10px 0 0', }}>
                            Hai un potenziale nuovo paziente
                        </h3>
                    </div>

                    <div style={{ padding: '20px', color: textColor }}>
                        <div style={{ marginBottom: '20px' }}>
                            <p style={{ margin: '0 0 10px', color: mutedTextColor }}>
                                <strong>Nome:</strong> {name}
                            </p>
                            <p style={{ margin: '0 0 10px', color: mutedTextColor }}>
                            <strong>Email:</strong> <a style={{textDecoration: 'none', color: mutedTextColor}} href={`mailto:${phone}`}>{email}</a>
                            </p>
                            <p style={{ margin: '0 0 10px', color: mutedTextColor }}>
                                <strong>Telefono:</strong> {phone}
                            </p>
                        </div>
                        <div>
                            <p style={{ margin: 0 }}>
                                <strong>Messaggio:</strong> {message}
                            </p>
                        </div>
                    </div>

                    <div
                        style={{
                            backgroundColor: backgroundColor,
                            padding: '40px',
                            textAlign: 'center',
                            color: primaryColor,
                        }}
                    >
                        <p style={{ margin: 0, marginBottom:'40px' }}>Non perdere questa occasione!</p>
                        <a href= {`tel:${phone}`} style={{background: primaryColor, color: '#ffffff', padding: '10px', borderRadius:'10px', textDecoration: 'none'}}>Richiamalo Subito</a>
                    </div>
                </div>
            </body>
        </Html>
    );
}
