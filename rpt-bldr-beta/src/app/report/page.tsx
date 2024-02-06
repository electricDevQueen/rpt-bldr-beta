'use client';
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

import Link from "next/link";
import style from "./report-styles.module.css";
import { useState } from "react";
import Section from "./section";
export interface Section {
    name: string;
    id: number;
}
export default function ReportGenerator() {
    let [isEditingSection, setIsEditingSection] = useState(false);
    let [currentSection, setCurrentSection] = useState({name: '', id: 0});

    let sections: Section[] = [
        {
            id: 0,
            name: 'Referral Information'
        },
        {
            id: 1,
            name: 'Current Complaints'
        },
        {
            id: 2,
            name: 'Medical/Psychiatric History'
        },
        {
            id: 3,
            name: 'Social History'
        },
        {
            id: 4,
            name: 'Tests Administrated by Psy'
        },
        {
            id: 5,
            name: 'Tests Administrated by Tech'
        },
        {
            id: 6,
            name: 'Behavioral Observations'
        },
        {
            id: 7,
            name: 'Test Results'
        },
        {
            id: 8,
            name: 'Integrated Summary'
        },
        {
            id: 9,
            name: 'Recommendations'
        }
    ];

    function configureSection(e: any) {
        setIsEditingSection(true);
        setCurrentSection(sections.filter((x) => x.id == e.target.value)[0]);
    }

    function goBackToMainPanel() {
        setIsEditingSection(false)
    }

    function renderInputPanel() {
        if (!isEditingSection) {
            return (
                <div>
                    {sections.map((section) => {
                        return (
                        <div className={style.inputOption}>
                            {section.name}
                            <button onClick={e => configureSection(e)} value={section.id} className={style.configure}>Configure</button>
                        </div>);
                    })}
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={() => goBackToMainPanel()}>Go back</button>
                    <Section sectionId={currentSection.id}></Section>
                </div>
            );
        }
    }

    function renderGeneratedContent() {
        return (sections.map((section) => {
            return (
                <><h5>{section.name}</h5><p>Boilerplate code.</p></>
            );
        }));
    }

    return (
        <div className={style.layout}>
            <header className={style.header}>
                <Link href="/">Back to home</Link>
                <input placeholder="Name of report"/>
                <button>File</button>
                <span>Unsaved or Saved</span>
            </header>
            <main className={style.main}>
                <div className={style.inputPanel}>
                    {renderInputPanel()}
                </div>
                <div className={style.generatedContent}>
                    <div className={style.document}>
                        {renderGeneratedContent()}
                    </div>
                </div>
            </main>
        </div>
    );
}