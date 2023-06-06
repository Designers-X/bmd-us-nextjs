import React from 'react'
import frequenti from '../../json/domande-frequenti.json'
import MasterHeadImg from '@/utilities/MasterHeadImg';
import { NewsLetter } from '@/utilities/NewsLetter';
import Accordion from '@/utilities/Accordion';
import styles from '@/styles/frequenti.module.css'

export default function Frequenti() {
    const { masterHead, section, newsletter } = frequenti || {};
    return (
        <section>
            <MasterHeadImg data={masterHead} />
            <div className={styles.container}>
                <div className={styles.holder}>
                    {
                        section && section.map((e, i) => {
                            return (
                                <div key={i}>
                                    <h2 className={styles.title}>{e.title}</h2>
                                    <Accordion items={e.content} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <NewsLetter content={newsletter} />
        </section>
    )
}