const chapters = [
    { t: "La Regla de Tres", d: "Un operativo experto nunca confía en una señal aislada. Buscamos 'cúmulos': tres gestos que confirmen la misma intención.", q: "¿Cuál es el estándar de oro en el análisis?", o: ["Un único gesto delatador", "Un cúmulo de tres señales congruentes"], a: 1 },
    { t: "Apertura de Palmas", d: "Las palmas visibles son la señal universal de desarme. Proyectan honestidad y control de la situación.", q: "Para desarmar a un contacto sospechoso:", o: ["Mostrar las palmas abiertas", "Mantener las manos en los bolsillos"], a: 0 },
    { t: "El Reflejo de la Mirada", d: "La verdadera micro-expresión de alegría activa los ojos. Si el músculo orbicular no se contrae, es una máscara.", q: "¿Cómo identificamos una sonrisa falsa?", o: ["Ausencia de arrugas en los ojos", "Movimiento excesivo de labios"], a: 0 },
    { t: "Barreras de Brazo", d: "El cruce de brazos es una barricada psicológica. Si se aprietan los puños, la defensiva se ha vuelto hostilidad.", q: "Generalmente, los brazos cruzados indican:", o: ["Resistencia o incomodidad", "Apertura al diálogo"], a: 0 },
    { t: "Filtro Cultural", d: "Un gesto de cortesía en Londres puede ser una declaración de guerra en otra latitud. El contexto es el mapa.", q: "¿El lenguaje del cuerpo es universal?", o: ["No, está dictado por la cultura local", "Sí, es idéntico en todo el mundo"], a: 0 },
    { t: "Dominio de Pulgares", d: "Los pulgares expuestos son proyecciones de estatus y confianza. Un operativo sabe quién manda por la posición de sus manos.", q: "Este gesto indica:", o: ["Confianza y superioridad", "Sumisión y duda"], a: 0 },
    { t: "Micro-picores", d: "El engaño provoca una respuesta fisiológica en los capilares nasales. El instinto de tocarse la cara es el primer delator.", q: "Una señal clásica de ocultamiento es:", o: ["Tocarse la nariz o la boca", "Mantener los hombros caídos"], a: 0 },
    { t: "Dilatación Pupilares", d: "Las pupilas no mienten. Se dilatan ante el deseo y se contraen ante el peligro o la hostilidad.", q: "Pupilas contraídas en un interrogatorio sugieren:", o: ["Hostilidad o rechazo", "Interés y agrado"], a: 0 },
    { t: "Perímetro de Seguridad", d: "La zona íntima (45cm) es territorio soberano. Invadirla es una táctica de presión psicológica agresiva.", q: "¿Cuál es la distancia de seguridad social?", o: ["Entre 1.2 y 3.6 metros", "Menos de medio metro"], a: 0 },
    { t: "Dirección de Pies", d: "Los pies son los miembros más honestos. Apuntan directamente hacia la intención real del sujeto.", q: "Si los pies apuntan hacia la salida:", o: ["Deseo inconsciente de abandonar el lugar", "Enfoque total en el operativo"], a: 0 },
    { t: "Inclinación de Cabeza", d: "Ladear la cabeza expone la carótida, una señal de escucha y confianza. Asentir tres veces induce al objetivo a confesar.", q: "Ladear la cabeza hacia un lado significa:", o: ["Escucha atenta e interés", "Desinterés y aburrimiento"], a: 0 },
    { t: "Rapport Especular", d: "Imitar sutilmente la postura del objetivo crea una conexión a nivel subconsciente. Se llama mimetismo táctico.", q: "¿Cuál es el fin del efecto espejo?", o: ["Generar sintonía y confianza", "Distraer al objetivo con movimientos"], a: 0 },
    { t: "Tiempos muertes (Gafas)", d: "Manipular objetos como gafas es una técnica para ganar segundos preciosos antes de dar una respuesta.", q: "Morder la patilla de una gafa sugiere:", o: ["Duda o evaluación", "Decisión absoluta"], a: 0 },
    { t: "Escudos Corporales", d: "Sostener carpetas o bolsos frente al pecho actúa como un chaleco antibalas emocional ante la inseguridad.", q: "Esta postura delata:", o: ["Inseguridad y autoprotección", "Dominio de la escena"], a: 0 },
    { t: "Pre-ajuste (Cortejo)", d: "Acomodarse la ropa o el cabello son gestos de preparación. Exponer las muñecas indica una apertura al contacto.", q: "Ajustarse la corbata o el reloj indica:", o: ["Preparación e interés", "Nerviosismo por falta de tiempo"], a: 0 },
    { t: "La Cifra 4", d: "La pierna cruzada sobre la rodilla en ángulo recto es una postura de bloqueo competitivo.", q: "¿Qué actitud revela esta posición?", o: ["Competitividad y terquedad", "Deseo de cooperar"], a: 0 },
    { t: "Geometría Social", d: "El ángulo de 45 grados es diplomacia pura. La confrontación directa es un choque de trenes.", q: "Situarse frente a frente suele ser:", o: ["Confrontativo", "Colaborativo"], a: 0 },
    { t: "Mobiliario de Poder", d: "El escritorio es una frontera. Su tamaño y altura dictan la jerarquía de la reunión.", q: "Un escritorio de gran tamaño sirve para:", o: ["Establecer autoridad y distancia", "Facilitar el intercambio"], a: 0 },
    { t: "Destino: New York", d: "Descenso iniciado. El villano le espera en el club. Su entrenamiento ha terminado, Operativo.", q: "¿Cuál es el núcleo del Oráculo de Terciopelo?", o: ["La observación clínica del gesto", "La intuición sin base"], a: 0 }
];

let currentLvl = 1;
let agentData = null;

function requestAccess() {
    const u = document.getElementById('user-input').value;
    const p = document.getElementById('pass-input').value;
    if(!u || !p) return alert("Identificación requerida para el Oráculo.");
    agentData = { name: u, pass: p, lvl: 1 };
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('verify-form').style.display = 'block';
    alert("TRANSMISIÓN RECIBIDA: El código de acceso es 1960");
}

function completeAuth() {
    if(document.getElementById('v-code').value === "1960") {
        localStorage.setItem('oracle_agent_' + agentData.name, JSON.stringify(agentData));
        startMission(agentData.name);
    } else alert("Código de acceso denegado.");
}

function startMission(name) {
    const saved = JSON.parse(localStorage.getItem('oracle_agent_' + name));
    if(saved) {
        agentData = saved;
        currentLvl = saved.lvl;
        document.getElementById('auth-screen').style.display = 'none';
        document.getElementById('game-screen').style.display = 'block';
        document.getElementById('agent-display').innerText = "Operativo: " + agentData.name;
        renderPath();
    }
}

function clearAgencyData() {
    if(confirm("¿Desea borrar sus credenciales y el progreso del vuelo?")) {
        localStorage.clear();
        location.reload();
    }
}

function renderPath() {
    const pathLine = document.getElementById('path-line');
    if(!pathLine) return;
    document.querySelectorAll('.checkpoint').forEach(e => e.remove());
    
    chapters.forEach((c, i) => {
        const n = i + 1;
        const dot = document.createElement('div');
        dot.className = `checkpoint ${n <= currentLvl ? 'active' : ''}`;
        dot.setAttribute('data-label', n);
        dot.onclick = () => n === currentLvl ? openLesson(n) : null;
        pathLine.appendChild(dot);
    });

    const pos = ((currentLvl - 1) / (chapters.length - 1)) * 100;
    document.getElementById('plane-container').style.left = pos + "%";
    
    agentData.lvl = currentLvl;
    localStorage.setItem('oracle_agent_' + agentData.name, JSON.stringify(agentData));
}

function openLesson(id) {
    const c = chapters[id-1];
    const mb = document.getElementById('m-body');
    mb.innerHTML = `
        <div class="lesson-img" style="background-image: url('${id}.jpg')"></div>
        <h2 style="color:var(--gold); letter-spacing:3px;">INFORME PISO ${id}</h2>
        <div style="text-align:left; border-left:1px solid var(--gold); padding-left:20px; margin-bottom:20px;">
            <p style="font-size:0.85rem; line-height:1.6;">${c.d}</p>
        </div>
        <p style="text-transform:uppercase; font-size:0.7rem; color:var(--gold); letter-spacing:2px;">Interrogatorio:</p>
        <p style="margin-top:5px; font-weight:bold;">${c.q}</p>
        ${c.o.map((opt, i) => `<button class="opt-btn" onclick="checkAnswer(${id}, ${i})">${opt}</button>`).join('')}
        <button class="opt-btn martini-btn" onclick="document.getElementById('modal').style.display='none'">Pausa para martini 🍸</button>
    `;
    document.getElementById('modal').style.display = 'flex';
}

function checkAnswer(id, idx) {
    if(idx === chapters[id-1].a) {
        if(id === 19) alert("VUELO FINALIZADO. Bienvenido a New York, Operativo.");
        else alert("Análisis correcto. El avión mantiene el rumbo.");
        
        if(id === currentLvl && currentLvl < 19) currentLvl++;
        renderPath();
        document.getElementById('modal').style.display = 'none';
    } else alert("Error de análisis. El objetivo ha detectado su presencia.");
}

window.onload = () => {
    const lastAgent = Object.keys(localStorage).find(key => key.startsWith('oracle_agent_'));
    if (lastAgent) {
        const name = lastAgent.replace('oracle_agent_', '');
        startMission(name);
    }
};
