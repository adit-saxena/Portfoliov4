"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ConstructionModal.module.css';

const ConstructionModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.overlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className={styles.modal}
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        onClick={(e) => e.stopPropagation()} // Prevent close on modal click
                    >
                        <button className={styles.closeButton} onClick={onClose}>
                            &times;
                        </button>

                        <div className={styles.illustration}>
                            {/* Placeholder for illustration */}
                            <span>[Construction Site Illustration]</span>
                        </div>

                        <h2 className={styles.title}>Under Construction!</h2>
                        <p className={styles.message}>
                            Whoops! This project is still being built.
                            The cranes are moving, the code is compiling, and the coffee is brewing.
                            Check back soon!
                        </p>

                        <button className={styles.primaryButton} onClick={onClose}>
                            Got it!
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ConstructionModal;
