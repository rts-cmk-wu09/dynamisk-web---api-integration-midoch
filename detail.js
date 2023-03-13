// Get DOM elements
const headingDetail = document.querySelector(".heading__detail");
const detailsImage = document.querySelector(".details__image");
const detailsName = document.querySelector(".details__name");
const detailsTypes = document.querySelector(".details__types");
const detailsStats = document.querySelector(".details__stats");

// Get pokemon id from URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// Fetch pokemon details from API
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then((response) => response.json())
  .then((data) => {
    // Update page title with pokemon name
    document.title = `Pokemon Details - ${
      data.name.charAt(0).toUpperCase() + data.name.slice(1)
    }`;

    // Update heading with pokemon name and id
    headingDetail.textContent = `${
      data.name.charAt(0).toUpperCase() + data.name.slice(1)
    } (#${data.id})`;

    // Update image with pokemon sprite
    detailsImage.src = data.sprites.front_default;
    detailsImage.alt = `${
      data.name.charAt(0).toUpperCase() + data.name.slice(1)
    } sprite`;

    // Update name with pokemon name
    detailsName.textContent = `Name: ${
      data.name.charAt(0).toUpperCase() + data.name.slice(1)
    }`;

    // Update types with pokemon types
    const types = data.types.map(
      (type) => type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
    );
    detailsTypes.textContent = `Type${
      types.length > 1 ? "s" : ""
    }: ${types.join(", ")}`;

    // Update stats with pokemon stats
    const stats = data.stats.map(
      (stat) =>
        `${stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: ${
          stat.base_stat
        }`
    );
    detailsStats.textContent = `Stat${
      stats.length > 1 ? "s" : ""
    }: ${stats.join(", ")}`;
  })
  .catch((error) => {
    console.error(error);
  });
