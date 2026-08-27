import MiniBio from "./MiniBio";
import styles from "./Profile.module.css";

const FOCUS_LINES = [
  { cmd: "role --dev", out: "desenvolvedor de software & web" },
  { cmd: "role --teach", out: "professor de programação e robótica" },
  { cmd: "role --next", out: "quero focar em segurança da informação" },
];

export default function Profile() {
  return (
    <main className={styles.page}>
      <div className={styles.scanlines} aria-hidden="true" />

      <header className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.tag}>root@portfolio:~$ whoami</span>
          <h1 className={styles.title}>
            Lucas
            <br />
            Tenório
          </h1>
          <p className={styles.subtitle}>Moreira Silva</p>
        </div>

        <div className={styles.heroImage}>
          <img
            src="/profile.jpg"
            alt="minha foto de perfil"
          />
        </div>
      </header>

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
          phrase="Pensar fora da caixa cria algo novo, algo novo é desruptivo, algo disruptivo não é detectado, segurança é sobre detectar o que, até então, não é detectável. -Lucas Tenório"
        />
      </section>

      <footer className={styles.footer}>
        <span>[ end of file ]</span>
      </footer>
    </main>
  );
}
