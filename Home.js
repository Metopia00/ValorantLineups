document.addEventListener("DOMContentLoaded", function () {
  // Get the container for the icons
  const iconContainer = document.getElementById("iconContainer");

  // Get the container for the options window
  const optionsContainer = document.querySelector(".options-container");

  // Get the drop-down menu elements
  const dropdown = document.querySelector(".dropdown");
  const dropdownContent = document.querySelector(".dropdown-content");

  // Show the drop-down content when the drop-down button is clicked
  dropdown.addEventListener("click", function () {
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });

  // Hide the drop-down content when clicked outside of it
  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      dropdownContent.style.display = "none";
    }
  });

  // Get all tag buttons and add event listeners to them
  const tagButtons = document.querySelectorAll(".tag-button");
  tagButtons.forEach((tagButton) => {
    tagButton.addEventListener("click", () => {
      const selectedTag = tagButton.getAttribute("data-tag");
      filterIconsByTag(selectedTag);
    });
    
  });
  // Array to hold icon data (icon URL, redirect URL, hover image, and tags)
  const icons = [
  {
      iconURL: "Sova_icon.webp",
      redirectURL: "Sova.html",
      hoverImage: "sova hover.png",
      tags: ["Lineup", "agent"],
      description: "Sova",
    },
    {
      iconURL: "killjoy.webp",
      redirectURL: "killjoy.html",
      hoverImage: "killjoy hover.png",
      tags: ["Setup", "agent"],
      description: "Killjoy",
    },
    {
      iconURL: "viper.webp",
      redirectURL: "viper.html",
      hoverImage: "viper hover.webp",
      tags: ["Lineup", "Setup", "agent"],
      description: "Viper",
    },
    {
      iconURL: "raze.webp",
      redirectURL: "raze.html",
      hoverImage: "raze hover.png",
      tags: ["agent", "Lineup"],
      description: "Raze",
    },
    {
      iconURL: "kayo.png",
      redirectURL: "kayo.html",
      hoverImage: "kayo hover.png",
      tags: ["agent", "Lineup"],
      description: "Raze",
    },
    {
      iconURL: "gekko.png",
      redirectURL: "raze.html",
      hoverImage: "gekko hover.png",
      tags: ["agent", "Lineup"],
      description: "Raze",
    },
    {
      iconURL: "ascent.png",
      redirectURL: "ascent.html",
      hoverImage: "ascent.png",
      tags: ["map"],
      description: "Ascent",
    },
    {
      iconURL: "bind.webp",
      redirectURL: "Bind.html",
      hoverImage: "bind.webp",
      tags: ["map"],
      description: "Bind",
    },
    {
      iconURL: "split.webp",
      redirectURL: "split.html",
      hoverImage: "split.webp",
      tags: ["map"],
      description: "Split",
    },
  ];

  function createIconElement(iconData) {
    // Create an anchor tag to wrap the icon and set its redirect URL
    const iconWrapper = document.createElement("a");
    iconWrapper.href = iconData.redirectURL;

    // Create a div element as the icon
    const icon = document.createElement("div");
    icon.classList.add("icon");
    icon.style.backgroundImage = `url("${iconData.iconURL}")`; 
    icon.setAttribute("data-tags", iconData.tags.join(" ")); 

    // Append the icon to the icon wrapper
    iconWrapper.appendChild(icon);

    // Create a div element to show the description
    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("icon-description");
    descriptionDiv.textContent = iconData.description;
    descriptionDiv.style.display = "none";

    // Append the description div to the icon wrapper
    iconWrapper.appendChild(descriptionDiv);

    // Append the icon wrapper to the icon container
    iconContainer.appendChild(iconWrapper);

    icon.addEventListener("mouseover", () => {
      optionsContainer.style.backgroundImage = `url("${iconData.hoverImage}")`;
      optionsContainer.style.backgroundSize = "contain"; // Make the hover image fully visible
      optionsContainer.style.backgroundRepeat = "no-repeat"; // Prevent repeating the hover image
      descriptionDiv.style.display = "block"; // Show the description on hover
    });
  
    // Event listener to revert to the original background and remove the description on mouseout
    icon.addEventListener("mouseout", () => {
      optionsContainer.style.backgroundImage = "none";
      descriptionDiv.style.display = "none"; // Hide the description on mouseout
    });
  }

  // Function to filter icons by the selected tag and show/hide descriptions
  function filterIconsByTag(tag) {
    
    const iconElements = document.querySelectorAll(".icon");
    iconElements.forEach((iconElement) => {
      const iconTags = iconElement.getAttribute("data-tags").split(" ");
      if (tag === "all" || iconTags.includes(tag)) {
        iconElement.style.display = "block";
        iconElement.classList.remove("hidden"); // Show the icon if it has the selected tag or the tag is "all"
        const descriptionDiv = iconElement.querySelector(".icon-description");
        if (descriptionDiv) {
          descriptionDiv.style.display = "block"; // Show the description if it exists
        }
        iconElement.style.opacity = 1; // Make the icon fully visible
        iconElement.style.transform = "scale(1)"; // Reset the icon scale
      } else {
        iconElement.style.display = "none";
        iconElement.classList.add("hidden");
        iconElement.style.opacity = 0; // Hide the icon smoothly
        iconElement.style.transform = "scale(0.8)"; // Scale down the icon smoothly
        const descriptionDiv = iconElement.querySelector(".icon-description");
        if (descriptionDiv) {
          descriptionDiv.style.display = "none"; // Hide the description if it exists
        }
      }
    });
  }
  

  // Loop through the icons array and create icon elements
  icons.forEach((iconData) => createIconElement(iconData));
});
