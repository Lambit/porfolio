import Link from "next/link"
import WorkLayout from "./layout";
import styles from './styles.module.css'

export default function Work() {
    // throw new Error('bro')
    
    return (
        <WorkLayout>
            <h1 className={styles.font}>Work</h1>
        </WorkLayout>
    );
}