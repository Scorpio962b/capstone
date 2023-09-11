<!-- <template>
    <body>
    <nav>
      <div class="navbar">
        <div class="container nav-container">
          <div class="logo">
            <img src="https://i.postimg.cc/02Ys2Qw6/logonew.jpg" alt="companyLogo" width="120" height="50">
          </div>
          
          <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          
          <div class="menu-items">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <!-- <router-link to="/contact">Contact</router-link> -->
            <!-- <router-link to="/products">products</router-link>
            <router-link to="/admin">Admin</router-link>
            <router-link to="/cart">Cart</router-link>
          </div>
        </div>
      </div>
    </nav>
  </body>
  
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    background: #b8dff0;

}

.container {
  max-width: 1050px;
  width: 90%;
  margin: auto;
  
}

.navbar {
  width: 100%;
  height: 67px;
  box-shadow: 0 1px 4px rgb(48, 85, 121);
  position:fixed;
  background:#b8dff0;
}

.nav-container {
  display: flex;
  align-items: center;
  height: 62px;
}

.navbar .menu-items {
  display: flex;
}

.navbar .nav-container a {
  text-decoration: none;
  color: #223361;
  font-weight: 400;
  font-size: 20px;
  padding:12px;
}

.navbar .nav-container a:hover{
    font-weight: bolder;
}

.nav-container {
  display: block;
  position: relative;
  height: 50px;
}

.nav-container .checkbox {
  position: absolute;
  display: block;
  height: 35px;
  width: 35px;
  top:0px;
  left: 20px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
}

.nav-container .hamburger-lines {
  display: block;
  height: 26px;
  width: 32px;
  position: absolute;
  top: 17px;
  left: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav-container .hamburger-lines .line {
  display: block;
  height: 6px;
  width: 100%;
  border-radius: 10px;
  background: #0e2431;
}

.nav-container .hamburger-lines .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.1s ease-in-out;
}

.nav-container .hamburger-lines .line2 {
  transition: transform 0.2s ease-in-out;
}

.nav-container .hamburger-lines .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}

.navbar .menu-items {
  padding-top: 120px;
  box-shadow: inset 0 0 2000px #223361 ;
  height: 100vh;
  width: 100%;
  transform: translate(-150%);
  display: flex;
  flex-direction: column;
  margin-left: -40px; 
  transition: transform 0.5s ease-in-out;
  text-align: center;
}

.logo {
  position: absolute;
  top: 5px;
  right: 15px;
  font-size: 1.2rem;
  color: #0e2431;
}

.nav-container input[type="checkbox"]:checked ~ .menu-items {
  transform: translateX(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
  transform: rotate(45deg);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
  transform: scaleY(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
  transform: rotate(-45deg);
}

.nav-container input[type="checkbox"]:checked ~ .logo{
  display: none;
}
</style> --> -->