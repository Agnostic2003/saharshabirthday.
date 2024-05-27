function showImages() {
  const initialView = document.getElementById('initialView');
  const personContainer = document.getElementById('personContainer');
  const birthdayWishes = document.getElementById('birthdayWishes');

  initialView.style.display = 'none';
  personContainer.style.display = 'block';
  birthdayWishes.style.display = 'block';
}

function revealTalent() {
  const talentMessage = document.getElementById('talentMessage');

  if (talentMessage.style.display === 'none') {
    talentMessage.innerHTML = 'Special Talent: Singing beautifully!';
    talentMessage.style.display = 'block';
  } else {
    talentMessage.innerHTML = '';
    talentMessage.style.display = 'none';
  }
}
