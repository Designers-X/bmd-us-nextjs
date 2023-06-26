import React, { useRef, useState } from 'react'
import styles from './styles.module.css'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
} from '../accordion'
import VideoPlayer from '@/utilities/Video';

const ProcessCard = ({
    stepNumber,
    image,
    imageAltText,
    title,
    bodyCopy,
    video,
    expandedCopy,
    titleColor,
    stepAlignment,
    buttonTittle, arrowColor
}) => {
    if (!buttonTittle) buttonTittle = 'LEARN MORE';
    React.useEffect(() => {
        console.log({ stepAlignment })
        let more = document.getElementsByClassName('accordionColor')
        console.log({ more })
        if (more) {
            more.style = `color:${titleColor}`;
        }
    }, [])

    return (
        <div className={styles.processCard}>
            {stepAlignment ? (<div className={styles.stepNumber} style={{ color: titleColor, left: 'auto', right: '30px' }}> {stepNumber} </div>) : (<div className={styles.stepNumber} style={{ color: titleColor }}> {stepNumber} </div>)}
            {video ? <VideoPlayer video={{video:{src:image,alt:imageAltText}}} id={title}/>:
            <img
                src={image}
                className={styles.processImage}
                alt={imageAltText}
                width={400}
                height={264}
            />}
            <h3 className={styles.processTitle} style={{ color: titleColor }}>{title}</h3>
            <p className={styles.processBody}>{bodyCopy}</p>
            <Accordion allowMultiple className={styles.accordion}>
                <AccordionItem className={styles.accordionItem}>
                    <AccordionButton className={styles.accordionButton}>
                        <p style={{ color: titleColor }}>{buttonTittle}</p>
                        <div className={styles.accordionColor} style={{ 'color': titleColor }}>
                            <AccordionIcon variant="arrow-default" className={styles.accordionIcon} />
                        </div>
                    </AccordionButton>
                    <AccordionPanel className={styles.accordionPanel}>
                        <div>
                            {expandedCopy}
                        </div>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default ProcessCard
