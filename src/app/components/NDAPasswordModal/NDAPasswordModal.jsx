"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './NDAPasswordModal.module.css';

const NDAPasswordModal = ({ isOpen, onClose, onSuccess, onSecondaryAction }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Obfuscated representation of "hiring" using ASCII char codes
        const expected = [104, 105, 114, 105, 110, 103].map(c => String.fromCharCode(c)).join('');

        if (password.toLowerCase() === expected) {
            setError('');
            // Reset state here in case modal opens again
            setPassword('');
            onSuccess();
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

    const handleClose = () => {
        setPassword('');
        setError('');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.overlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                >
                    <motion.div
                        className={styles.modal}
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className={styles.closeButton} onClick={handleClose}>
                            &times;
                        </button>

                        <div className={styles.headerIcon}>
                            🔒
                        </div>

                        <h2 className={styles.title}>Project under NDA</h2>
                        <p className={styles.message}>
                            This project contains sensitive information and is protected by a Non-Disclosure Agreement. Please enter the password to view.
                        </p>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <input
                                type="password"
                                className={`${styles.input} ${error ? styles.inputError : ''}`}
                                placeholder="Enter password (hiding in plain sight?)"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError('');
                                }}
                                autoFocus
                            />
                            <div className={styles.errorMessageWrapper}>
                                {error && <p className={styles.errorText}>{error}</p>}
                            </div>

                            <button type="submit" className={styles.submitButton}>
                                Unlock Project
                            </button>
                            {onSecondaryAction && (
                                <button type="button" className={styles.tertiaryButton} onClick={onSecondaryAction}>
                                    Checkout other projects instead
                                </button>
                            )}
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default NDAPasswordModal;
