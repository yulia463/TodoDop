import React from 'react';
import styles from './Site.module.css'


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    1234
                </div>
                <div className={styles.content}>
               content
                </div>
            </div>
        </div>
    );
};

