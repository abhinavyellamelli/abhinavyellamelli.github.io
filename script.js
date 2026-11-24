<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Abhinav Yellamelli — Electric Vehicles Engineer</title>
    <meta name="description"
        content="Portfolio of Abhinav Yellamelli, M.Tech student in Electric Vehicles at IIT Madras. Battery management systems, EV powertrains, power electronics and embedded systems.">
    <meta name="theme-color" content="#0B1220">

    <!-- Fonts: Plus Jakarta Sans (text) + JetBrains Mono (labels) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet">

    <link rel="icon" type="image/png" href="favicon.png">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.0/css/all.min.css">

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- =====================================================
         HEADER
    ====================================================== -->

    <header class="header" id="header">
        <nav class="nav container" aria-label="Main">

            <a href="#home" class="logo" aria-label="Home">
                <span class="logo-mark">AY</span>
                <span class="logo-text">Abhinav Yellamelli</span>
            </a>

            <ul class="nav-links" id="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#leadership">Leadership</a></li>
                <li><a href="#contact">Contact</a></li>
                <!-- Add back when the section exists:
                <li><a href="#publications">Publications</a></li>
                -->
            </ul>

            <div class="nav-actions">
                <a href="Assets/AbhinavYellamelli_Resume.pdf" class="btn btn-primary btn-sm" target="_blank"
                    rel="noopener noreferrer">
                    <i class="fa-solid fa-download"></i>
                    Resume
                </a>

                <button class="menu-toggle" id="menu-toggle" aria-label="Open menu" aria-expanded="false"
                    aria-controls="nav-links">
                    <span></span><span></span><span></span>
                </button>
            </div>

        </nav>
    </header>


    <main>

        <!-- =====================================================
             HERO
        ====================================================== -->

        <section id="home" class="hero">
            <div class="hero-grid container">

                <div class="hero-text">

                    <p class="eyebrow reveal">
                        <span class="status-dot"></span>
                        M.Tech, Electric Vehicles · IIT Madras
                    </p>

                    <h1 class="hero-title reveal">
                        Hi, I'm Abhinav Yellamelli.
                        <span class="hero-sub">I work on the electrical side of electric vehicles.</span>
                    </h1>

                    <p class="hero-lead reveal">
                        Electrical &amp; Electronics engineer from VNIT Nagpur with
                        almost two years of plant experience at Jindal Stainless.
                        At IIT Madras I design SiC DC/DC converters, model and balance
                        battery packs, and build embedded motor control on STM32.
                    </p>

                    <div class="hero-cta reveal">
                        <a href="#projects" class="btn btn-primary">
                            View projects
                            <i class="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href="#contact" class="btn btn-ghost">
                            Get in touch
                        </a>
                    </div>

                    <div class="socials reveal">
                        <a href="https://github.com/abhinavyellamelli" class="social-link" aria-label="GitHub"
                            target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/abhinavyellamelli/" class="social-link"
                            aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abhinavyellamelli234@gmail.com&su=Portfolio%20Inquiry"
                            class="social-link" aria-label="Email" target="_blank" rel="noopener noreferrer">
                            <i class="fa-solid fa-envelope"></i>
                        </a>
                        <a href="Assets/AbhinavYellamelli_Resume.pdf" class="social-link social-cv" aria-label="Resume"
                            target="_blank" rel="noopener noreferrer">
                            CV
                        </a>
                    </div>

                </div>

                <div class="hero-visual reveal">
                    <div class="photo-frame">
                        <img src="Profile Pic.jpeg" alt="Portrait of Abhinav Yellamelli" width="420" height="420">
                    </div>
                </div>

            </div>

            <a href="#about" class="scroll-hint" aria-label="Scroll to About">
                <span></span>
            </a>
        </section>


        <!-- =====================================================
             ABOUT
        ====================================================== -->

        <section id="about" class="section">
            <div class="container">

                <div class="section-head reveal">
                    <span class="section-label">01 / About</span>
                    <h2 class="section-title">About me</h2>
                </div>

                <div class="about-grid">

                    <div class="about-text reveal">
                        <p>
                            I'm an M.Tech student in Electric Vehicles at IIT Madras, with
                            a B.Tech in Electrical and Electronics Engineering from VNIT
                            Nagpur. So far my path has mixed academic study with hands-on
                            industry work.
                        </p>
                        <p>
                            After VNIT, I worked as a Graduate Engineer Trainee at Jindal
                            Stainless on electrical and instrumentation maintenance,
                            industrial projects, equipment upgrades and plant engineering.
                            That time showed me how electrical and control systems behave
                            in real industrial environments.
                        </p>
                        <p>
                            At IIT Madras I'm building deeper expertise in EV technology.
                            This semester I designed a 3.6 kW three-port SiC DC/DC converter
                            for an EV auxiliary power module, modelled charging and cell
                            balancing of an LFP battery pack from lab data, and built
                            closed-loop DC motor speed control on an STM32. I also serve
                            as Deputy Placement Coordinator for my department.
                        </p>

                        <div class="stats">
                            <div class="stat">
                                <span class="stat-num">4</span>
                                <span class="stat-label">Industry roles</span>
                            </div>
                            <div class="stat">
                                <span class="stat-num">800 MW</span>
                                <span class="stat-label">Plant exposure</span>
                            </div>
                            <div class="stat">
                                <span class="stat-num">5</span>
                                <span class="stat-label">Engineering projects</span>
                            </div>
                        </div>
                    </div>

                    <div class="about-side">

                        <div class="card reveal">
                            <h3 class="card-title">
                                <i class="fa-solid fa-graduation-cap"></i>
                                Education
                            </h3>

                            <ol class="edu-list">
                                <li>
                                    <span class="edu-date">2026 – Present</span>
                                    <strong>M.Tech, Electric Vehicles</strong>
                                    <span>Indian Institute of Technology Madras, Chennai</span>
                                </li>
                                <li>
                                    <span class="edu-date">2020 – 2024</span>
                                    <strong>B.Tech, Electrical &amp; Electronics Engineering</strong>
                                    <span>Visvesvaraya National Institute of Technology, Nagpur · CGPA 6.87/10</span>
                                </li>
                                <li>
                                    <span class="edu-date">2018 – 2020</span>
                                    <strong>Intermediate (11th–12th)</strong>
                                    <span>Narayana Junior College, Vijayawada · CGPA 8.54/10</span>
                                </li>
                                <li>
                                    <span class="edu-date">2017 – 2018</span>
                                    <strong>10th Standard</strong>
                                    <span>Narayana Olympiad School, Vijayawada · CGPA 9.7/10</span>
                                </li>
                            </ol>
                        </div>

                        <div class="card reveal">
                            <h3 class="card-title">
                                <i class="fa-solid fa-microscope"></i>
                                Research interests
                            </h3>

                            <ul class="interest-list">
                                <li>
                                    <strong>Battery Management Systems</strong>
                                    <span>SOC/SOH estimation, cell balancing, battery modelling, energy
                                        management</span>
                                </li>
                                <li>
                                    <strong>Automotive Embedded Systems</strong>
                                    <span>Microcontrollers, embedded software, real-time systems</span>
                                </li>
                                <li>
                                    <strong>EV Powertrains</strong>
                                    <span>Electric machines, motor drives, powertrain control, efficiency</span>
                                </li>
                                <li>
                                    <strong>Power Electronics</strong>
                                    <span>Converters, inverters, motor-drive systems, digital control</span>
                                </li>
                                <li>
                                    <strong>Intelligent Control</strong>
                                    <span>Control strategies and data-driven methods for EV performance and
                                        reliability</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </section>


        <!-- =====================================================
             EXPERIENCE
        ====================================================== -->

        <section id="experience" class="section section-alt">
            <div class="container">

                <div class="section-head reveal">
                    <span class="section-label">02 / Experience</span>
                    <h2 class="section-title">Where I've worked</h2>
                </div>

                <div class="timeline">

                    <!-- Jindal Stainless -->
                    <article class="tl-item reveal">
                        <div class="tl-logo">
                            <img src="Jindal Stainless Logo.jpeg" alt="Jindal Stainless logo">
                        </div>
                        <div class="tl-body">
                            <div class="tl-head">
                                <div>
                                    <h3 class="tl-role">Graduate Engineer Trainee</h3>
                                    <p class="tl-company">Jindal Stainless Limited</p>
                                </div>
                                <div class="tl-meta">
                                    <span><i class="fa-regular fa-calendar"></i> Aug 2024 – May 2026</span>
                                    <span><i class="fa-solid fa-location-dot"></i> Hisar, Haryana</span>
                                </div>
                            </div>
                            <ul class="tl-points">
                                <li>Preventive and breakdown maintenance of electrical and instrumentation systems in
                                    the Steckel Hot Rolling Mill.</li>
                                <li>Executed projects involving IP cameras, MCC replacement, burner ignition systems and
                                    shot blasting drives.</li>
                                <li>Supported the conversion of four reheating furnaces from furnace oil to natural gas.
                                </li>
                                <li>Calibrated field instruments and carried out SAP-based instrumentation asset audits
                                    and documentation.</li>
                            </ul>
                            <div class="tags">
                                <span>E&amp;I
                                    Maintenance</span><span>MCC</span><span>Instrumentation</span><span>SAP</span>
                            </div>
                        </div>
                    </article>

                    <!-- SDSTPS -->
                    <article class="tl-item reveal">
                        <div class="tl-logo">
                            <img src="Apgenco Logo.jpeg" alt="APGENCO logo">
                        </div>
                        <div class="tl-body">
                            <div class="tl-head">
                                <div>
                                    <h3 class="tl-role">Intern</h3>
                                    <p class="tl-company">SDSTPS, APGENCO</p>
                                </div>
                                <div class="tl-meta">
                                    <span><i class="fa-regular fa-calendar"></i> May 2024 – Jul 2024</span>
                                    <span><i class="fa-solid fa-location-dot"></i> Nellore, Andhra Pradesh</span>
                                </div>
                            </div>
                            <ul class="tl-points">
                                <li>Assisted engineers in preventive maintenance and monitoring of electrical equipment
                                    at an 800 MW thermal power plant.</li>
                                <li>Observed operation and maintenance of HT/LT switchgear, transformers, induction
                                    motors, VFDs and auxiliary systems.</li>
                                <li>Learned industrial safety procedures and maintenance practices through field
                                    inspections.</li>
                            </ul>
                        </div>
                    </article>

                    <!-- IOCL -->
                    <article class="tl-item reveal">
                        <div class="tl-logo">
                            <img src="Iocl Logo.jpeg" alt="Indian Oil Corporation logo">
                        </div>
                        <div class="tl-body">
                            <div class="tl-head">
                                <div>
                                    <h3 class="tl-role">Intern</h3>
                                    <p class="tl-company">Indian Oil Corporation Ltd</p>
                                </div>
                                <div class="tl-meta">
                                    <span><i class="fa-regular fa-calendar"></i> Dec 2022 – Jan 2023</span>
                                    <span><i class="fa-solid fa-location-dot"></i> Haldia, West Bengal</span>
                                </div>
                            </div>
                            <ul class="tl-points">
                                <li>Studied the 132 kV and 33 kV Gas Insulated Switchgear (GIS) network used in refinery
                                    power distribution.</li>
                                <li>Compared GIS and AIS substations on reliability, space use, maintenance and
                                    operational safety.</li>
                                <li>Analysed single-line diagrams, protection schemes and power factor improvement for
                                    refinery electrical systems.</li>
                            </ul>
                        </div>
                    </article>

                    <!-- VTPS -->
                    <article class="tl-item reveal">
                        <div class="tl-logo">
                            <img src="Apgenco Logo.jpeg" alt="APGENCO logo">
                        </div>
                        <div class="tl-body">
                            <div class="tl-head">
                                <div>
                                    <h3 class="tl-role">Intern</h3>
                                    <p class="tl-company">VTPS, APGENCO</p>
                                </div>
                                <div class="tl-meta">
                                    <span><i class="fa-regular fa-calendar"></i> May 2022 – Jul 2022</span>
                                    <span><i class="fa-solid fa-location-dot"></i> Vijayawada, Andhra Pradesh</span>
                                </div>
                            </div>
                            <ul class="tl-points">
                                <li>Practical training on thermal power plant operation, the power generation cycle and
                                    auxiliary systems.</li>
                                <li>Learned the working principles of boilers, turbines, generators, transformers and
                                    protection systems.</li>
                                <li>Observed maintenance practices for electrical equipment used in large-scale power
                                    generation.</li>
                            </ul>
                        </div>
                    </article>

                </div>

            </div>
        </section>


        <!-- =====================================================
             PROJECTS
        ====================================================== -->

        <section id="projects" class="section">
            <div class="container">

                <div class="section-head reveal">
                    <span class="section-label">03 / Projects</span>
                    <h2 class="section-title">Selected projects</h2>
                </div>

                <div class="projects-grid">

                    <!-- Project 01 -->
                    <article class="project-card reveal">
                        <div class="project-top">
                            <span class="project-num">01</span>
                            <span class="project-icon"><i class="fa-solid fa-bolt"></i></span>
                        </div>

                        <p class="project-course">ED5023 Power Converter Design · IIT Madras · Jul–Nov 2026</p>
                        <h3 class="project-title">Three-Port SiC DC/DC Converter for EV Auxiliary Power</h3>

                        <p class="project-desc">
                            Designed a 3.6 kW dual-active-bridge converter that supplies a 48 V
                            (2.4 kW) and a 12 V (1.2 kW) bus from a 280–450 V traction battery at
                            100 kHz, using one transformer and one low-voltage bridge.
                        </p>

                        <ul class="project-points">
                            <li>Derived the turns ratio (N = 8.5) and DAB inductance (0.32 µH); a PLECS model with
                                losses confirmed a worst-case phase shift of 54.6° against the 60° limit.</li>
                            <li>Designed the transformer and coupled inductor (TDK PC95 PQ65/54) by the
                                area-product method and sized the split DC-link capacitors.</li>
                            <li>Selected 650 V SiC MOSFETs (Infineon CoolSiC, TO-247-4) from loss and thermal
                                analysis and laid out the LV H-bridge PCB in Altium.</li>
                        </ul>

                        <div class="tags">
                            <span>DAB</span><span>SiC MOSFETs</span><span>PLECS</span><span>Magnetics
                                design</span><span>Altium</span>
                        </div>

                        <div class="project-links">
                            <a href="Assets/ED5023_ThreePort_DCDC_Converter.pdf" class="link-btn" target="_blank"
                                rel="noopener noreferrer">
                                <i class="fa-regular fa-file-lines"></i> Report
                                <i class="fa-solid fa-arrow-up-right-from-square ext"></i>
                            </a>
                        </div>
                    </article>

                    <!-- Project 02 -->
                    <article class="project-card reveal">
                        <div class="project-top">
                            <span class="project-num">02</span>
                            <span class="project-icon"><i class="fa-solid fa-battery-half"></i></span>
                        </div>

                        <p class="project-course">ED5361 Energy Storage &amp; Conversion · IIT Madras · Jul–Nov 2026</p>
                        <h3 class="project-title">LFP Battery Pack Charging &amp; Cell Balancing</h3>

                        <p class="project-desc">
                            Compared charging strategies and passive vs active cell balancing on a
                            four-cell LFP pack, using a cell model built from measured lab data.
                        </p>

                        <ul class="project-points">
                            <li>Built a Simscape model of a 15 Ah LFP cell from a C/10 pulse-relaxation OCV test and
                                a 2-RC equivalent circuit fitted at 25 °C and 40 °C.</li>
                            <li>Tested CC-CV (1C, 5C) and an SOC- and temperature-adaptive charger, each with no,
                                passive and switched-capacitor active balancing, from a 20 % SOC spread.</li>
                            <li>Passive balancing raised usable capacity from 40 % to 60 % at 81 % efficiency;
                                active balancing kept 95 %. An ageing model showed 1.8× more fade at 40 °C.</li>
                        </ul>

                        <div class="tags">
                            <span>Simscape</span><span>Equivalent circuit</span><span>CC-CV</span><span>Cell
                                balancing</span><span>Ageing</span>
                        </div>

                        <div class="project-links">
                            <a href="Assets/ED5361_LFP_Charging_Balancing.pdf" class="link-btn" target="_blank"
                                rel="noopener noreferrer">
                                <i class="fa-regular fa-file-lines"></i> Report
                                <i class="fa-solid fa-arrow-up-right-from-square ext"></i>
                            </a>
                        </div>
                    </article>

                    <!-- Project 03 -->
                    <article class="project-card reveal">
                        <div class="project-top">
                            <span class="project-num">03</span>
                            <span class="project-icon"><i class="fa-solid fa-gear"></i></span>
                        </div>

                        <p class="project-course">ED5211 E-Mobility Lab · IIT Madras · Jul–Nov 2026</p>
                        <h3 class="project-title">DC Motor Speed Control using STM32</h3>

                        <p class="project-desc">
                            Characterized a 12 V, 170 RPM DC geared motor and built closed-loop speed
                            control on an STM32 Nucleo-F446RE through MATLAB/Simulink code generation.
                        </p>

                        <ul class="project-points">
                            <li>Measured armature resistance (25.59 Ω), the no-load speed–voltage curve (R² = 0.998)
                                and starting current on a DSO.</li>
                            <li>Set up PWM, quadrature encoder and ADC voltage/current sensing, and tuned a PI
                                controller for a 1.5 s rise time with no overshoot.</li>
                            <li>Added feedforward compensation that cut speed error from ±13 to ±3 RPM, plus
                                sensorless speed estimation from motor voltage and current.</li>
                        </ul>

                        <div class="tags">
                            <span>STM32</span><span>Simulink</span><span>STM32CubeMX</span><span>PI
                                control</span><span>Sensorless</span>
                        </div>

                        <div class="project-links">
                            <a href="Assets/ED5211_DC_Motor_Control_STM32.pdf" class="link-btn" target="_blank"
                                rel="noopener noreferrer">
                                <i class="fa-regular fa-file-lines"></i> Report
                                <i class="fa-solid fa-arrow-up-right-from-square ext"></i>
                            </a>
                        </div>
                    </article>

                    <!-- Project 04 -->
                    <article class="project-card reveal">
                        <div class="project-top">
                            <span class="project-num">04</span>
                            <span class="project-icon"><i class="fa-solid fa-car-battery"></i></span>
                        </div>

                        <p class="project-course">B.Tech Project · VNIT Nagpur</p>
                        <h3 class="project-title">Battery Management System for Microgrid</h3>

                        <p class="project-desc">
                            Designed and simulated a Battery Management System for a microgrid
                            in MATLAB/Simulink, focusing on State of Charge estimation and cell
                            balancing.
                        </p>

                        <ul class="project-points">
                            <li>Reviewed battery chemistries for BESS and selected Li-ion for energy density,
                                efficiency, cycle life and safety.</li>
                            <li>Implemented and compared Coulomb Counting and Kalman Filter SOC estimation.</li>
                            <li>Compared passive and active balancing; switched-capacitor balancing beat
                                switched-inductor, and an inductor-based buck-boost balancer was attempted.</li>
                        </ul>

                        <div class="tags">
                            <span>MATLAB</span><span>Simulink</span><span>SOC Estimation</span><span>Kalman
                                Filter</span><span>Cell Balancing</span>
                        </div>

                        <div class="project-links">
                            <a href="Assets/BMS_Project_Report.pdf" class="link-btn" target="_blank"
                                rel="noopener noreferrer">
                                <i class="fa-regular fa-file-lines"></i> Report
                                <i class="fa-solid fa-arrow-up-right-from-square ext"></i>
                            </a>
                            <a href="https://github.com/abhinavyellamelli/Battery-Management-System-for-Microgrid"
                                class="link-btn" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-github"></i> Code
                                <i class="fa-solid fa-arrow-up-right-from-square ext"></i>
                            </a>
                        </div>
                    </article>

                    <!-- Project 05 -->
                    <article class="project-card reveal">
                        <div class="project-top">
                            <span class="project-num">05</span>
                            <span class="project-icon"><i class="fa-solid fa-location-crosshairs"></i></span>
                        </div>

                        <p class="project-course">EEL330 Microcontrollers · VNIT Nagpur</p>
                        <h3 class="project-title">One-Touch Women's Safety Alarm</h3>

                        <p class="project-desc">
                            Built a GPS/GSM-based emergency alert device that sends the user's
                            location to a pre-programmed SOS number when triggered. Implemented
                            wireless communication with a 433 MHz RF module and Embedded C++ on
                            Arduino Nano.
                        </p>

                        <div class="tags">
                            <span>Arduino</span><span>Embedded C++</span><span>GPS/GSM</span><span>433 MHz RF</span>
                        </div>
                    </article>

                </div>

            </div>
        </section>


        <!-- =====================================================
             SKILLS
        ====================================================== -->

        <section id="skills" class="section section-alt">
            <div class="container">

                <div class="section-head reveal">
                    <span class="section-label">04 / Skills</span>
                    <h2 class="section-title">Tools &amp; skills</h2>
                </div>

                <div class="skills-grid">

                    <div class="card skill-card reveal">
                        <h3 class="card-title"><i class="fa-solid fa-bolt"></i> Power Electronics Design</h3>
                        <div class="tags">
                            <span>DC/DC converters</span><span>Dual Active Bridge</span><span>SiC
                                MOSFETs</span><span>Magnetics design</span><span>Loss &amp; thermal
                                analysis</span><span>Altium Designer</span>
                        </div>
                    </div>

                    <div class="card skill-card reveal">
                        <h3 class="card-title"><i class="fa-solid fa-car-battery"></i> Battery Systems</h3>
                        <div class="tags">
                            <span>SOC estimation</span><span>Kalman Filter</span><span>Cell
                                balancing</span><span>Equivalent circuit models</span><span>CC-CV
                                charging</span><span>Ageing analysis</span>
                        </div>
                    </div>

                    <div class="card skill-card reveal">
                        <h3 class="card-title"><i class="fa-solid fa-microchip"></i> Embedded Systems</h3>
                        <div class="tags">
                            <span>STM32 Nucleo</span><span>STM32CubeMX</span><span>TI C2000
                                (TMS320F28379D)</span><span>Arduino Nano</span><span>PWM / ADC /
                                encoders</span><span>C / Embedded C</span><span>Embedded C++</span><span>Python</span>
                        </div>
                    </div>

                    <div class="card skill-card reveal">
                        <h3 class="card-title"><i class="fa-solid fa-wave-square"></i> Simulation &amp; Modelling</h3>
                        <div class="tags">
                            <span>MATLAB</span><span>Simulink</span><span>Simscape</span><span>PLECS</span><span>ANSYS
                                Maxwell</span><span>LTspice</span><span>NI Multisim</span>
                        </div>
                    </div>

                    <div class="card skill-card reveal">
                        <h3 class="card-title"><i class="fa-solid fa-plug"></i> Power &amp; Electrical</h3>
                        <div class="tags">
                            <span>HT/LT switchgear</span><span>Transformers</span><span>Induction
                                motors</span><span>VFDs</span><span>GIS / AIS</span><span>Protection schemes</span>
                        </div>
                    </div>

                    <div class="card skill-card reveal">
                        <h3 class="card-title"><i class="fa-solid fa-gears"></i> Industrial</h3>
                        <div class="tags">
                            <span>E&amp;I maintenance</span><span>MCC</span><span>Instrument
                                calibration</span><span>SAP</span><span>Industrial safety</span>
                        </div>
                    </div>

                    <div class="card skill-card reveal">
                        <h3 class="card-title"><i class="fa-solid fa-book-open"></i> Relevant Coursework</h3>
                        <div class="tags">
                            <span>Power Converter Design for EVs</span><span>Digital Controllers for Power
                                Applications</span><span>Power Electronics &amp; Motor Drives</span><span>Design &amp;
                                Control of AC Machines for EVs</span><span>Battery / Energy Storage
                                Systems</span><span>Electric Drives &amp; Their Control</span><span>Fundamentals of
                                Automotive Systems</span><span>Vehicle Dynamics</span><span>Battery Charging
                                Infrastructure</span><span>Foundations to EV Technology</span><span>Advanced Power
                                Electronics</span><span>Microcontrollers</span><span>Industrial
                                Automation</span><span>Smart Grid</span><span>Renewable Energy Systems</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>


        <!-- =====================================================
             LEADERSHIP & ACTIVITIES
        ====================================================== -->

        <section id="leadership" class="section">
            <div class="container">

                <div class="section-head reveal">
                    <span class="section-label">05 / Leadership</span>
                    <h2 class="section-title">Leadership &amp; activities</h2>
                </div>

                <div class="skills-grid">

                    <div class="card reveal">
                        <h3 class="card-title"><i class="fa-solid fa-briefcase"></i> Deputy Placement Coordinator</h3>
                        <p class="card-meta">Dept. of Engineering Design, IIT Madras · 2026 – Present</p>
                        <ul class="tl-points">
                            <li>Coordinate placement and internship activities for M.Tech students, working with
                                students, the placement office and recruiters.</li>
                            <li>Support recruiter outreach, scheduling and recruitment drives across automotive, EV
                                and related engineering domains.</li>
                        </ul>
                    </div>

                    <div class="card reveal">
                        <h3 class="card-title"><i class="fa-solid fa-masks-theater"></i> Cultural Secretary</h3>
                        <p class="card-meta">Dept. of EEE, VNIT Nagpur · 2021 – 2023</p>
                        <ul class="tl-points">
                            <li>Organized 15+ cultural events with 500+ participants, coordinating volunteers,
                                logistics and event execution.</li>
                        </ul>
                    </div>

                    <div class="card reveal">
                        <h3 class="card-title"><i class="fa-solid fa-medal"></i> Inline Roller Hockey</h3>
                        <p class="card-meta">State-Level Championships · 2014 – 2015</p>
                        <ul class="tl-points">
                            <li>Won 2 Gold and 1 Silver medals at the State-Level Inline Roller Hockey
                                Championships.</li>
                        </ul>
                    </div>

                    <div class="card reveal">
                        <h3 class="card-title"><i class="fa-solid fa-person-skating"></i> Outside work</h3>
                        <div class="tags">
                            <span>Inline skating</span><span>Travelling</span><span>Music</span><span>Fitness</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>


        <!-- =====================================================
             CONTACT
        ====================================================== -->

        <section id="contact" class="section contact">
            <div class="container">
                <div class="contact-box reveal">
                    <span class="section-label">06 / Contact</span>
                    <h2 class="contact-title">Let's talk about EVs, batteries or power electronics.</h2>
                    <p class="contact-lead">
                        I'm open to internships, research collaborations and project
                        discussions. The quickest way to reach me is email.
                    </p>

                    <div class="contact-actions">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abhinavyellamelli234@gmail.com&su=Portfolio%20Inquiry"
                            class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            <i class="fa-solid fa-envelope"></i>
                            abhinavyellamelli234@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/abhinavyellamelli/" class="btn btn-light" target="_blank"
                            rel="noopener noreferrer">
                            <i class="fa-brands fa-linkedin-in"></i>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </main>


    <!-- =====================================================
         FOOTER
    ====================================================== -->

    <footer class="footer">
        <div class="container footer-inner">
            <p>© <span id="year">2026</span> Abhinav Yellamelli</p>
            <a href="#home" class="back-top">Back to top <i class="fa-solid fa-arrow-up"></i></a>
        </div>
    </footer>

    <script src="script.js"></script>

</body>

</html>