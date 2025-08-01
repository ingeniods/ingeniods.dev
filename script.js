tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            }
        }
    }
};
window.FontAwesomeConfig = {autoReplaceSvg: 'nest'};

const profileInformation = {
    "personal_info": {
    "name": "Mauro Gómez Mejia",
        "title": "Software Engineer",
        "location": "Medellín, Colombia",
        "phone": "+57 300 123 4567",
        "email": "gomezmejiam@gmail.com"
},
    "profile": {
    "summary": "Ingeniero de software con amplia experiencia en desarrollo backend y liderazgo técnico. Especializado en arquitecturas de microservicios, buenas prácticas de desarrollo y metodologías ágiles para la entrega de soluciones escalables."
},
    "education": [
    {
        "title": "Ingeniería de Sistemas",
        "institution": "Universidad Nacional, Medellín",
        "years": "2010 - 2015",
        "description": "Programa enfocado en desarrollo de software y arquitectura de sistemas."
    },
    {
        "title": "Máster en DevOps",
        "institution": "Universidad Internacional, España",
        "years": "2020 - 2022",
        "description": "Enfoque práctico en CI/CD, containerización y automatización."
    }
],
    "skills": {
    "Lenguajes": ["Java", "Kotlin", "Golang", "Scala", "TypeScript"],
        "Frameworks": ["Spring Boot", "Play Framework", "React"],
        "Bases de Datos": ["Oracle", "PostgreSQL", "MongoDB"],
        "DevOps": ["Git", "CI/CD", "Docker", "Azure", "AWS"],
        "Arquitectura": ["Microservicios", "DDD", "Clean Architecture"]
},
    "languages": [
    {
        "language": "Español",
        "level": "C2"
    },
    {
        "language": "Inglés",
        "level": "B2"
    }
],
    "courses": [
    {
        "title": "Certified Scrum Master",
        "institution": "Scrum Alliance",
        "year": 2023
    },
    {
        "title": "TOGAF 9 Foundation",
        "institution": "The Open Group",
        "year": 2022
    }
],
    "links": [
    {
        label: "Blog Medium",
        icon: "fa-brands fa-medium",
        url: "https://medium.com/@maurogomez"
    },
    {
        label: "LinkedIn",
        icon: "fa-brands fa-linkedin",
        url: "https://linkedin.com/in/maurogomez"
    }
]
    ,
    "experience": [
    {
        "company": "TEKTON",
        "location": "Medellín, Colombia",
        "period": "2023 - Presente",
        "position": "Senior Developer II",
        "stack": ["Java", "Azure", "Spring Boot", "Microservicios"],
        "responsibilities": [
            "Liderazgo técnico en proyectos de arquitectura",
            "Implementación de CI/CD pipelines en Azure",
            "Mentoría a desarrolladores junior",
            "Optimización de performance y escalabilidad"
        ]
    },
    {
        "company": "ENDAVA",
        "location": "Medellín, Colombia",
        "period": "2021 - 2023",
        "position": "Senior Developer",
        "stack": ["React", "Oracle", "Testing", "DevOps"],
        "responsibilities": [
            "Desarrollo full-stack con React y Spring Boot",
            "Integración con bases de datos Oracle complejas",
            "Implementación de pruebas automatizadas",
            "Participación en despliegues y monitoreo"
        ]
    },
    {
        "company": "RAPPYPAY",
        "location": "Medellín, Colombia",
        "period": "2019 - 2021",
        "position": "Backend Developer",
        "stack": ["Kotlin", "TypeScript", "Microservicios", "AWS"],
        "responsibilities": [
            "Desarrollo de microservicios para pagos",
            "Integración con APIs de terceros",
            "Implementación de patrones de seguridad",
            "Optimización de consultas de base de datos"
        ]
    },
    {
        "company": "ZABUD",
        "location": "Medellín, Colombia",
        "period": "2017 - 2019",
        "position": "Software Architect",
        "stack": ["Java", "Arquitectura", "PostgreSQL", "Scrum"],
        "responsibilities": [
            "Diseño de arquitectura empresarial",
            "Definición de estándares de desarrollo",
            "Liderazgo de equipos multidisciplinarios",
            "Implementación de metodologías ágiles"
        ]
    },
    {
        "company": "CEIBA SOFTWARE HOUSE",
        "location": "Medellín, Colombia",
        "period": "2015 - 2017",
        "position": "Full Stack Developer",
        "stack": ["Scala", "Play Framework", "Angular", "MongoDB"],
        "responsibilities": [
            "Desarrollo con Scala y Play Framework",
            "Frontend con Angular e integración APIs",
            "Trabajo con bases de datos NoSQL MongoDB",
            "Participación en ciclo completo de desarrollo"
        ]
    },
    {
        "company": "FUNDACIÓN COMFENALCO",
        "location": "Medellín, Colombia",
        "period": "2013 - 2015",
        "position": "Junior Developer",
        "stack": ["Java", ".NET", "SQL Server", "MVC"],
        "responsibilities": [
            "Desarrollo de aplicaciones con Java y .NET",
            "Mantenimiento de sistemas legacy",
            "Creación de reportes y consultas SQL",
            "Soporte técnico y resolución de incidencias"
        ]
    }
]
}

function render(profile) {
    renderProfile(profile.profile);
    renderEducation(profile.education);
    renderSkills(profile.skills);
    renderLanguages(profile.languages);
    renderCourses(profile.courses);
    renderLinks(profile.links);
    renderExperience(profile.experience);
    renderPersonalInfo(profile.personal_info);

}

function renderExperience(experienceList) {
    const section = document.getElementById("experience-section");
    if (!section) return;

    section.innerHTML = `
    <h3 class="text-2xl text-neutral-900 mb-6 uppercase border-b-2 border-neutral-300 pb-2">Experiencia Laboral</h3>
  `;

    experienceList.forEach(exp => {
        const expDiv = document.createElement("div");
        expDiv.classList.add("mb-8", "relative");

        expDiv.innerHTML = `
      <div class="absolute left-0 top-0 w-1 h-full bg-neutral-400"></div>
      <div class="ml-6 grid grid-cols-2 gap-6">
        <div>
          <h4 class="text-lg font-bold text-neutral-900 mb-1">${exp.company}</h4>
          <p class="text-sm text-neutral-600 mb-2">${exp.location} • ${exp.period}</p>
          <div class="mb-3">
            <p class="text-xs font-semibold text-neutral-700 mb-1">Stack:</p>
            ${exp.stack.map(tech => `
              <span class="text-xs bg-neutral-200 px-2 py-1 rounded mr-1 mb-1 inline-block">${tech}</span>
            `).join("")}
          </div>
        </div>
        <div>
          <h5 class="text-base font-semibold text-neutral-800 mb-2">${exp.position}</h5>
          <ul class="text-sm text-neutral-700 space-y-1">
            ${exp.responsibilities.map(resp => `<li>• ${resp}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;
        section.appendChild(expDiv);
    });
}

function renderLinks(links) {
    const section = document.getElementById("links-section");
    if (!section) return;

    section.innerHTML = `
    <h3 class="text-lg text-neutral-400 mb-3 uppercase">Enlaces</h3>
    <div class="space-y-2"></div>
  `;

    const container = section.querySelector(".space-y-2");

    links.forEach(link => {
        const linkDiv = document.createElement("div");
        linkDiv.classList.add("flex", "items-center");

        linkDiv.innerHTML = `
      <i class="${link.icon} w-4 mr-2"></i>
      <a href="${link.url}" target="_blank" class="text-xs underline hover:text-neutral-200">
        ${link.label}
      </a>
    `;

        container.appendChild(linkDiv);
    });
}

function renderCourses(courses) {
    const section = document.getElementById("courses-section");
    if (!section) return;

    section.innerHTML = `
    <h3 class="text-lg text-neutral-400 mb-3 uppercase">Cursos</h3>
    <div class="space-y-2"></div>
  `;

    const container = section.querySelector(".space-y-2");

    courses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.innerHTML = `
      <h4 class="text-sm">${course.title}</h4>
      <p class="text-xs text-neutral-300">${course.institution} - ${course.year}</p>
    `;
        container.appendChild(courseDiv);
    });
}

function renderLanguages(languages) {
    const section = document.getElementById("languages-section");
    if (!section) return;

    section.innerHTML = `
    <h3 class="text-lg text-neutral-400 mb-3 uppercase">Idiomas</h3>
    <div class="space-y-3"></div>
  `;

    const container = section.querySelector(".space-y-3");

    languages.forEach(lang => {
        const width = getLanguageLevelWidth(lang.level); // calcula porcentaje visual

        const langDiv = document.createElement("div");
        langDiv.innerHTML = `
      <div class="flex justify-between mb-1">
        <span class="text-sm">${lang.language}</span>
        <span class="text-xs">${lang.level}</span>
      </div>
      <div class="w-full bg-neutral-700 rounded-full h-2">
        <div class="bg-neutral-400 h-2 rounded-full" style="width: ${width}"></div>
      </div>
    `;

        container.appendChild(langDiv);
    });
}

function renderSkills(skills) {
    const skillsSection = document.getElementById("skills-section");
    if (!skillsSection) return;

    // Limpiar sección y agregar el título
    skillsSection.innerHTML = `
    <h3 class="text-lg text-neutral-400 mb-3 uppercase">Habilidades</h3>
    <div class="space-y-3"></div>
  `;

    const container = skillsSection.querySelector(".space-y-3");

    for (const category in skills) {
        const skillItems = skills[category].join(", ");
        const skillBlock = document.createElement("div");

        skillBlock.innerHTML = `
      <h4 class="text-sm mb-2">${category}</h4>
      <p class="text-xs">${skillItems}</p>
    `;

        container.appendChild(skillBlock);
    }
}

function renderProfile(profile) {
    const aboutSection = document.getElementById("about-section");
    if (!aboutSection) return;

    const paragraph = aboutSection.querySelector("p");
    if (paragraph) {
        paragraph.textContent = profile.summary;
    }
}

function renderPersonalInfo(info) {
    const header = document.getElementById("header-section")
    if (!header) return

    const setTextContent = (selector, value) => {
        const elements = document.querySelectorAll(selector)
        elements.forEach(el => {
            el.textContent = value
        });
    }

    setTextContent('[data-role="name"]', info.name)
    setTextContent('[data-role="title"]', info.title)
    setTextContent('[data-role="location"]', info.location)
    setTextContent('[data-role="phone"]', info.phone)
    setTextContent('[data-role="email"]', info.email)
}

function renderEducation(educationList) {
    const section = document.getElementById("education-section");
    section.innerHTML = '<h3 class="text-lg text-neutral-400 mb-3 uppercase">Educación</h3>';
    educationList.forEach(edu => {
        section.innerHTML += `
      <div class="mb-4">
        <h4 class="text-sm mb-1">${edu.title}</h4>
        <p class="text-xs text-neutral-300">${edu.institution}</p>
        <p class="text-xs text-neutral-300">${edu.years}</p>
        <p class="text-xs mt-2">${edu.description}</p>
      </div>
    `;
    });
}

function getLanguageLevelWidth(level) {
    const map = {
        "C2": "100%",
        "C1": "90%",
        "B2": "75%",
        "B1": "60%",
        "A2": "40%",
        "A1": "20%"
    };

    return map[level.trim().toUpperCase()] || "50%";
}


document.addEventListener("DOMContentLoaded", () => {
    render(profileInformation);
});
