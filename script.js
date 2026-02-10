const message = `<h2>To my safe haven,<h2>

<br>Whenever this song plays, it feels like my heart is speaking in a language only you understand.<br>

<br>Out of all the people in this world, you are the one I feel peaceful with. Not the kind of feeling that is loud and temporary, but the kind that stays — soft, constant, and sure. The kind of love that doesn’t fade when things get hard, doesn’t disappear when days are quiet, and doesn’t change even when time keeps moving.<br>

<br>If life gives us libu-libong buwan, I don’t want a single one without you in it. Because you are not just part of my present — you are someone I see in my tomorrows, in my plans, in the simple dreams I keep to myself. When I think about where I want to be, who I want beside me, my heart doesn’t hesitate. It chooses you.<br>

<br>You are my comfort after long days, my calm in the middle of overthinking, my happiness in the smallest moments. With you, love feels safe. It feels like I don’t have to pretend, don’t have to be afraid, don’t have to question where I stand.<br>

<br>Even if the world changes, even if seasons come and go, even if time stretches far beyond what we can imagine —my heart already knows where it belongs. It belongs with you.<br>

<p>You are not just someone I love.<p>
<p>You are the one my heart will always come home to. 🌙💛<p>
`;

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
