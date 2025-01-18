<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basmala's CV</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #000;
            color: #fff;
        }
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            background-color: #111;
            position: fixed;
            width: 100%;
            z-index: 1000;
        }
        .menu-icon {
            font-size: 24px;
            cursor: pointer;
        }
        .sidebar {
            position: fixed;
            top: 0;
            left: -300px;
            width: 300px;
            height: 100%;
            background-color: #222;
            padding: 20px;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
            transition: left 0.3s ease;
        }
        .sidebar.active {
            left: 0;
        }
        .sidebar a {
            display: block;
            color: #fff;
            text-decoration: none;
            margin: 15px 0;
            font-size: 18px;
            transition: color 0.3s;
        }
        .sidebar a:hover {
            color: #00bcd4;
        }
        main {
            padding: 80px 20px 20px;
        }
        section {
            margin: 40px 0;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        section.visible {
            opacity: 1;
            transform: translateY(0);
        }
        section img {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 20px;
        }
        .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #00bcd4;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
        }
        .btn:hover {
            background-color: #0097a7;
        }
    </style>
</head>
<body>
    <header>
        <div>Basmala's CV</div>
        <div class="menu-icon" onclick="toggleSidebar()">☰</div>
    </header>

    <div class="sidebar" id="sidebar">
        <a href="#profile">Profile</a>
        <a href="#experience">Work Experience</a>
        <a href="#courses">Courses</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#languages">Languages</a>
        <a href="#extracurricular">Extracurricular</a>
        <a href="#contact">Contact</a>
        <a href="#hobbies">Hobbies</a>
    </div>

    <main>
        <section id="profile">
            <img src="https://via.placeholder.com/800x300?text=Profile" alt="Profile">
            <h1>Profile</h1>
            <p>Food Technology student with experience in quality assurance, lab testing, and food manufacturing. Passionate about food safety and nutrition, aiming to advance in clinical and genetic nutrition. Skilled in problem-solving and detail-oriented with a proactive mindset.</p>
        </section>

        <section id="experience">
            <img src="https://via.placeholder.com/800x300?text=Work+Experience" alt="Work Experience">
            <h1>Work Experience</h1>
            <ul>
                <li><strong>Abu Adil Confectionery Factory</strong> (November 2023 – December 2023, 4 weeks)
                    <ul>
                        <li>Assisted in production processes, machine operations, and quality control systems.</li>
                        <li>Conducted lab tests (heat and alcohol tests) to ensure product quality and compliance.</li>
                        <li>Maintained records and provided weekly reports on lab test results and recommendations for improvement.</li>
                    </ul>
                </li>
                <li><strong>Field Training at El Gharbia Milling Company, Mahalla</strong> (April 2024, 4 days)
                    <ul>
                        <li>Assisted in rice milling production processes and conducted quality tests.</li>
                        <li>Observed equipment operations and analyzed product samples.</li>
                        <li>Gained exposure to plastic bag and feed manufacturing processes.</li>
                    </ul>
                </li>
            </ul>
        </section>

        <section id="courses">
            <img src="https://via.placeholder.com/800x300?text=Courses" alt="Courses">
            <h1>Courses</h1>
            <ul>
                <li><strong>PREREQUISITES PROGRAMS (PRP'S)</strong> (23 August 2024)
                    <ul>
                        <li>Essential food safety and quality assurance principles.</li>
                        <li>Gained knowledge on standards and requirements related to food manufacturing processes.</li>
                    </ul>
                </li>
            </ul>
        </section>

        <section id="education">
            <img src="https://via.placeholder.com/800x300?text=Education" alt="Education">
            <h1>Education</h1>
            <p>Samannoud Technological University (2022 – 2026)<br> Currently in the third year of the Bachelor’s degree in Food Technology.</p>
        </section>

        <section id="skills">
            <img src="https://via.placeholder.com/800x300?text=Skills" alt="Skills">
            <h1>Skills</h1>
            <ul>
                <li>ICDL \ Microsoft: PowerPoint, Word, Excel, SPSS</li>
                <li>Soft skills: Teamwork, accountability, active participation</li>
                <li>Individual skills: Problem-solving, creativity, leadership, attention to detail</li>
            </ul>
        </section>

        <section id="languages">
            <img src="https://via.placeholder.com/800x300?text=Languages" alt="Languages">
            <h1>Languages</h1>
            <p>Arabic: ★★★★★★<br> English: ★★★★☆☆</p>
        </section>

        <section id="extracurricular">
            <img src="https://via.placeholder.com/800x300?text=Extracurricular+Activities" alt="Extracurricular Activities">
            <h1>Extracurricular Activities</h1>
            <p>2024 – Present: Hayah Karima Association (Assisted in outreach programs and community engagement)<br> 2019 – 2021: Resala Association (Volunteered in various community development activities)</p>
        </section>

        <section id="contact">
            <img src="https://via.placeholder.com/800x300?text=Contact" alt="Contact">
            <h1>Contact</h1>
            <p>Email: basmala.mohamed.abd.al.hey@gmail.com</p>
        </section>

        <section id="hobbies">
            <img src="https://via.placeholder.com/800x300?text=Hobbies+%26+Interests" alt="Hobbies & Interests">
            <h1>Hobbies & Interests</h1>
            <ul>
                <li>✍🏻 Journaling</li>
                <li>📚 Learning New Tools</li>
                <li>🎨 Painting on Glass</li>
                <li>📚 Reading Scientific Books</li>
            </ul>
        </section>
    </main>

    <script>
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('active');
        }

        // Animate sections on scroll
        const sections = document.querySelectorAll('section');
        window.addEventListener('scroll', () => {
            const triggerBottom = window.innerHeight / 5 * 4;
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < triggerBottom) {
                    section.classList.add('visible');
                } else {
                    section.classList.remove('visible');
                }
            });
        });
    </script>
</body>
</html>
