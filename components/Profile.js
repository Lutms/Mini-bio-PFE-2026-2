import MiniBio from "./MiniBio";

export default function Profile() {
  return (
    <main style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      padding: "2rem"
    }}>
      <MiniBio
        photoSrc="/profile.jpg"
        photoAlt="minha foto de perfil"
        name="Lucas Tenório Moreira Silva"
        phrase="Pensar fora da caixa cria algo novo, algo novo é desruptivo, algo disruptivo não é detectado, segurança é sobre detectar o que, até então, não é detectável. -Lucas Tenório"
      />
    </main>
  );
}
