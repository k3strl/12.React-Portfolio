import React from 'react';

function renderProjectCard(project) {
    const title = project.title;
    const img = project.img;
    const desc = project.desc;
    const pageLink = project.pageLink;
    const gitLink = project.gitLink;
    return (
        <div className="card">
            <div>
                {title}
                {img}
            </div>
            <section className="content">
                {desc}
            </section>
        </div>
    );
}

function renderProjects(projectArray) {
    const module = []
    for (let i = 0; i < projectArray.length; i++) {
        const newCard = renderProjectCard(projectArray[i]);
        module.push(newCard);
    }
    return module;
}

export { renderProjectCard, renderProjects };