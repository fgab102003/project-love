const message = `To my safe haven, Whenever this song plays, it feels like my heart is speaking in a language only you understand. Out of all the people in this world, you are the one I feel peaceful with. Not the kind of feeling that is loud and temporary, but the kind that stays — soft, constant, and sure. The kind of love that doesn’t fade when things get hard, doesn’t disappear when days are quiet, and doesn’t change even when time keeps moving. If life gives us libu-libong buwan, I don’t want a single one without you in it. Because you are not just part of my present — you are someone I see in my tomorrows, in my plans, in the simple dreams I keep to myself. When I think about where I want to be, who I want beside me, my heart doesn’t hesitate. It chooses you. You are my comfort after long days, my calm in the middle of overthinking, my happiness in the smallest moments. With you, love feels safe. It feels like I don’t have to pretend, don’t have to be afraid, don’t have to question where I stand. Even if the world changes, even if seasons come and go, even if time stretches far beyond what we can imagine — my heart already knows where it belongs. It belongs with you. You are not just someone I love. You are the one my heart will always come home to. 🌙💛`;
function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
