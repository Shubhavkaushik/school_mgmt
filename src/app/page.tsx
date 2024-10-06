import Image from "next/image";
import SideBar from "@/Component/SideBar";
import styles from "@/Stylesheet/Home.module.css"

export default function Home() {
  return (
    <>
    <SideBar />
    <div className={styles.container}>
      
      <div className={styles.welcome}>
        <h1 className={styles.title}>Welcome to Our Site!</h1>
        <p className={styles.subtitle}>Experience the magic of our platform.</p>
        <div className={styles.imageContainer}>
          <Image
            src="/path-to-your-image.jpg"
            alt="Welcome Image"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
      </div>
    </div>
    </>
   
  );
}
