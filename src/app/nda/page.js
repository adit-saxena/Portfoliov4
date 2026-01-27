"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeaderP from '../components/headerProjects'; // Assuming we want the same header
import styles from './internal.module.css';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('../components/Footer/footer2'), { ssr: false });

export default function NDAPage() {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <HeaderP
                BGColor={"#ffffff"}
                DSColor={"rgba(0, 0, 0, 0.05 )"}
            />

            <main className={styles.container}>
                <div className={styles.contentWrapper}>
                    <div className={styles.illustration}>
                        <Image
                            src="/NDA.webp"
                            alt="NDA Locked Content"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>

                    <h1 className={styles.title}>TOP SECRET</h1>

                    <p className={styles.description}>
                        Shhh! This project is currently locked away in a high-security digital vault.
                        While I can't show it publicly yet, I'd love to walk you through it privately.
                        Let's chat!
                    </p>

                    <a href="mailto:aditsaxena2004@gmail.com" className={styles.ctaButton}>
                        Contact Me
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    );
}
