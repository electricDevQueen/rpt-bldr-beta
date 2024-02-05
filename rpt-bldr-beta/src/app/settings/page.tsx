'use client';
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import Link from "next/link";
import { Section } from "../report/page";
import { useState } from "react";
import style from './config-styles.module.css';

export default function Settings() {

    let sections = [
        {
          id: 1,
          name: "Current Complaints",
          sections: [
            {
              name: "Cognitive",
              subSections: [
                {
                  name: "Attention/Procession Speed",
                  options: [
                    "Focus",
                    "Sustained concentration",
                    "Distractability",
                    "Tracking conversations",
                    "loses train of thought",
                    "processing speed",
                  ],
                },
                {
                  name: "Memory",
                  options: [
                    "Conversations",
                    "Names",
                    "Events",
                    "Intended actions",
                    "Repeating self",
                    "Misplace objects",
                    "Getting lost",
                    "Cues helpful",
                  ],
                },
                {
                  name: "Language",
                  options: [
                    "Word finding",
                    "Dysarthria",
                    "Paraphasia",
                    "Comprehension",
                    "Reading",
                    "Writing",
                    "Spelling",
                  ],
                },
              ],
            },
            {
              name: "Emotional",
              subSections: [
                {
                  name: "Behavior/Personality",
                  options: [
                    "Suspicious",
                    "Dishibited",
                    "Socially inappropriate",
                    "Perseverative",
                    "Irritable",
                    "Aggressive",
                    "Apathetic",
                    "Abulic",
                    "Judgment",
                    "Loss of empathy or sympathy",
                    "Compulsivity",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 0,
          name: "Referral Information",
          sections: [],
        },
        {
          id: 2,
          name: "Medical/Psychiatric History",
          sections: [],
        },
        {
          id: 3,
          name: "Social History",
          sections: [],
        },
        {
          id: 4,
          name: "Tests Administrated by Psy",
          sections: [],
        },
        {
          id: 5,
          name: "Tests Administrated by Tech",
          sections: [],
        },
        {
          id: 6,
          name: "Behavioral Observations",
          sections: [
            {
              name: "Overall",
              subSections: [
                {
                  name: "Arrival",
                  options: [
                    "On-Time",
                    "Early",
                    "Late-Reason: provide reason",
                    "Alone",
                    "With others",
                  ],
                },
                {
                    name: 'Appearance',
                    options: [
                        'Obese',
                        'Overweight',
                        'Average Weight',
                        'Thin'
                    ]
                },
                {
                    name: 'Grooming and Hygiene',
                    options: [
                        'Excellent',
                        'Good',
                        'Adequate',
                        'Fair',
                        'Poor'
                    ]
                }
              ],
            },
          ],
        },
        {
          id: 7,
          name: "Test Results",
          sections: [],
        },
        {
          id: 8,
          name: "Integrated Summary",
          sections: [],
        },
        {
          id: 9,
          name: "Recommendations",
          sections: [],
        },
      ];
    let [currentSection, setCurrentSection] = useState(sections[0]);

    function configureSection(e: any) {
        setCurrentSection(sections.filter((x) => x.id == e.target.value)[0]);
    }

    function renderInputPanel() {
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
    }

    function renderGeneratedContent() {
        return (
            <><h3>{currentSection.name}</h3><ul>
                {currentSection.sections.map((sec) => {
                    return (
                    <div>
                        <h5>{sec.name}</h5>
                        {sec.subSections.map((subSec) => {
                        return (
                            <div className={style.section}>
                            <h6>{subSec.name}</h6>
                            <div className={style.options}>
                                {subSec.options.map((option) => {
                                return (
                                    <div>
                                    <input type="checkbox"></input>
                                    <label>{option}</label>
                                    </div>
                                );
                                })}
                            </div>
                            </div>
                        );
                })}
          </div>
        );
      })}
                </ul></>
            );

        }


    return (
        <div className={style.layout}>
            <header className={style.header}>
                <Link href="/">Back to home</Link>
            </header>
            <main className={style.main}>
                <div className={style.inputPanel}>
                    {renderInputPanel()}
                </div>
                <div className={style.generatedContent}>
                    <div>
                        {renderGeneratedContent()}
                    </div>
                </div>
            </main>
        </div>
    );
}