<template>
  <div class="blog">
    
    <div class="blog-header">
        <h1>My Blog Lorem Ipsum</h1>
        <div class="blog-labels">
            <span>#app</span>
            <span>#asd</span>
            <span>#dsas</span>
        </div>
    </div>
    
    <p class="blog-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam
      molestias libero ex reiciendis pariatur veritatis repudiandae magnam,
      excepturi quibusdam aliquid exercitationem asperiores corporis nemo
      incidunt eligendi provident, nisi explicabo. Est consectetur, inventore
      molestiae nulla ad id unde, quidem expedita amet tempora, possimus esse
      nemo animi molestias! Dolorum eius quod culpa veniam sequi excepturi
      fugiat error quaerat amet eos obcaecati, tempore omnis quasi enim in?
      Iure, minus quod exercitationem recusandae molestiae modi ullam qui
      consectetur iste voluptates eaque explicabo illum, reprehenderit sunt non
      soluta. Provident maiores dolorum voluptatum optio expedita, maxime
      voluptates esse minus culpa similique officiis impedit architecto non!
    </p>
    <div class="blog-footer">
      <div class="footer-buttons">
          <button class="">Geri</button>
      </div>
      <div class="footer-text">
        <img src="../assets/images/randomuser.jpg" alt="" />
        <div class="caption">
          <p>Created by <strong>John Doe</strong></p>
          <span>At 19.07.2020</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Serif for body text */
@import url("https://fonts.googleapis.com/css2?family=Lora&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bitter&display=swap");
/* Sans-Serif for heading and other texts */
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");

:root {
  --font-lora: "Lora", serif;
  --font-bitter: "Bitter", serif;
  --font-lato: "Lato", sans-serif;
}

.blog {
  width: 50%;
  margin: 0 auto;
}

.blog-header{
    position: relative;
    width: 100%;
}

.blog-header h1{
  padding-top: 20px;
  text-align: center;
  font-size: 3rem;
  font-family: var(--font-lato);
  font-weight: 300;
}

.blog-header .blog-labels{
    position: absolute;
    top:0;
    right: 0;
    font-size: 0.8rem;
}

.blog-content {
  text-align: justify;
  line-height: 1.6;
  letter-spacing: 150%;
  font-size: 19px;
  font-family: var(--font-bitter);
}

.blog-footer{
    display: flex;
    flex-direction: row nowrap;
    justify-content: space-between;
}

.blog-footer .footer-text {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: flex-start;
  font-size: 0.7rem;
  letter-spacing: 1;
}

.blog-footer img {
  width: 50px;
  /* height: 64px; */
  margin-right: 10px;
  border-radius: 50%;
}

.blog-footer .caption p {
  padding: 0;
  margin: 5px 0 0 0;
}
</style>