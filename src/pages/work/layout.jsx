
import Head from './head';
import Error from './error';
import Loading from "./loading";
import styles from './styles.module.css'


export default function WorkLayout({ children }) {
  return (
    <>
    <main className={styles.container}>
      {/* <Head />
      <Error/>
      <Loading /> */}
 
      {children}
      </main>
    </>
  );
}