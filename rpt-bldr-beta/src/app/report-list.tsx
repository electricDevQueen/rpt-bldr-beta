import Link from "next/link";
import reportListStyles from "./report-list.module.css";

export default function ReportList() {
    let savedReports = [
        {
          id: 0,
          name: 'hmj - adhd',
          lastModified: new Date(2024, 2, 2)
        },
        {
          id: 1,
          name: 'rgy - tbi',
          lastModified: new Date(2023, 12, 2)
        },
        {
          id: 2,
          name: 'ilp - dementia',
          lastModified: new Date(2024, 1, 23)
        },
        {
          id: 3,
          name: 'edf - adhd',
          lastModified: new Date(2024, 1, 15)
        },
        {
          id: 4,
          name: 'sdd - learning disability',
          lastModified: new Date(2024, 1, 27)
        }
    
      ];
      
    return (
        <ul className={reportListStyles.listContainer}>
            {savedReports.map((report) => {
              return (
                <li className={reportListStyles.listItem}>
                  <Link href={`report/${report.id}`}>{report.name} - {report.lastModified.toDateString()}</Link>
                </li>
              )
            })}
        </ul>
    );
}