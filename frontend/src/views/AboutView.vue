<template>
    <div class="container">
        <header>
            <h1>About Health Run</h1>
        </header>
        <h2>Our Mission</h2>
        <p>Empowering Health: Our mission is to empower individuals to take control of their health and wellness through safe and effective pharmaceuticals, innovative healthcare solutions, and valuable information.</p>

        <h2>Who We Are</h2>
        <p>Experience and Expertise: With over [X] years of experience in the pharmaceutical sector, Health Run has earned a reputation for excellence. Our team of skilled professionals, including pharmacists, scientists, and healthcare experts, are passionate about making a positive impact on the healthcare landscape.</p>
        <p>Quality and Safety: We adhere to the highest standards of quality and safety in the development, manufacturing, and distribution of our products. Health Run is proud to be recognized for its commitment to pharmaceutical excellence.</p>

        <h2>What We Offer</h2>
        <p>Product Portfolio: Health Run offers a diverse range of pharmaceutical products, including prescription medications, over-the-counter drugs, vitamins, and supplements. Our extensive product portfolio addresses a wide spectrum of health needs, from acute conditions to long-term wellness.</p>
        <p>Innovation: We continuously invest in research and development to bring innovative healthcare solutions to the market. Our dedication to innovation drives us to explore new treatments and therapies that enhance the quality of life for our customers.</p>
        <p>Customer-Centric Approach: Our customers are at the heart of everything we do. We prioritize your health and well-being, providing personalized care, expert advice, and exceptional customer service.</p>

        <h2>Our Commitment</h2>
        <p>Community Engagement: Health Run believes in giving back to the communities we serve. We actively engage in philanthropic initiatives and support healthcare programs that make healthcare accessible to underserved populations.</p>
        <p>Sustainability: We are committed to environmentally responsible practices throughout our operations. Health Run seeks to minimize our environmental footprint and contribute to a sustainable future.</p>

        <h2>Contact Us</h2>
  <div class="formb">
    <form class="form" action="https://formspree.io/f/xjvqvkbp" method="post">
      <label name="Name">Name and surname:</label>
      <input type="text"><br>
      <label for="email">Email:</label>
      <input type="text" name="email"><br>
      <label for="email">Your number:</label>
      <input type="text" name="cellphone"><br>
      <label for="email">Message:</label>
      <textarea name="message"></textarea>

      <button type="submit" name="submit">Submit</button>
    </form>
  </div>
</div>

</template>
<script>
export default {
}
</script>
<style scoped>
.container{
    display:grid;
    justify-content: center;
    align-items: center;
    padding-top: 8rem;
}
.formb{
  padding-left:40.1% ;
  padding-bottom: 10px;
}
.form{
  --bg-color: #fff;
  --box-color: #007BB8;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  gap: 1px; 
  border-radius: 50px;
  border: 2px solid var(--box-color); 
  box-shadow: 5px 5px var(--box-color); 
  width: 300px;
  justify-content: center;
}
</style>