<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Portfolio website</title>
  <link rel="stylesheet" href="style.css">
 <script src="https://kit.fontawesome.com/a0b29c1545.js" crossorigin="anonymous"></script>"
</head>
<body>
  <div id="header">
    <div class="container">
      <nav>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Certifications">Certifications</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
      <div class="header-text">
        <p>Frontend Developer</p>
        <h1>Hi, I'm <span>Kalpana Shree</span><br>from Chennai</h1>
      </div>
    </div>
  </div>

  <div id="About">
    <div class="container">
      <div class="row">
        <div class="About-col-1">
          <img src="my.jpg" alt="About me image">
        </div>
        <div class="About-col-2">
          <h1 class="sub-title">About Me</h1>
          <p>I'm a passionate Frontend Developer with a keen eye for design and a love for creating beautiful, responsive, and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I bring ideas to life on the web. I thrive in collaborative environments, working closely with designers, backend developers, and product teams to ensure seamless functionality and a polished user experience. Whether I'm crafting sleek interfaces or optimizing performance, I'm always focused on delivering the best possible digital solutions. Let's build something amazing together!</p>
          <div class="tab-titles">
            <p class="tab-links active-link" onclick="opentab('skills')">Skills</p>
            <p class="tab-links" onclick="opentab('education')">Education</p>
          </div>
          <div class="tab-contents active-tab" id="skills">
            <ul>
              <li><span>HTML</span></li>
              <li><span>CSS</span></li>
              <li><span>JavaScript</span></li>
              <li><span>Java</span></li>
            </ul>
          </div>
          <div class="tab-contents" id="education">
            <ul>
              <li><span>SSLC</span><br>2019-2020<br>M.CT.M School</li>
              <li><span>HSLC</span><br>2021-2022<br>M.CT.M School</li>
              <li><span>BE-CSE</span><br>2022-2026<br>At Sathyabama University<br>Currently pursuing 3rd year</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
   
  <div id="Certifications">
    <div class="container">
      <h1 class="sub-title">My Certifications</h1>
      <div class="Certifications-list">
        <div>
          <h2>MATLAB Programming Techniques</h2>
          <p>Participants learn how to write clean, modular, and scalable code using advanced MATLAB functions and toolboxes. Earning this certificate demonstrates proficiency in MATLAB programming, making it valuable for professionals in engineering, research, and data science.</p>
          <a href="#">Learn more</a>
        </div>
        <div>
          <h2>Nascom Digital 101</h2>
          <p>The NASCOM Digital 101 certificate is a foundational program aimed at introducing learners to essential digital skills and concepts. This certificate course typically covers topics such as basic computer operations, internet usage, digital communication tools, and an introduction to productivity software like word processors and spreadsheets. The course is designed for beginners, equipping them with practical skills to navigate the digital world confidently.</p>
          <a href="#">Learn more</a>
        </div>
        <div>
          <h2>MATLAB Onramp</h2>
          <p>The MATLAB Onramp certificate is an entry-level certification designed for beginners to learn the fundamentals of MATLAB. This free, self-paced course introduces essential skills like working with variables, performing calculations, and creating basic scripts. It provides hands-on experience with interactive exercises, helping learners understand MATLAB’s environment and basic programming techniques.</p>
          <a href="#">Learn more</a>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div id="Projects">
    <div class="container">
      <h1 class="sub-title">My Projects</h1>
      <div class="Projects-list">
        
        <div class="Projects">
          <img src="work-1.png">
          <div class="layer">
            <h3>Portfolio Website</h3>
            <p>A portfolio website is a personalized platform for showcasing your work, skills, and accomplishments to potential clients, employers, or collaborators.</p>
          </div>
        </div>
        
        <div class="Projects">
          <img src="work-2.png">
          <div class="layer">
            <h3>Simple Calculator</h3>
            <p>A simple calculator project in Java is a beginner-friendly application that performs basic arithmetic operations like addition, subtraction, multiplication, and division.</p>
          </div>
        </div>
        
        <div class="Projects">
          <img src="work-3.png">
          <div class="layer">
            <h3>Face Recognition and Attendance Management System</h3>
            <p>A Face Recognition and Attendance Management System uses facial recognition technology to automatically record attendance by identifying and verifying individuals' faces.</p>
          </div>
        </div>
        
      </div>
      <a href="#" class="btn">See more</a>
    </div>
  </div>

<div id="Contact">
  <div class="container">
    <div class="row">
      <div class="Contact-left">
        <h1 class="sub-title">Contact Me</h1>
        <p> <i class="fa-solid fa-paper-plane"></i> kalpanashree16@gmail.com</p>
        <p> <i class="fa-solid fa-square-phone"></i> 8248305046</p>
        <div class="social-icons">
          <a href="https://facebook.com/"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://twitter.com/"><i class="fa-brands fa-twitter-square"></i></a>
          <a href="https://instagram.com/"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://linkedin.com/"><i class="fa-brands fa-linkedin"></i></a>
          
        </div>
        <a href="Resume (2).pdf"  download class="btn btn2">Download CV</a>
      </div>
      <div class="Contact-right">
      <form name="submit-to-google-sheet">
        <input type="text" name="Name" placeholder="Your Name" required>
        <input type="email" name="Email" placeholder="Your Email" required>
        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
        <button type="submit" class="btn btn2">Submit</button>
      </form>
      <span id="msg"></span>

</div>
    </div>
  </div>
  
</div>

  <script>
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {
      for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
      }
      for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
    }
  </script>
  <script>
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwCR15nKY1ZEmWgLTqW0QPoPGNRGKhFDaaFeo6_982-kdEmXPNJAb_ld-EtQehmQaXE/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          msg.innerHTML = "Message sent successfully"
          setTimeout(function(){
             msg.innerHTML = ""

          },5000)
          form.reset()
        })

        .catch(error => console.error('Error!', error.message))
    })
  </script>
</body>
</html>
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
}


body {
  background-color: #fff;
  color: #fff;
}

#header {
 width: 100%;
 height: 100vh;
 background-image: url(intro.jpg);
 background-size: cover;
 background-position: center;
}
.container{
  padding: 10px 10%;
}
nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
nav ul li{
  display: inline-block;
  list-style: none;
  margin: 10px 20px;
}
nav ul li a{
  color:#fff;
  text-decoration: none;
  font-size: 18px;
  position: relative;
}
nav ul li a::after{
  content:'';
  width: 3;
  height: 3px;
  background: #ff004f;
  position: absolute;
  left: 0;
  bottom: -6px;
}
nav ul li a:hover::after{
  width: 100%;
}
.header-text{
  margin-top:20%;
  font-size: 30px;
}
.header-text h1{
  font-size: 60px;
  margin-top: 20px;
}
.header-text h1 span{
  color: #ff004f;
}
/*---------------about-------------*/
#About{
  padding:80px 0;
  margin: 0;
  background-color: #080808;
  color: #fff;
  width: 100%;
  height: 100vh;
  background-image: url(black.avif);
  background-size: cover;
  background-position: center;
}
.row{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

}
.About-col-1 img{
  flex-basis: 35%;
}
.About-col-1 img{
  width: 80%;
  border-radius: 15px;
}
.About-col-2{
  flex-basis: 60%;
}
.sub-title{
  font-size: 60px;
  font-weight: 600;
  color: #ff004f;
}
.tab-titles{
  display:flex;
  margin: 20px 0 40px;
}
.tab-links{
  margin-right: 50px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
}
.tab-links::after{
  content:'';
  width:0;
  height: 3px;
  background: #ff004f;
  position: absolute;
  left: 0;
  bottom: -8px;
  transition: 0.5s;
}
.tab-links.active-link::after{
  width: 50%;
}
.tab-contents ul li{
  list-style:none;
  margin: 10px 0;
}
.tab-contents ul li span{
  color:#b54769;
  font-size: 14px;
}
.tab-contents{
  display: none;
}
.tab-contents.active-tab{
  display: block;
}
/*-------------certification-----------*/
#Certifications{
  padding: 30px 0;
  width: 100%;
  height: 100vh;
  background-image: url(black.avif);
  background-size: cover;
  background-position: center;

}
.Certifications-list{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
  margin-top: 50px;
}
.Certifications-list div{
  background: #262626;
  padding: 40px;
  font-size: 13px;
  font-weight: 300;
  border-radius: 10px;
  transition: background 0.5s, transform 0.5s;
}
.Certifications-list div h2{
  font-size: 30px;
  font-_weight: 500;
  margin-bottom: 15px;
}
.Certifications-list div a{
  text-decoration: none;
  color: #fff;
  font-size: 12px;
  margin-top: 20px;
  display: inline-block;
}
.Certifications-list div:hover{
background: #ff004f;
transform: translateY(-10px);
}
/*------------Projects---------*/
#Projects{
  padding: 50px 0;
  width: 100%;
  height: 100vh;
  background-image: url(black.avif);
  background-size: cover;
  background-position: center;
}
.Projects-list{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
  margin-top: 50px;
}
.Projects{
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}
.Projects img{
  width: 95%;
  border-radius: 10px;
  display: block;
  transition: transform 0.5s;
}
.layer{
  width: 100%;
  height: 0;
  background: linear-gradient(rgba(0,0,0,0.6),#ff004f);
  border-radius: 10px;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  font-size: 14px;
  transition: height 0.5s;
}
.layer h3{
  font-weight: 500;
  margin-bottom: 20px;
}
.Projects:hover img{
  transform: scale(1.1);

}
.Projects:hover .layer{
  height: 100%;
}
.btn{
  display: block;
  margin: 50px auto;
  width: fit-content;
  border: 1px solid #ff004f;
  padding: 14px 50px;
  border-radius: 6px;
  text-decoration: none ;
  color: #fff;
  transition: background 0.5s;
}
.btn:hover{
  background: #ff004f;
}
/*------------contact----------*/
#Contact {
  padding: 50px 0;
  width: 100%;
  height: 100vh;
  background-image: url(black.avif);
  background-size: cover;
  background-position: center;
  display: flex; /* Add flex to #Contact */
  justify-content: center; /* Centers the elements horizontally */
  align-items: center; /* Centers the elements vertically */
}

.Contact-left {
  flex-basis: 35%;
}

.Contact-right {
  flex-basis: 60%;
  margin-left: auto; /* This aligns the form to the right */
}

.Contact-left p {
  margin-top: 30px;
}

.Contact-left p i {
  color: #ff004f;
  margin-right: 15px;
  font-size: 25px;
}

.social-icons {
  margin-top: 30px;
}

.social-icons a {
  text-decoration: none;
  font-size: 30px;
  margin-right: 15px;
  color: #ababab;
  display: inline-block;
  transition: transform 0.5s;
}

.social-icons a:hover {
  color: #ff004f;
  transform: translateY(-5px);
}

.btn.btn2 {
  display: inline-block;
  background: #ff004f;
}

.Contact-right form {
  width: 100%;
}

form input, form textarea {
  width: 100%;
  border: 0;
  outline: none;
  background: #262626;
  padding: 15px;
  margin: 15px 0;
  color: #fff;
  font-size: 18px;
  border-radius: 6px;
}
form .btn2{
  padding: 14px 60px;
  font-size: 18px;
  margin-top: 20px;
  cursor: pointer;
}
/*---------css for ss------*/
@media only screen and (max-width: 600px){

}
#msg{
  color:#61b752;
  margin-top: -40px;
  display: block;
}
