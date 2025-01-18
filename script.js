/* Section Styling */
main {
    max-width: 900px;
    margin: 20px auto;
}

section {
    margin-bottom: 40px;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.card {
    background: #2e2e2e;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 20px 0;
}

.card h2 {
    margin-bottom: 15px;
    border-bottom: 2px solid #d4a373;
    display: inline-block;
    padding-bottom: 5px;
}

.card ul li {
    margin-bottom: 10px;
    padding-left: 15px;
    position: relative;
}

.card ul li::before {
    content: '\2022';
    position: absolute;
    left: 0;
    color: #d4a373;
    font-size: 1.2rem;
}

/* Footer */
footer {
    text-align: center;
    padding: 20px 0;
    background: #2e2e2e;
    color: #d4a373;
    margin-top: 40px;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
}

footer p {
    font-size: 0.9rem;
}

/* Animation for Sections */
.visible {
    opacity: 1;
    transform: translateY(0);
}
