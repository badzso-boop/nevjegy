function fetchProjects() {
  fetch("/projects")
    .then((response) => response.json())
    .then((data) => {

      const projectsContainer = document.querySelector("#projectsContainer");
      let isLeft = true;
      let count = 0;      

      data.forEach((project) => {
        if (count < 4) {
          const card = document.createElement("div");
          card.classList.add("project-card", "mb-3");

          if (isLeft) {
            card.classList.add("float-animation-left");
          } else {
            card.classList.add("float-animation-right");
          }

          card.style.backgroundColor = "#b2d5f7";

          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");

          const title = document.createElement("h3");
          title.classList.add("card-title");
          title.textContent = project.title;

          const description = document.createElement("p");
          description.classList.add("card-text");
          description.innerHTML = `<strong>Description:</strong> ${project.short_description}`;

          const links = document.createElement("p");
          links.classList.add("card-text");
          links.innerHTML = `<strong>Links:</strong> ${project.links}`;

          const folder = document.createElement("p");
          folder.classList.add("card-text");
          folder.innerHTML = `<strong>Folder:</strong> ${project.folder}`;

          const button = document.createElement("button");
          button.classList.add("btn", "project-btn");
          button.style.backgroundColor = "#438a6d";
          button.style.color = "white";
          button.onclick = specificProject.bind(null, project.id);
          button.textContent = "View Project";

          cardBody.appendChild(title);
          cardBody.appendChild(description);
          cardBody.appendChild(links);
          cardBody.appendChild(folder);
          cardBody.appendChild(button);

          card.appendChild(cardBody);

          const column = document.createElement("div");
          column.classList.add("col-12", "col-md-6", "col-sm-12");
          column.appendChild(card);

          projectsContainer.appendChild(column);

          isLeft = !isLeft;

          count++;
        }
      });
    })
    .catch((error) => {
      console.error("Error fetching projects:", error);
    });
}
fetchProjects()

function fetchUpcomingProjects() {
  fetch("/upcoming_projects")
    .then((response) => response.json())
    .then((data) => {
      const projectsContainer = document.querySelector(
        "#upcomingProjectsContainer"
      );
      let isLeft = true;
      let count = 0;

      data.forEach((project) => {
        if (count < 4) {
          const card = document.createElement("div");
          card.classList.add("project-card", "mb-3");

          if (isLeft) {
            card.classList.add("float-animation-left");
          } else {
            card.classList.add("float-animation-right");
          }

          card.style.backgroundColor = "#b2d5f7";

          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");

          const title = document.createElement("h3");
          title.classList.add("card-title");
          title.textContent = project.title;

          const description = document.createElement("p");
          description.classList.add("card-text");
          description.innerHTML = `<strong>Description:</strong> ${project.short_description}`;

          const links = document.createElement("p");
          links.classList.add("card-text");
          links.innerHTML = `<strong>Links:</strong> ${project.links}`;

          const folder = document.createElement("p");
          folder.classList.add("card-text");
          folder.innerHTML = `<strong>Folder:</strong> ${project.folder}`;

          const button = document.createElement("button");
          button.classList.add("btn");
          button.style.backgroundColor = "#438a6d";
          button.style.color = "white";
          button.textContent = "View Project";

          cardBody.appendChild(title);
          cardBody.appendChild(description);
          cardBody.appendChild(links);
          cardBody.appendChild(folder);
          cardBody.appendChild(button);

          card.appendChild(cardBody);

          const column = document.createElement("div");
          column.classList.add("col-12", "col-md-6", "col-sm-12");
          column.appendChild(card);

          projectsContainer.appendChild(column);

          isLeft = !isLeft;

          count++;
        }
      });
    })
    .catch((error) => {
      console.error("Error fetching projects:", error);
    });
}
fetchUpcomingProjects();

function emailKuldes() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  const data = {
    to: "norbert.ujj@gmail.com",
    subject: name + " üzenetet küldött",
    text: "Email cím: " + email + "\n\n Üzenet: " + message,
  };

  fetch("/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result.message); // Email sent successfully
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
}

function specificProject(id) {
  // Get references to the elements
  const projectsContainer = document.getElementById("projectsContainer");
  const specificProject = document.getElementById("specificProject");

  projectsContainer.classList.add("hide");
  specificProject.classList.remove("hide");


  fetch("/projects/" + id)
    .then((response) => response.json())
    .then((data) => {
      // Process the returned data
      //console.log(data); // Project object with ID 1

      specificProject.innerHTML = ""


      const card = document.createElement("div");
      card.classList.add("project-card", "mb-3");

      card.style.backgroundColor = "#b2d5f7";

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const title = document.createElement("h3");
      title.classList.add("card-title", "text-center");
      title.textContent = data.title;

      const description = document.createElement("p");
      description.classList.add("card-text");
      description.innerHTML = `<strong>Description:</strong> ${data.long_description}`;

      const links = document.createElement("p");
      links.classList.add("card-text");
      links.innerHTML = `<strong>Links:</strong> ${data.links}`;

      const folder = document.createElement("p");
      folder.classList.add("card-text");
      folder.innerHTML = `<strong>Folder:</strong> ${data.folder}`;

      const button = document.createElement("button");
      button.classList.add("btn", "m-1");
      button.style.backgroundColor = "#438a6d";
      button.style.color = "white";
      button.textContent = "View Project";

      const buttonBack = document.createElement("button");
      buttonBack.classList.add("btn", "btn-javascript", "m-1");
      buttonBack.style.backgroundColor = "#438a6d";
      buttonBack.style.color = "white";
      buttonBack.onclick = back;
      buttonBack.textContent = "Back";

      const buttonTry = document.createElement("button");
      buttonTry.classList.add("btn", "btn-javascript", "m-1");
      buttonTry.style.backgroundColor = "#438a6d";
      buttonTry.style.color = "white";
      //buttonTry.onclick = back;
      buttonTry.textContent = "Try";

      cardBody.appendChild(title);
      cardBody.appendChild(description);
      cardBody.appendChild(links);
      cardBody.appendChild(folder);
      //cardBody.appendChild(button);
      cardBody.appendChild(buttonBack);
      cardBody.appendChild(buttonTry);

      card.appendChild(cardBody);

      const column = document.createElement("div");
      const column2 = document.createElement("div");
      const column3 = document.createElement("div");
      const column4 = document.createElement("div");
      column.classList.add("col-12", "col-md-12", "col-sm-12");
      column.appendChild(card);

      specificProject.appendChild(column);
    })
    .catch((error) => {
      console.error("Error fetching project:", error);
    });
}

function back() {
  const projectsContainer = document.getElementById("projectsContainer");
  const specificProject = document.getElementById("specificProject");

  projectsContainer.classList.remove("hide");

  specificProject.classList.add("hide");
}

function more() {
  document.getElementById("about-short").classList.add('hide')
  document.getElementById("about-long").classList.remove('hide')
}

function backAbout() {
  document.getElementById("about-short").classList.remove('hide')
  document.getElementById("about-long").classList.add('hide')
}