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
        phrase="Penso, construo, desenvolvo, programo, edito, ensino e nas horas vagas, se é que existem, jogo alguma coisa."
      />
    </main>
  );
}
