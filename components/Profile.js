import MiniBio from "./MiniBio";
import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <main className={styles.page}>
      <div className={styles.scanlines} aria-hidden="true" />

      <section className={styles.terminal} aria-label="Áreas de atuação">
        <div className={styles.terminalBar}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.terminalTitle}>lucas@security:~</span>
        </div>
        <div className={styles.terminalBody}>
          {FOCUS_LINES.map((line) => (
            <p className={styles.terminalLine} key={line.cmd}>
              <span className={styles.prompt}>$</span> {line.cmd}
              <br />
              <span className={styles.terminalOut}>&gt; {line.out}</span>
            </p>
          ))}
        </div>
      </section>

      <section className={styles.bioSection}>
        <MiniBio
          photoSrc="/profile.jpg"
          photoAlt="minha foto de perfil"
          name="Lucas Tenório Moreira Silva"
          phrase="Penso, construo, desenvolvo, programo, ensino e jogo pra descansar nas horas vagas, quando existentes."
        />
      </section>

      <footer className={styles.footer}>
        <span>[ end of file ]</span>
      </footer>
    </main>
  );
}
