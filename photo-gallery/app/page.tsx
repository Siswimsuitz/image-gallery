import Image from "next/image";
import styles from "./page.module.css";

const photos = [
  // Placeholder images, replace with Supabase URLs later
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.siteTitle}>Ana Dias Photography</h1>
        <nav className={styles.nav}>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section className={styles.hero}>
        <h2 className={styles.heroTitle}>Capturing Moments, Creating Memories</h2>
        <p className={styles.heroSubtitle}>
          Elegant, timeless photography for every occasion.
        </p>
      </section>
      <section id="gallery" className={styles.gallerySection}>
        <h3 className={styles.sectionTitle}>Gallery</h3>
        <div className={styles.galleryGrid}>
          {photos.map((src, i) => (
            <div className={styles.galleryItem} key={i}>
              <Image
                src={src}
                alt={`Gallery photo ${i + 1}`}
                width={400}
                height={500}
                className={styles.galleryImage}
                placeholder="blur"
                blurDataURL="/placeholder.png"
              />
            </div>
          ))}
        </div>
      </section>
      <section id="about" className={styles.aboutSection}>
        <h3 className={styles.sectionTitle}>About</h3>
        <p className={styles.aboutText}>
          Ana Dias is a professional photographer specializing in portrait, event, and lifestyle photography. Her work is known for its natural light, candid moments, and artistic composition.
        </p>
      </section>
      <section id="contact" className={styles.contactSection}>
        <h3 className={styles.sectionTitle}>Contact</h3>
        <p className={styles.contactText}>
          For bookings and inquiries, please email <a href="mailto:info@anadiasphotography.com">info@anadiasphotography.com</a>
        </p>
      </section>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Ana Dias Photography. All rights reserved.
      </footer>
    </div>
  );
}
