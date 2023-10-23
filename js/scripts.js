const projectInfo = [];

projectInfo.push({name: 'Tv Movie Picker', projectURL: 'https://jamesdrichardson.github.io/TvMP/'});
projectInfo.push({name: 'Rock-Paper-Scissors', projectURL: 'http://rps.jamesdrichardson.dev/'});
projectInfo.push({name: 'Landing Page' , projectURL: 'https://projects.jamesdrichardson.dev/'});

window.addEventListener('DOMContentLoaded', event => {
    createProjectPages(projectInfo);
});

function createProjectPages(projectInfo){
    const cardsEl = document.querySelector('.project-cards');
    const template = document.getElementById('project-card-template');

    for(const project of projectInfo) {
        
        const clone = document.importNode(template.content, true);
        
        clone.querySelector('.project-name').innerText = project.name;
        clone.querySelector('iframe').src = project.projectURL;
        clone.querySelector('.project-button').addEventListener('click', openUrlInNewTab);
        cardsEl.appendChild(clone);
    }
}

function openUrlInNewTab(event){
    const iframeSite = event.target.previousElementSibling;
    const url = iframeSite.getAttribute('src');
    const w = window.open(url, "_blank");
}
