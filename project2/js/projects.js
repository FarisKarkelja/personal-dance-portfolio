$(document).ready(function() {
    $.ajax({
      url: '../project2/json/projects.json', 
      dataType: 'json',
      success: function(data) {
        let projectsContainer = $('#projectsContainer');
  
        data.forEach(function(project) {
          let projectContent = `
            <div class="projects-column">
              <h3 class="projectsH3">${project.title}</h3>
              <p>${project.description}</p>
            </div>
          `;
          projectsContainer.append(projectContent);
        });
      },
      error: function(xhr, status, error) {
        console.error('Failed to fetch projects data:', error);
      }
    });
  });
  