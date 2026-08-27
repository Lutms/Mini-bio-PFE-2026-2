import styles from "./MiniBio.module.css";

export default function MiniBio({
  photoSrc,
  photoAlt,
  name,
  phrase,
}) {
  return (
    <section className={styles.wrap} aria-label="Mini bio">
      <span className={styles.eyebrow}>// mini bio</span>

      <div className={styles.frame}>
        <div className={styles.inset}>
          <div className={styles.photoRing}>
            <img className={styles.photo} src={photoSrc} alt={photoAlt} />
          </div>

          <h2 className={styles.name}>{name}</h2>

          <p className={styles.phrase}>&ldquo;{phrase}&rdquo;</p>
        </div>
      </div>
    </section>
  );
}
