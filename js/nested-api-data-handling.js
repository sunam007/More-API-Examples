const loadBuddies = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => displayBuddies(data));
};

loadBuddies();

const displayBuddies = (data) => {
  //   console.log(data);

  const buddies = data.results;

  console.log(buddies);
  const buddiesContainer = document.getElementById("buddies");
  for (const buddy of buddies) {
    console.log(buddy.name.first);
    const p = document.createElement("p");
    p.innerText = `User Name:${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
    User Email: ${buddy.email}`;
    const img = document.createElement("img");
    img.src = buddy.picture.thumbnail;

    buddiesContainer.appendChild(img);
    buddiesContainer.appendChild(p);
  }
};
